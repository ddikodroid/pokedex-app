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
      .get('https://pokeapi.co/api/v2/pokemon?limit=5')

      .then((response) => {
        setPokemon(response.data.results);
        console.log('-D-I-K-O-', response.data.results);
        return response.data.results;
      })
      .then((data) => {
        data.map((data) => {
          axios.get(data.url).then((data) => console.log(data));
        });
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
          console.log('Ini adalah', item);
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
