import React, { Component, useState, useEffect, Fragment } from 'react';
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
      
        {this.state.lists.map((current, i) => (
          <Fragment>
            <View style={styles.card}>
                <Text  style={styles.txt} key={i}>{current.name}</Text>
                <Text style={styles.txt} key={i}>LKR.{current.price}</Text>
            </View>
           </Fragment>
                    ))}
       <Text></Text>
       <Text></Text>
 
      </View>
      
    );
  
  }

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
      
}
});