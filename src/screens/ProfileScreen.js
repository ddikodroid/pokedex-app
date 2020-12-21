import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import { useEffect } from 'react/cjs/react.development';

const ProfileScreen = ({navigation}) => {
  const userData = useSelector((state) => state.data);
  React.useEffect(()=>{
    console.log(userData)
  })
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Text>
        Full Name: {userData.firstName} {userData.lastName}
      </Text>
      <Text>Username: {userData.username}</Text>
      <Text>Password: {userData.password}</Text>
    </View>
  );
};

export default ProfileScreen;
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: width * 0.04,
  },
});
