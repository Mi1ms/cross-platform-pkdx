import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            psw: '',
        }
    }

    render() {
        return (
            <View >
                <Text>connect toi</Text>
                <TextInput
                    style={styles.inputBox}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder='Email'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.state.psw}
                    onChangeText={psw => this.setState({ psw })}
                    placeholder='Mot de passe'
                    secureTextEntry={true}
                />
                <Button title='Co' onPress={() => console.log('cmon')}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#F6820D',
        borderColor: '#F6820D',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    }
})