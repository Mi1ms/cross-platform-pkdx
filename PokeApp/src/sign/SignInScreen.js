import React, { Component } from 'react';
import Firebase from '../../firebase/init_firebase';
import {AsyncStorage} from 'react-native';
import { StyleSheet, Text, TextInput, TouchableOpacity, Button, View } from 'react-native';

export default class SignInScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            psw: '',
        }

        this.handleLogIn = this.handleLogIn.bind(this);
    }

    handleLogIn = () => {
        const { email, psw } = this.state;
        const { navigation } = this.props;

        Firebase.auth()
            .signInWithEmailAndPassword(email, psw)
            .then(function(result) {
                console.log('so', result)
                if (!result.message) {
                    AsyncStorage.setItem('user', JSON.stringify(result.user));
                    navigation.navigate('WishList')
                } else {
                    console.error(result.message)
                }
            })
            .catch(error => {
                console.log(error)
            });
    }

    _userData = async () => {
        try {
            console.log('set info')    
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <View >
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
                <Button title="S'inscrire" onPress={ () => this.props.navigation.navigate('SignUp')}/>
                <TouchableOpacity style={styles.button} onPress={this.handleLogIn}>
                    <Text>CONNECT TOI!</Text>
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