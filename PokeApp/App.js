import 'react-native-gesture-handler';
import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Left, Right, Icon } from 'native-base';
import {AsyncStorage} from 'react-native';
import Firebase, { db } from './firebase/init_firebase';
// IMPORT Component 
import Root from './src/Root';
import SignUpScreen from './src/sign/SignUpScreen';
import SignInScreen from './src/sign/SignInScreen';
import LogScreen from './src/sign/LogScreen';
import WishListScreen from './src/WishListScreen';

const Drawer = createDrawerNavigator();
const logOutDrawer = <Drawer.Screen name="LogOut" component={LogScreen} options={{title: 'SignIn / SignUp'}} />


export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: false,
    }    
  }
  
  componentDidMount() {
    AsyncStorage.getItem('user', (err, result) => {
      const value  = result !== null ? true : false;
    })
    Firebase.auth().onAuthStateChanged(user => {
      this.setState({user });
    });
  }
  
  render() {
    return (
      // <View>
        <NavigationContainer style={styles.container} >
          <Drawer.Navigator initialRouteName='List'>
            <Drawer.Screen 
              name="List" 
              component={Root}
              options={{
                title: 'List Pokemon',
                headerRight: () => {
                  <Icon  name='menu' onPress={() => alert('hello')
                  }/>
                }
              }} 
            />
            <Drawer.Screen 
              name={this.state.user ? 'wish' : 'SignIn'}
              component={this.state.user ? WishListScreen : SignInScreen}
            />
            <Drawer.Screen 
              name={this.state.user ? 'LogOut' : 'SignUp'}
              component={this.state.user ? LogScreen : SignUpScreen}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      // </View>
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
