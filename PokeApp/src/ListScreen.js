import React, { Component } from 'react';
import { StyleSheet, FlatList, Modal, Text, TextInput, Product, View, TouchableOpacity } from 'react-native';

export default class ListScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
          api: 'https://pokeapi.co/api/v2/',
          list: [],
          pokemon: [],
          search: '',
      }

      this.searchList = this.searchList.bind(this)
    }
  
    componentDidMount() {
        fetch(`${this.state.api}pokemon?limit=200`)
        .then((response) => response.json())
        .then((res) => {
            this.setState({
                pokemon: res.results,
                list: res.results,
            });
        })
        .catch((err) => {
            console.error(err);
        })
    }

    searchList(input) {
      const listing = this.state.pokemon.filter(elem => {
        return elem.name.includes(input.toLowerCase());
      })
      
      this.setState({
        list: listing,
      });
      this.setState({'search': input}) 
    }
    
    render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder='Recherche'
        style={styles.input} 
        inlineImageLeft='search_icon'
        value={this.state.search}
        onChangeText={text => { this.searchList(text) }}
        />
        <FlatList data={ this.state.list }
            style={styles.list}
            renderItem={ ({item}) => 
                <TouchableOpacity style={styles.item}
                onPress={ () => this.props.navigation.navigate('Details', { item }) }>
                  <Text>{ item.name }</Text>
                </TouchableOpacity>
              
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
  input: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    fontSize: 44,
  },
  list: {
    flexDirection: 'row'
  },
  item: {
    padding: 5,
    margin: 10,
    height: 44,
    width: 370,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    justifyContent: "center"
  },
})
