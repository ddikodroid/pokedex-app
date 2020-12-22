import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import axios from 'axios';

const ProfileScreen = ({navigation}) => {
  const userData = useSelector((state) => state.data);
  const [pokemonAvatar, setPokemonAvatar] = useState();
  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${userData.favoritePokemon.toLowerCase()}`,
      )
      .then((response) => {
        console.log(response);
        setPokemonAvatar(response.data.sprites.front_default);
      });
  });

  return (
    <>
      <View style={styles.avaContainer}>
        <Image source={{uri: pokemonAvatar}} style={styles.image} />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.profileCard}>
          <View style={styles.profileContainer}>
            <Text>My name is</Text>
            <Text style={styles.fontBig}>{userData.lastName}</Text>
            <Text style={styles.fontSmall}>{userData.firstName}</Text>
            <Text>My pokemon is</Text>
            <Text style={styles.fontBig}>{userData.favoritePokemon}</Text>
          </View>
        </View>

        <Text>{pokemonAvatar}</Text>
        <Text>Profile Screen</Text>
        <Text>
          Full Name: {userData.firstName} {userData.lastName}
        </Text>
        <Text>Username: {userData.username}</Text>
        <Text>Password: {userData.password}</Text>
        <Text>
          Favorite Pokemon:{' '}
          {userData.favoritePokemon === userData.favoritePokemon.toUpperCase()
            ? userData.favoritePokemon.charAt(0) +
              userData.favoritePokemon.slice(1).toLowerCase()
            : userData.favoritePokemon.charAt(0).toUpperCase() +
              userData.favoritePokemon.slice(1)}
        </Text>
      </ScrollView>
    </>
  );
};

export default ProfileScreen;
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    paddingTop: height * 0.2,
    //marginTop:height*0.20
    //alignItems: 'center',
    //justifyContent: 'center',
    //padding: width * 0.03,
  },
  image: {
    height: height / 4,
    width: width / 2,
    //resizeMode: 'contain',
  },
  profileCard: {
    backgroundColor: '#1de9b6',
    paddingTop: 70,
    alignItems: 'center',
    width: width,
    height: height,
    borderTopLeftRadius: width / 7,
    borderTopRightRadius: width / 7,
    marginTop: height * 0.02,
  },
  profileContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: width / 10,
  },
  avaContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  fontBig: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  fontSmall: {fontSize: 26},
});
