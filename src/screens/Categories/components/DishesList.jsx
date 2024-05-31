import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {BIRYANI, CHICKEN, PIZZA, RICE} from '../../../../public/images';
import {appColors} from '../../../utils/appColors';

const DishesList = () => {
  const categories = [
    {name: 'Biriyani', image: BIRYANI},
    {name: 'Rice, Oils', image: PIZZA},
    {
      name: 'Masala',
      image: RICE,
    },

    {name: 'Rice, Oils', image: CHICKEN},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {categories.map((category, index) => (
          <View key={index} style={styles.item}>
            <Image source={category.image} style={styles.image} />
            <Text style={styles.text}>{category.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff',
    marginTop: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '25%',
    alignItems: 'center',
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  text: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'semibold',
    color: 'black',
  },
});

export default DishesList;
