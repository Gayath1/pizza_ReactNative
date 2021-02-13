import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import firebase from '../database/firebase';


export default class orderplace extends React.Component {
  
  state = {
      name:'',
      address:'',
      mobile:'',
      lists: this.props.route.params.lists
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  order = () => {
    if(this.state.name === '' && this.state.mobile === '') {
      Alert.alert('Enter details !')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase.database().ref('/order/' + firebase.auth().currentUser.uid).push({
        
        lists: this.state.lists,
        
      })
      firebase.database().ref('/cart/' + firebase.auth().currentUser.uid).remove()
      
      .then((res) => {
        
        console.log('order placed!')
        this.setState({
          isLoading: false,
          name: '', 
          address: '',
          mobile:'',
          lists:'',
        })
        this.props.navigation.navigate('Dashboard')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }
  
  totalPrice = this.state.lists.reduce((a, c) => a + c.lists[0].price, 0);
  
  render() {
    console.log(this.state.lists)
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}>  
      <Text style={styles.loginText}>
          Total price:{this.totalPrice}
        </Text> 
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={this.state.name}
          onChangeText={(val) => this.updateInputVal(val, 'name')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Address"
          value={this.state.address}
          onChangeText={(val) => this.updateInputVal(val, 'address')}
          maxLength={20}
          
        />   
        <TextInput
          style={styles.inputStyle}
          placeholder="mobile"
          value={this.state.mobile}
          onChangeText={(val) => this.updateInputVal(val, 'mobile')}
          maxLength={10}
          
        /> 
        
        
        <TouchableOpacity style={styles.btn1} onPress={() =>
        this.order()
      }>
        <Text style={styles.txtbtn} >Place order</Text>
        </TouchableOpacity>

                                 
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