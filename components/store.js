import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, NoteCard, FlatList } from 'react-native';
import firebase from '../database/firebase';
export default class store extends React.Component {
  state={
    uid:firebase.auth().currentUser.uid,
    displayName: firebase.auth().currentUser.displayName,
    lists:[]
  }
    componentDidMount(){
        const recentPostsRef = firebase.database().ref('/store');
        recentPostsRef.once('value').then(snapshot => {
            this.setState({lists : Object.values(snapshot.val()) })
            
        })
    }

  render() {
     console.log(this.state)
    
     

  

    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
          Hello, {this.state.displayName}
        </Text>
        
       
        {this.state.lists.map((current, i) => (
                        <Text>{current.name}</Text>
                    ))}
          
       
      </View>
      
    );
  
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
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
      
}
});