import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Modal, Button, Dimensions} from 'react-native';

const PokeDetail = (props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.detailVisible}
      onRequestClose={props.onPress}>
      <View style={styles.centeredView}>
        <View style={styles.card}>
          <Text>PokeDetail</Text>
          <Button onPress={props.onPress} title="Keluar" />
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
    height: height/1.5,
    width: width / 1.2,
    backgroundColor: 'white',
    borderRadius: width * 0.05,
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
});
