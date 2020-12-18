import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: width * 0.05}}>
        <Text>Start the journey,</Text>
        <Text style={styles.title}>Sign up here👇</Text>
        <TextInput
          //value={username}
          label="firstName"
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#757575"
        />
        <TextInput
          //value={username}
          label="lastName"
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#757575"
        />
        <TextInput
          //value={username}
          label="username"
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#757575"
        />
        <TextInput
          //value={password}
          label="password"
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#757575"
        />
        <TouchableOpacity style={styles.button}>
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
