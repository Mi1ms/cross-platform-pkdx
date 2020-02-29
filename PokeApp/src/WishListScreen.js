import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Firebase, { db } from '../firebase/init_firebase';

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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      // fontFamily: 'Cochin'
    },
  });
  