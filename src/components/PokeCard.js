import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const PokeCard = ({item}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>#{item.index+1} {item.item.name}</Text>
      <Image
        style={styles.image}
        resizeMode="contain"
        //source={require('../../assets/155.png')}
        source = {{uri:`https://pokeres.bastionbot.org/images/pokemon/${item.index+1}.png`}}
      />
    </View>
  );
};

export default PokeCard;

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  card: {
    height:height/5,
    width: width/2.2,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: width * 0.05,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.03,
    color: 'black',
    fontSize: 20,
    fontWeight: '300',
    alignItems: 'center',
    textTransform: 'capitalize'
  },
  //   description: {
  //     marginHorizontal: width * 0.05,
  //     marginVertical: width * 0.05,
  //     color: 'black',
  //     fontSize: 18,
  //   },
  image: {
    height:height/9,
    width :width/3
  },
  //   author: {
  //     marginVertical: height * 0.01,
  //     marginHorizontal: width * 0.1,
  //     fontSize: 15,
  //     color: 'gray',
  //   },
});
