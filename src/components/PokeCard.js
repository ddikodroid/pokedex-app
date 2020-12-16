import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Dimensions, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PokeDetail from './PokeDetail';

const PokeCard = ({item}) => {
  console.log(typeof item.index.toString());
  const [detailVisible, setDetailVisible] = useState(false);
  return (
    <>
      <PokeDetail
        onPress={() => setDetailVisible(!detailVisible)}
        detailVisible={detailVisible}
      />
      <TouchableOpacity onPress={() => setDetailVisible(true)}>
        <View style={styles.card}>
          <Text>
            #
            {item.index + 1 < 10
              ? `00${item.index + 1}`
              : item.index + 1 < 100
              ? `0${item.index + 1}`
              : item.index + 1}
          </Text>
          <Text style={styles.title}> {item.item.name}</Text>
          <Image
            style={styles.image}
            resizeMode="contain"
            //source={require('../../assets/155.png')}
            source={{
              uri: `https://pokeres.bastionbot.org/images/pokemon/${
                item.index + 1
              }.png`,
            }}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default PokeCard;

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  card: {
    height: height / 7,
    width: width / 3.5,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: width * 0.05,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    marginHorizontal: width * 0.03,
    marginVertical: height * 0.0001,
    color: 'black',
    fontSize: 15,
    fontWeight: '300',
    alignItems: 'center',
    textTransform: 'capitalize',
  },
  //   description: {
  //     marginHorizontal: width * 0.05,
  //     marginVertical: width * 0.05,
  //     color: 'black',
  //     fontSize: 18,
  //   },
  image: {
    height: height / 14,
    width: width / 6,
  },
  //   author: {
  //     marginVertical: height * 0.01,
  //     marginHorizontal: width * 0.1,
  //     fontSize: 15,
  //     color: 'gray',
  //   },
});
