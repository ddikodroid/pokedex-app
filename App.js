import 'react-native-gesture-handler';
//
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';

import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import PokedexScreen from './src/screens/PokedexScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Pokedex" component={PokedexScreen} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
