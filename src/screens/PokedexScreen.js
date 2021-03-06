import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import PokeCard from '../components/PokeCard';
import axios from 'axios';

const PokedexScreen = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')

      .then((response) => {
        setPokemon(response.data.results);
        return response.data.results;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatList}
        numColumns={3}
        data={pokemon}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={(item) => {
          return <PokeCard item={item} />;
        }}
      />
    </View>
  );
};

export default PokedexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
