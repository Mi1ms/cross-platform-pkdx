import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TypeScreen from './TypeScreen';

export default class PokemonScreen extends Component {
    constructor(props) {
        super(props);
        const { item } = props.route.params;
        this.state = {
            api: item.url,
            title: item.name,
            addWish: false,
            info: []
        };

        this.toggleWishList = this.toggleWishList.bind(this);
    }

    componentDidMount() {
        fetch(`${ this.state.api }`)
        .then((response) => response.json())
        .then((res) => {
            console.log(res)
            this.setState({
                info: res,
            });
        })
        .catch((err) => {
            console.error(err);
        })
    }
    
    inWishList() {
        const docRef = db.collection('wishlist');
        const { id } = this.state.info;
        const Pokemon = docRef.set({
        pokemonId: id,
        userId: 'Lovelace',
        });
    }

    toggleWishList() {

    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.toggleWishList()}>
                    <Icon
                    name={this.state.addWish ? 'star' : 'star-o'}
                    size={35}
                    color="#ffcb2b"
                    />
                </TouchableOpacity>
                {/* <Image style={{width: 66, height: 58}}
                source={{uri: `${ this.state.info.sprites.back_default}`}}/> */}
                <Text>{ this.state.title } N.{ this.state.info.order }</Text>
                <Text>Height : { this.state.info.height }</Text>
                <Text>Weight : { this.state.info.weight }</Text>
                {/* Pokemon Type View  */}
            </View>
        )
    }
}