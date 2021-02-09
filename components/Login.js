import React, { useState  } from 'react';
import {StyleSheet, Text, View, Image,Button, TouchableOpacity, Animated} from 'react-native';
import * as Font from 'expo-font';


const Login = () => {
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
    
        <Text style={styles.bigBlue}>Login!</Text>
        
        
        <TouchableOpacity style={styles.btn}>
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
        marginTop:50
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
    
    
    bigBlue: {
        
      color: 'black',
      fontFamily: 'notoserif',
      fontWeight: 'bold',
      fontSize: 20,
    },
    red: {
      color: 'red',
    },
  });
  
export default Login;
