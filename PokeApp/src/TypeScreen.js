import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';


export default function App() {
    return (
        <View>
            <Text style={styles.type}>{this.props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    type: {
        
    }
})