import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {useSelector} from 'react-redux';
import axios from 'axios';

const ProfileScreen = ({navigation}) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const userData = useSelector((state) => state.data);
  const [avaPokemon, setAvaPokemon] = useState();
  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${userData.favoritePokemon.toLowerCase()}`,
      )
      .then((response) => {
        console.log(response);
        setAvaPokemon(response.data.sprites.front_default);
      });
  });

  return (
    <View style={styles.container}>
      <View
        style={{
          width: width/4,
          height: height/8,
          borderRadius: 50,
          backgroundColor: 'cyan',
          justifyContent: 'center',
          alignItems: 'center',

        }}>
        <Image source={{uri: avaPokemon}} style={styles.image} />
      </View>

      <Text>{avaPokemon}</Text>
      <Text>Profile Screen</Text>
      <Text>
        Full Name: {userData.firstName} {userData.lastName}
      </Text>
      <Text>Username: {userData.username}</Text>
      <Text>Password: {userData.password}</Text>
      <Text>Favorite Pokemon: {userData.favoritePokemon.charAt(0).toUpperCase() + userData.favoritePokemon.slice(1)}</Text>
      
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
  image: {
    height: height / 6,
    width: width / 2,
    resizeMode: 'contain',
  },
});
