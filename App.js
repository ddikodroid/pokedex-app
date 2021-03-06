import 'react-native-gesture-handler';
//
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {
  HomeScreen,
  HomeTabScreen,
  SplashScreen,
  SignInScreen,
  SignUpScreen,
  PokedexScreen,
  ProfileScreen,
} from './src/screens';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {store} from './redux';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Sign In"
              component={SignInScreen}
              options={{headerShown: false}}
              initialParams={{firstName: 'User'}}
            />
            <Stack.Screen
              name="Home Tab"
              component={HomeTabScreen}
              options={{headerLeft: false, headerStyle:{backgroundColor:'red'}}}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerLeft: null}}
            />
            <Stack.Screen name="Pokedex" component={PokedexScreen} />
            <Stack.Screen
              name="Sign Up"
              component={SignUpScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              initialParams={{
                firstName: 'Diko',
                lastName: 'Nabil',
                username: 'diko',
              }}
            />
          </Stack.Navigator>
        }
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
