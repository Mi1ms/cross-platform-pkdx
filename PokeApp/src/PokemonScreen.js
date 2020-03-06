import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Firebase, { db } from '../firebase/init_firebase';
const PokemonGif = require('pokemon-gif');

export default class PokemonScreen extends Component {
    constructor(props) {
        super(props);
        const { item } = props.route.params;
        this.state = {
            api: item.url,
            title: item.name,
            info: [], 
            user: null,
        };
    
    }

    componentDidMount() {
          
        fetch(`${ this.state.api }`)
        .then((response) => response.json())
        .then((res) => {
            const url_gif = PokemonGif(this.state.title);
            this.setState({
                info: res,
                gif: url_gif,
            });
        })
        .catch((err) => {
            console.error(err);
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{ this.state.title } N.{ this.state.info.order }</Text>
                <Image style={{width: 240, height: 200}}
                source={{uri: `${ this.state.gif}`}}/>
                
                <Text style={styles.txt}>Height : { this.state.info.height }</Text>
                <Text style={styles.txt}>Weight : { this.state.info.weight }</Text>
                {/* Pokemon Type View  */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262626',
        alignItems: 'center',
        // fontFamily: 'Cochin'
    },
    title: {
        fontSize: 35,
        color: 'white',
        padding: 40,
    },
    txt: {
        color: 'white',
    }
});
