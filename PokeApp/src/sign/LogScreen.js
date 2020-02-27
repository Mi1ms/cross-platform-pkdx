import React, { Component } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

export default class LogScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api: 'https://pokeapi.co/api/v2/',
            signIn: true,
        }
    }
    
    render() {
            
        return (
            <View >
                <View style={styles.container}>
                    <Button style={styles.btn} title='Connexion' onPress={() => this.setState({signIn: true})}/>
                    <Button style={styles.btn} title='Inscription' onPress={() => this.setState({signIn: false})}/>
                </View>
                { this.state.signIn ? <SignInScreen/> : <SignUpScreen/> }
            </View>
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
  