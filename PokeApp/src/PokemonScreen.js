import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Alert } from 'react-native';
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
            gif: '',
            addWish: false,
            info: [], 
            user: null,
        };

        this.toggleWishList = this.toggleWishList.bind(this);
    
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
    
    inWishList() {
        if (this.state.user !== null) {
            
            const docRef = db.collection('wishlist');
            const { id } = this.state.info;
            const Pokemon = docRef.set({
            pokemonId: id,
            userId: this.state.user,
            });
        } else {
            Alert.alert("IL FAUT SE CONNECTER D'ABORD");
        }
    }

    toggleWishList() {
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{ this.state.title } N.{ this.state.info.order }</Text>
                <Image style={{width: 240, height: 200}}
                source={{uri: `${ this.state.gif}`}}/>
                <TouchableOpacity onPress={this.toggleWishList()}>
                    <Icon
                    name={this.state.addWish ? 'star' : 'star-o'}
                    size={35}
                    color="#ffcb2b"
                    />
                </TouchableOpacity>
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
