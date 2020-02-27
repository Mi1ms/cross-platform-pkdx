import React, { Component } from 'react';
import Firebase from '../../firebase/init_firebase';
import { StyleSheet, Text, TextInput, Button, TouchableOpacity, View } from 'react-native';

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            psw: '',
            confirm_psw: '',
        }
    }

    handleSignUp = () => {
        const { email, psw, confirm_psw } = this.state;
        console.log(psw, confirm_psw, email)
        if (psw === confirm_psw && psw == '' ) {

            Firebase.auth()
                .createUserWithEmailAndPassword(email, psw)
                .then(() => {
                    this.props.navigation.navigate('Profile')
                })
                .catch(error => console.log(error))
        }
    }

    render() {
        return (
            <View >
                <Text>Inscit toi</Text>
                <TextInput
                    style={styles.inputBox}
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                    placeholder='Nom'
                    autoCapitalize='none'
                />
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
                <TextInput
                    style={styles.inputBox}
                    value={this.state.confirm_psw}
                    onChangeText={psw => this.setState({ confirm_psw: psw })}
                    placeholder='Confirmer mot de passe'
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text>Go!</Text>
                </TouchableOpacity>
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