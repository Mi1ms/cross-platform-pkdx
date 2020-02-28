import React, { Component } from 'react';
import { StyleSheet, Text, Button, View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import WishListScreen from '../WishListScreen';

const Stack = createStackNavigator();
export default class LogScreen extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
            
        return (
            <Stack.Navigator initialRouteName='SignIn'>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="WishList" component={WishListScreen} />
            </Stack.Navigator>
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
        width: "50%"
    }
});
  