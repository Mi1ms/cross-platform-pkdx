import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// IMPORT Component 
import Root from './src/Root';
import LogScreen from './src/sign/LogScreen';
import WishListScreen from './src/WishListScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  console.log(user, setUser)
  const logDrawer = <Drawer.Screen name="Sign" component={LogScreen} options={{title: 'SignIn / SignUp'}} />
  const wishDrawer = <Drawer.Screen name="WishList" component={WishListScreen}/>
  
  return (
    <NavigationContainer style={styles.container} >
        <Drawer.Navigator initialRouteName='Sign'>
          <Drawer.Screen 
          name="List" 
          component={Root}
          options={{title: 'List Pokemon'}} 
          />
          { user ? wishDrawer : logDrawer}
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Cochin'
  },
});
