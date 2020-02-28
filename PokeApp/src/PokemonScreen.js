import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import TypeScreen from './TypeScreen';

export default class PokemonScreen extends Component {
    constructor(props) {
        super(props);
        const { item } = props.route.params;
        this.state = {
            api: item.url,
            title: item.name,
            info: []
        };
    }

    componentDidMount() {
        fetch(`${ this.state.api }`)
        .then((response) => response.json())
        .then((res) => {
            this.setState({
                info: res,
            });
        })
        .catch((err) => {
            console.error(err);
        })
    }
    
    listType() {
        this.state.info.types.maps(elem => {
            console.log(elem)
        })
    }

    render() {
        return (
            <View>

                <Text>{ this.state.title } N.{ this.state.info.order }</Text>
                <Text>Height : { this.state.info.height }</Text>
                <Text>Weight : { this.state.info.weight }</Text>
                {/* Pokemon Type View  */}
            </View>
        )
    }
}