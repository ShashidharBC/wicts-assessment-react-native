import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {BIRYANI, CHICKEN, PIZZA, RICE} from '../../../../public/images/index';
import {ScreenWidth} from 'react-native-elements/dist/helpers';
import Icon, {Icons} from '../../../utils/icons';
import {appColors} from '../../../utils/appColors';

const Categories = ({onPressCategories}) => {
  const categories = [
    {name: 'Biriyani', image: BIRYANI},
    {name: 'Rice, Oils', image: PIZZA},
    {
      name: 'Masala and Snacks',
      image: RICE,
    },
    {name: 'Rice, Oils', image: PIZZA},
    {name: 'Atta / Flour', image: BIRYANI},
    {name: 'Rice, Oils', image: CHICKEN},
    {
      name: 'Masala and Snacks',
      image: RICE,
    },
    {name: 'Rice, Oils', image: CHICKEN},
  ];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>What you are craving for</Text>
      <View style={styles.grid}>
        {categories.map((category, index) => (
          <View key={index} style={styles.item}>
            <Image source={category.image} style={styles.image} />
            <Text style={styles.text}>{category.name}</Text>
            <View
              style={{
                width: 35,
                borderBottomColor: appColors?.redOrange,
                borderBottomWidth: 1,
                marginVertical: 20,
              }}
            />
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.seeAllButton} onPress={onPressCategories}>
        <Text style={styles.seeAllText}>See all categories</Text>
        <Icon
          name={'arrow-right'}
          type={Icons?.Octicons}
          color={appColors?.redOrange}
          size={18}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
    backgroundColor: '#fff',
    maxWidth: ScreenWidth,
    maxHeight: ScreenWidth * 1.15,
    marginTop: 12,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
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
  seeAllButton: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
    alignSelf: 'center',
  },
  seeAllText: {
    color: '#ff6600',
    fontSize: 18,
    marginRight: 8,
    fontWeight: 'semibold',
  },
});

export default Categories;
