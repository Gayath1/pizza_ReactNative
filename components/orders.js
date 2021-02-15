import React, { Component, useState, useEffect, Fragment } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image,SafeAreaView,ScrollView, FlatList } from 'react-native';
import firebase from '../database/firebase';


export  class orders extends React.Component{
  state={
    uid:firebase.auth().currentUser.uid,
    displayName: firebase.auth().currentUser.displayName,
    lists:[],
  }
    componentDidMount(){
        const recentPostsRef = firebase.database().ref('/order/' + firebase.auth().currentUser.uid);
        recentPostsRef.once('value').then(snapshot => {
          console.log((Object.keys(snapshot.val())))
            this.setState({lists:Object.values(Object.values(snapshot.val()))} )
            
        })
    }

    details = (id) => {
      
      this.props.navigation.navigate('details', {id: id})
    }

  render() {
     
    console.log(this.state.lists)
     

  

    return (
      
      <SafeAreaView style={styles.container}> 
      <ScrollView style={styles.scrollView}>
      
          {this.state.lists.map((current, i) => (
            
           <View>
           {current.map((current, i) => (
           <Fragment>
           
            <TouchableOpacity style={styles.card}  onPress={() => this.details(current.id)}>
                <Image style={styles.img} key={i} source={{uri: current.lists[0].imageUrl}}/>
                <Text  style={styles.txt} key={i}>{current.lists[0].name}</Text>
                <Text  style={styles.txt} key={i}>{current.lists[0].size}</Text>
                <Text style={styles.txt} key={i}>LKR.{current.lists[0].price}</Text>
            </TouchableOpacity>
           </Fragment> 
           ))} 
           </View> 
           ))}   
                                   
      </ScrollView>                   
      </SafeAreaView>
      
    );
  
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    
    
    
  },
  scrollView: {
    
    
    backgroundColor: '#fff',
    padding: 0,
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
      height:200,
      
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
 }
});
export default orders;