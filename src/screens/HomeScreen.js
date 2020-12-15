import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  const NavigateToPokedex = () => {
    navigation.navigate('Pokedex');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.buttonText} onPress={NavigateToPokedex}>
          Go To Pokedex
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
