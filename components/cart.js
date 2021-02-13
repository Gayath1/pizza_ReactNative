import React, { Component, useState, useEffect, Fragment } from 'react';
import {StyleSheet, Text, View, Image,Button,SafeAreaView,StatusBar, TouchableOpacity, ToastAndroid,  ScrollView} from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from '../database/firebase';


export  class cart extends React.Component {

    
    state={
        uid:firebase.auth().currentUser.uid,
        displayName: firebase.auth().currentUser.displayName, 
        lists:[],
        flashMessage: false,
        randomid:''
      }
      
    
      
        componentDidMount(){
            const recentPostsRef = firebase.database().ref('/cart/' + firebase.auth().currentUser.uid);
            recentPostsRef.once('value').then(snapshot => {
                this.setState({lists: Object.values(snapshot.val()) } )
                
                
            })
        }

        remove = (id) => {
            
            firebase.database().ref('/cart/'+ firebase.auth().currentUser.uid).remove().then((res) => {
        
              console.log('Removed!')
              ToastAndroid.show("Item removed !", ToastAndroid.SHORT);
              
            })
            .catch(error => this.setState({ errorMessage: error.message }))
          
        }
        
   
        
    render(){
        
        
    return (
    
    <View style={styles.container}>
    
    {this.state.lists.map((current, lists) => (
          <Fragment>
            <View style={styles.card}>
                <Image style={styles.img} source={{uri: current.lists[0].imageUrl}}/>
                <Text  style={styles.txt} key={lists}>{current.lists[0].name}</Text>
                <Text  style={styles.txt} key={lists}>{current.lists[0].size}</Text>
                <Text style={styles.txt} key={lists}>LKR.{current.lists[0].price}</Text>
                

                

            
            </View>
           </Fragment>
                    ))}
    
                    <TouchableOpacity style={styles.btn1} onPress={() =>this.remove(current.randomid)}>
                  <Text style={styles.txtbtn} >Remove</Text>
                </TouchableOpacity>
                    
          
    
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
  
export default cart;
