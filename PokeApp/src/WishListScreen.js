import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Firebase, { db } from '../firebase/init_firebase';
import {AsyncStorage} from 'react-native';

export default class WishListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list : [],
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('wish', (err, result) => {
            this.setState({list: result});
        });
    }

    render() {
        return (
            <View>
                <Text>{ this.state.list == null ? 'Vous n\'avez pas de pokémon enregistrer' : 'WishLust' }</Text>
                
                <FlatList data={this.state.list}
                renderItem={() => 
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
  