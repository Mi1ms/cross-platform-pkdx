import 'react-native-gesture-handler';
import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {AsyncStorage} from 'react-native';
// IMPORT Component 
import Root from './src/Root';
import LogScreen from './src/sign/LogScreen';
import WishListScreen from './src/WishListScreen';

const Drawer = createDrawerNavigator();
const logDrawer = <Drawer.Screen name="Sign" component={LogScreen} options={{title: 'SignIn / SignUp'}} />
const wishDrawer = <Drawer.Screen name="WishList" component={WishListScreen}/>


export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: true,
    }

    console.log('constructor APP')
    this.getData();
  }
  
  async getData() {
    // const value = await AsyncStorage.getItem('user');
    await AsyncStorage.getItem('email', (err, result) => {
      const value  = result !== null ? true : false;
      console.log(result)
      this.setState({'user': value });
    })
  }

   render() {
    
    return (
      <NavigationContainer style={styles.container} >
        <Drawer.Navigator initialRouteName='List'>
          <Drawer.Screen 
          name="List" 
          component={Root}
          options={{title: 'List Pokemon'}} 
          />
          { this.state.user ? wishDrawer : logDrawer}
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // fontFamily: 'Cochin'
  },
});
