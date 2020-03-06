import React, { Component } from 'react';
import { StyleSheet, Text, Button, View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import WishListScreen from '../WishListScreen';

export default class LogScreen extends Component {
    constructor(props) {
        super(props);
        this.logOut();
    }
    
    logOut() {

    }
    
    render() {
            
        return (
            <Text>Soon</Text>
           
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: "100%",
      paddingBottom: 100
    },
    btn: {
        width: "50%",
        justifyContent: 'center',
        alignItems: 'center'
    }
});
  