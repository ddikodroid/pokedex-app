import React, {useState} from 'react';
import {StyleSheet, TextInput, Text, View, Button} from 'react-native';

const SignInScreen = () => {
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  return (
    <View style={styles.container}>
      <Text>Username</Text>
      <TextInput
        value={username}
        onChangeText={() => setUsername(username)}
        label="username"
        style={styles.input}
      />
      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={() => setPassword(username)}
        label="password"
        style={styles.input}
        secureTextEntry={true}
      />
      <Button title={'Login'} style={styles.input} />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  inputText: {
    width: 200,
    height: 44,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
