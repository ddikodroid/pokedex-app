import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const HomeScreen = ({route, navigation}) => {
  const {username, password} = route.params;
  const NavigateToPokedex = () => {
    navigation.navigate('Pokedex');
  };
  const NavigateToSignIn = () => {
    navigation.navigate('Sign In');
  };
  const NavigateToSignUp = () => {
    navigation.navigate('Sign Up');
  };
  const NavigateToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <View style={{alignSelf: 'flex-start'}}>
        <Text style={styles.title}>Hello, {username} {password}</Text>
      </View>
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
      <TouchableOpacity>
        <Text style={styles.buttonText} onPress={NavigateToProfile}>
          Check Profile Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: width * 0.04,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
});
