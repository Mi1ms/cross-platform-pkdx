import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// component
import ListScreen from './ListScreen';
import PokemonScreen from './PokemonScreen';
import WishListScreen from './WishListScreen';

const Stack = createStackNavigator();
export default function Root() {
    return (

        <Stack.Navigator initialRouteName='List'>
            <Stack.Screen name="List" component={ListScreen} />
            <Stack.Screen name="Details" component={PokemonScreen} />
            <Stack.Screen name="WishList" component={WishListScreen} />
        </Stack.Navigator>
    );
}
