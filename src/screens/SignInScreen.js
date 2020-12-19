import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const SignInScreen = ({route, navigation}) => {
  const {firstName, lastName} = route.params;

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const NavigateToHomeScreen = () => {
    navigation.navigate('Home', {username, password});
  };
  const NavigateToSignUpScreen = () => {
    navigation.navigate('Sign Up');
  };
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: width * 0.05}}>
        <Text>
          Welcome back, {firstName} {lastName}
        </Text>
        <Text style={styles.title}>Sign in here👇</Text>
        <TextInput
          value={username}
          onChangeText={(username) => setUsername(username)}
          label="username"
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#757575"
        />
        <TextInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          label="password"
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#757575"
        />
        <TouchableOpacity style={styles.button} onPress={NavigateToHomeScreen}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Sign In</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginVertical: height * 0.01}}>
          <Text style={{fontSize: 15}}>Don't have an account? </Text>
          <TouchableOpacity onPress={NavigateToSignUpScreen}>
            <Text style={{color: '#0288d1', fontSize: 15}}>Click here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;
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
