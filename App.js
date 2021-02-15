import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import Login from './components/Login';
import Sign from './components/Sign';
import Dashboard from './components/dashboard';
import store from './components/store';
import details from './components/details';
import cart from './components/cart';
import orderplace from './components/orderplace';
import orders from './components/orders';
import orderdetails from './components/orderdetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="store" component={store} />
        <Stack.Screen name="details" component={details} />
        <Stack.Screen name="cart" component={cart} />
        <Stack.Screen name="orderplace" component={orderplace} />
        <Stack.Screen name="orders" component={orders} />
        <Stack.Screen name="orderdetails" component={orderdetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
