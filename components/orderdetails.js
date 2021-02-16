import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, TouchableOpacity,Image } from 'react-native';
import firebase from '../database/firebase';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';



export default class orderdetails extends React.Component {

  //add componentDidUpdate for realtime update status
  
  state = {
      name:'',
      address:'',
      mobile:'',
      lists: this.props.route.params.lists,
      status:[],
      
  }

 
  componentDidMount(){
    const recentPostsRef = firebase.database().ref('/order/' + firebase.auth().currentUser.uid );
    recentPostsRef.once('value').then(snapshot => {
        this.setState({status: Object.values(Object.values(snapshot.val())) } )
        
    })
  }
  componentDidUpdate(){
    const recentPostsRef = firebase.database().ref('/order/' + firebase.auth().currentUser.uid );
    recentPostsRef.once('value').then(snapshot => {
        this.setState({status: Object.values(Object.values(snapshot.val())) } )
        
    })
  }

  
  
  render() {
    
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
        <View style={styles.container}>
         {this.state.status.map((current, i) => ( 
          <View style={{flex: 1}}>
          
          <ProgressSteps activeStep={current.status}>
        <ProgressStep label="Order confirmed" removeBtnRow={true}>
            
        </ProgressStep>
        <ProgressStep label="Preparing foods" removeBtnRow={true}>
            
        </ProgressStep>
        <ProgressStep label="Out for delivery" removeBtnRow={true}>
            
        </ProgressStep>
        <ProgressStep label="Delivered" removeBtnRow={true}>
            
        </ProgressStep>
    </ProgressSteps>
         
          
        
        
      <Text style={styles.loginText}>
          Status: {current.status}
        </Text> 
        <Text style={styles.loginText}>
          Name: {current.name}
        </Text>
        <Text style={styles.loginText}>
          Address: {current.address}
        </Text>
        <Text style={styles.loginText}>
          Mobile:{current.mobile}
        </Text>
                             
      </View>
       
      ))}  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center',
    fontSize: 30,
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  btn1:{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,  
    elevation: 10,
    backgroundColor:'#FFFFFF',
    borderRadius: 5,
    marginTop:20,
    marginBottom:40,
    
},
  txtbtn:{
    textAlignVertical: 'center',
    textAlign:'center',
    color: '#000000',
    borderRadius:10,
    fontSize:20,
    fontWeight: 'bold',
    height:40
}
});