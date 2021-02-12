import React, { Component, useState, useEffect, Fragment } from 'react';
import {StyleSheet, Text, View, Image,Button, TouchableOpacity, Animated} from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from '../database/firebase';
import { render } from 'react-dom';

export  class details extends React.Component {

    
    state={
        uid:firebase.auth().currentUser.uid,
        displayName: firebase.auth().currentUser.displayName,
        lists:[],
        id: this.props.route.params.id
      }
      
    
      
        componentDidMount(){
            const recentPostsRef = firebase.database().ref('/store' + this.state.id);
            recentPostsRef.once('value').then(snapshot => {
                this.setState({lists : Object.values(snapshot.val()) })
                
                
            })
        }
   
    render(){
        
        console.log(this.state.id);
    return (
    
    <Animated.View style={styles.container}>
    
        
        
        
        <Text style={styles.txtbtn} >{this.state.id}</Text>
       
        
        
    
    </Animated.View>
    
         );
};

}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        
      
    },
    btn:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,  
        elevation: 10,
        backgroundColor:'#FFFFFF',
        borderRadius: 10,
        marginTop:30,
        marginBottom:30
    },
    btn1:{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,  
      elevation: 10,
      backgroundColor:'#FFFFFF',
      borderRadius: 10,
      marginTop:20,
      marginBottom:40
  },
    txtbtn:{
        
        textAlign:'center',
        padding:10,
        margin:5,
        color: '#000000',
        borderRadius:10,
        width: 120,
        height: 50,
        fontSize:20,
        fontWeight: 'bold'
        
},
    
    Image:{
        flex: 1,
        width: 200,
        height: 100,
        resizeMode: 'contain'
    },
    bigBlue: {
        
      color: 'black',
      fontFamily: 'notoserif',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
  });
  
export default details;
