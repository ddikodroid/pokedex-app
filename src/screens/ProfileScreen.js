import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

const ProfileScreen = ({route, navigation}) => {
  const {fN, lN, uN} = route.params;
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Text>
        Full Name: {fN} {lN}
      </Text>
      <Text>Username: {uN}</Text>
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
