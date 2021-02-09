import React, { useState  } from 'react';
import {StyleSheet, Text, View, Image,Button, TouchableOpacity, Animated} from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Home = ({ navigation }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }, []);
    
  return (
    
    <Animated.View style={styles.container}>
    
        <Text style={styles.bigBlue}>Welcome Pizza Mania!</Text>
        <Image style={styles.Image} source={require('../Images/pizza_home.png')}/>
        <TouchableOpacity style={styles.btn} onPress={() =>
        navigation.navigate('Sign' )
      }>
        <Text style={styles.txtbtn} >Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn1} onPress={() =>
        navigation.navigate('Login' )
      }>
        <Text style={styles.txtbtn} >Login</Text>
        </TouchableOpacity>
        
    
    </Animated.View>
    
         );
};


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
  
export default Home;
