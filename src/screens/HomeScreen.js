import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  const NavigateToPokedex = () => {
    navigation.navigate('Pokedex');
  };
  const NavigateToSignIn = () => {
    navigation.navigate('Sign In');
  };
  const NavigateToSignUp = () => {
    navigation.navigate('Sign Up');
  };

  return (
    <View style={styles.container}>
      <Text>ϞϞ(๑⚈ ․̫ ⚈๑)∩</Text>
      <TouchableOpacity>
        <Text style={styles.buttonText} onPress={NavigateToPokedex}>
          Go To Pokedex
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.buttonText} onPress={NavigateToSignIn}>
          Check Sign In Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.buttonText} onPress={NavigateToSignUp}>
          Check Sign Up Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
