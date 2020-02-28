import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class WishListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list : [],
        }
    }

    render() {
        return (
            <View>
                <Text>WishLust</Text>
            </View>
        )
    }
}