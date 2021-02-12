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
        id: this.props.route.params.id,
        lists:[],
      }
      
    
      
        componentDidMount(){
            const recentPostsRef = firebase.database().ref('/store/' + this.state.id );
            recentPostsRef.once('value').then(snapshot => {
                this.setState({lists : Object.values(snapshot.val()) })
                
                
            })
        }
   
    render(){
        console.log(this.state)
        
    return (
    
    <View style={styles.container}>
    
        
                  
          
    
    </View>
    
         );
};

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        
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
          width: '25%',
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
  
export default details;
