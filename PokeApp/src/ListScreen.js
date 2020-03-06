import React, { Component } from 'react';
import { StyleSheet, FlatList, Modal, Text, TextInput, Product, View, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AsyncStorage } from 'react-native';
import Firebase, { db } from '../firebase/init_firebase';


export default class ListScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
          api: 'https://pokeapi.co/api/v2/',
          list: [],
          pokemon: [],
          wishList: [],
          search: '',
          user: null
      }

      // provisoire 
      Firebase.auth().onAuthStateChanged(user => {
        this.setState({user });
      });

      this.searchList = this.searchList.bind(this);
      this.inWish = this.inWish.bind(this);
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
      
      AsyncStorage.getItem('wishlist', (err, result) => {
        this.setState({
          wishList: [...result]
        })
      });
    }
    
    toggleWishList(name) {
      console.log(this.state.user);
      
      if (this.state.user !== null) {
          const Pokemon = {
          pokemonName: name,
          userId: this.state.user,
          };
          AsyncStorage.mergeItem('wishlist', JSON.stringify(Pokemon))
      } else {
          Alert.alert("IL FAUT SE CONNECTER D'ABORD");
          console.log('need to be connected')
          return false;
      }
    }
    
    inWish(pokemon) {
      console.log(this.state.wishList);
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
                    <TouchableOpacity onPress={ () => { this.toggleWishList(item.name) }}>
                      <Icon
                        name={this.inWish(item.name) ? 'star' : 'star-o'}
                        size={35}
                        color="#ffcb2b"
                      />
                    </TouchableOpacity>
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
