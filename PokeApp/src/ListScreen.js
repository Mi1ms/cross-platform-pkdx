import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

export default class ListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api: 'https://pokeapi.co/api/v2/',
            list: []
        }
    }
  
    componentWillMount() {
        fetch(`${this.state.api}pokemon`)
        .then((response) => response.json())
        .then((res) => {
            this.setState({
                list: res.results,
            });
        })
        .catch((err) => {
            console.error(err);
        })
    }
    
    render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>List pokemons</Text>
        <FlatList data={ this.state.list }
            renderItem={ ({item}) => 
                <Text style={styles.item}
                    onPress={ () => this.props.navigation.navigate('Details', { item }) }
                >
                {item.name}
                </Text>
                
            } 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   paddingTop: 22,
   alignItems: "center",
  },
  title: {
    fontFamily: 'Cochin',
    fontSize: 44,
  },
  item: {
    padding: 5,
    fontSize: 18,
    height: 44,
  },
})
