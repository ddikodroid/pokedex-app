import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

const SignUpScreen = ({route, navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  //const dataUser = useSelector((state) => state);
  const dispatch = useDispatch();

  const NavigateToSignInScreen = () => {
    dispatch({
      type: 'SIGNUP',
      payload: {firstName, lastName, username, password},
    });
    navigation.navigate('Sign In', {firstName, lastName});
  };

  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: width * 0.05}}>
        <Text>Start the journey,</Text>
        <Text style={styles.title}>Sign up here👇</Text>
        <View>
          <TextInput
            onChangeText={(txt) => setFirstName(txt)}
            label="firstName"
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#757575"
            //value={dataUser.data}
          />
          <TextInput
            onChangeText={(txt) => setLastName(txt)}
            label="lastName"
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#757575"
          />
        </View>

        <TextInput
          //value={username}
          onChangeText={(txt) => setUsername(txt)}
          label="username"
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#757575"
        />
        <TextInput
          //value={password}
          onChangeText={(pass) => setPassword(pass)}
          label="password"
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#757575"
        />
        <TextInput
          //value={password}
          label="password"
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
