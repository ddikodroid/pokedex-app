import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import axios from 'axios';
const PokeDetail = (props) => {
  const [typePokemon, setTypePokemon] = useState([]);
  const [abilityPokemon, setAbilityPokemon] = useState([]);
  const uriBasic = props.uri;
  const uriShiny = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${props.index}.png`;
  const [imagePokemon, setImagePokemon] = useState(true);
  const changeToShiny = () => {
    setImagePokemon(!imagePokemon);
  };
  useEffect(() => {
    axios.get(props.data).then((response) => {
      setTypePokemon(
        response.data.types.map((type) => type.type.name).join(', '),
      );
      setAbilityPokemon(
        response.data.abilities
          .map((ability) => ability.ability.name)
          .join(', '),
      );
    });
  });
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.detailVisible}
      onRequestClose={props.onPress}>
      <View style={styles.centeredView}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{uri: imagePokemon ? uriBasic : uriShiny}}
          />
          <Text>{imagePokemon ? 'Basic' : 'Shiny'}</Text>
          <TouchableOpacity onPress={changeToShiny}>
            <Text style={styles.buttonText}>Change Form</Text>
          </TouchableOpacity>
          <Text>Type: {typePokemon}</Text>
          <Text>Ability: {abilityPokemon}</Text>
          <TouchableOpacity onPress={props.onPress}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PokeDetail;
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height / 1.5,
    width: width / 1.2,
    backgroundColor: 'white',
    borderRadius: width * 0.1,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
