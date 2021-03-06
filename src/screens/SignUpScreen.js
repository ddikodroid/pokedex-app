import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

const SignUpScreen = ({route, navigation}) => {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [favoritePokemon, setFavoritePokemon] = useState('Pikachu');

  const dispatch = useDispatch();

  const signUpData = {
    firstName: firstName,
    lastName: lastName,
    username: username,
    password: password,
    favoritePokemon: favoritePokemon,
  };

  const NavigateToSignInScreen = () => {
    if (password !== confirmPassword) {
      Alert.alert('Password Gak Sama Anjing!!');
    } else {
      dispatch({
        type: 'SIGNUP',
        payload: signUpData,
      });
      navigation.navigate('Sign In', {lastName});
    }
  };

  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: width * 0.05}}>
        <Text>Start the journey,</Text>
        <Text style={styles.title}>Sign up here👇</Text>

        <View style={{flexDirection: 'row'}}>
          <TextInput
            onChangeText={(txt) => setFirstName(txt)}
            label="firstName"
            style={[
              styles.input,
              {width: width * 0.4, marginRight: width * 0.025},
            ]}
            placeholder="First Name"
            placeholderTextColor="#757575"
          />
          <TextInput
            onChangeText={(txt) => setLastName(txt)}
            label="lastName"
            style={[styles.input, {width: width * 0.275}]}
            placeholder="Last Name"
            placeholderTextColor="#757575"
          />
        </View>

        <TextInput
          onChangeText={(txt) => setUsername(txt)}
          label="username"
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#757575"
        />
        <TextInput
          onChangeText={(txt) => setFavoritePokemon(txt)}
          label="favPokemon"
          style={styles.input}
          placeholder="Favorite Pokemon"
          placeholderTextColor="#757575"
        />
        <TextInput
          onChangeText={(pass) => setPassword(pass)}
          label="password"
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#757575"
        />
        <TextInput
          onChangeText={(pass) => setConfirmPassword(pass)}
          label="confirmpassword"
          style={styles.input}
          secureTextEntry={true}
          placeholder="Confirm Password"
          placeholderTextColor="#757575"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={NavigateToSignInScreen}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: width * 0.04,
  },
  input: {
    width: width * 0.7,
    height: height * 0.055,
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#bdbdbd',
    //marginBottom: 10,
    marginVertical: height * 0.01,
    borderRadius: width * 0.02,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.7,
    height: height * 0.055,
    backgroundColor: '#1de9b6',
    borderRadius: width * 0.02,
    marginVertical: height * 0.01,
  },
});
