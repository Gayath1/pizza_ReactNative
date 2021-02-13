import React, { Component, useState, useEffect, Fragment } from 'react';
import {StyleSheet, Text, View, Image,Button, TouchableOpacity, Animated} from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from '../database/firebase';
var uuid = require('react-native-uuid');

export  class details extends React.Component {

    
    state={
        uid:firebase.auth().currentUser.uid,
        displayName: firebase.auth().currentUser.displayName,
        id: this.props.route.params.id,
        lists:[],
        flashMessage: false
      }

      
        componentDidMount(){
            const recentPostsRef = firebase.database().ref('/store/').orderByChild('id').equalTo(this.state.id);
            recentPostsRef.once('value').then(snapshot => {
                this.setState({lists : Object.values(snapshot.val()) })
                
                
            })
        }

        addtocart = () => {
            
            firebase.database().ref('/cart/' + firebase.auth().currentUser.uid).push({
              randomid: uuid.v4(),
              lists: this.state.lists,
              
            }).then((res) => {
        
              console.log('Add to cart!')
              this.setState({
                flashMessage: true
              },()=>{setTimeout(() => this.closeFlashMessage(), 3000)})
              
            })
            .catch(error => this.setState({ errorMessage: error.message }))
          
        }
        closeFlashMessage(){
          this.setState({
            flashMessage: false
          })
        }
   
    render(){
        
        
    return (
    
    <View style={styles.container}>
    {this.state.lists.map((current, i) => (
          <Fragment>
            <View style={styles.card}>
                <Image style={styles.img} source={{uri: current.imageUrl}}/>
                <Text  style={styles.txt} key={i}>{current.name}</Text>
                <Text  style={styles.txt} key={1}>{current.size}</Text>
                <Text style={styles.txt} key={2}>LKR.{current.price}</Text>

                <TouchableOpacity style={styles.btn1} onPress={() =>this.addtocart()}>
                  <Text style={styles.txtbtn} >Add to cart</Text>
                </TouchableOpacity>

                {this.state.flashMessage==true?
          <View style={styles.flashMessage}>
          <Text style={styles.txtbtn}>Added to the cart</Text>
        </View>
        :
        <View style={styles.flashMessage1}>
        <Text style={styles.txtbtn}></Text>
        </View>
        }
            </View>
           </Fragment>
                    ))}
    
        
                    
          
    
    </View>
    
         );
};

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        
        backgroundColor: '#fff',
        
      },
      textStyle: {
        fontSize: 15,
        marginBottom: 20
      },
        card:{
          flex: 1, 
          margin:10,
          justifyContent: "center",
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,  
          elevation: 10,
          backgroundColor:'#FFFFFF',
          borderRadius: 10,
          height:'30%',
          width: '95%',
    },
      txt:{
          
          textAlign:'center',
          textAlignVertical:'center',
          color: '#000000',
          borderRadius:10,
          fontSize:20,
          fontWeight: 'bold'
          
    },
     img:{
      
      
       resizeMode: "center",
       height:'40%',
       width:'100%'
     },
     btn1:{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,  
      elevation: 10,
      backgroundColor:'#FFFFFF',
      borderRadius: 5,
      margin:20,
      
      
  },
    txtbtn:{
      textAlignVertical: 'center',
      textAlign:'center',
      color: '#000000',
      borderRadius:10,
      fontSize:20,
      fontWeight: 'bold',
      height:40
  },
  flashMessage:{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,  
      elevation: 10,
      backgroundColor:'#16c79a',
      borderRadius: 5,
      margin:20,
    
  },
  flashMessage1:{
    
    margin:20,
  
}
  });
  
export default details;
