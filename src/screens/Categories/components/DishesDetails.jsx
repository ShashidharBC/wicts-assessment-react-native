import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {BIRYANI, CHICKEN, PIZZA, RICE} from '../../../../public/images';
import {appColors} from '../../../utils/appColors';
import Icon, {Icons} from '../../../utils/icons';
import {useNavigation} from '@react-navigation/native';

const DishesDetails = () => {
  const navigation = useNavigation();
  const renderHeader = owerName => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: appColors?.black,
                marginRight: 10,
              }}>
              {owerName}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 18,
                backgroundColor: appColors?.redOrange,
                borderRadius: 16,
              }}>
              <Text style={styles.rateStyle}>{4}</Text>
              <Icon
                name={'star'}
                type={Icons?.MaterialIcons}
                size={16}
                color={appColors?.white}
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'semibold',
              color: appColors?.black,
              marginTop: 8,
            }}>
            Court More, Opposite Orodental Hospital Asansol
          </Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'semibold',
            color: appColors?.redOrange,
            marginTop: 8,
          }}>
          Open store
        </Text>
      </View>
    );
  };

  const categories = [
    {name: 'Biriyani', image: BIRYANI, qty: '1kg', price: '₹550.00'},
    {name: 'Rice, Oils', image: PIZZA, qty: '1kg', price: '₹550.00'},
    {
      name: 'Masala',
      image: RICE,
      qty: '1kg',
      price: '₹550.00',
    },
  ];
  const renderDishesDetailComp = () => {
    return (
      <View style={styles.grid}>
        {categories.map((category, index) => (
          <View key={index} style={styles.item}>
            <Image source={category.image} style={styles.image} />
            <Text style={styles.text}>{category.name}</Text>
            <Text style={{fontSize: 12}}>{category.qty}</Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'semibold',
                color: appColors?.black,
              }}>
              {category.price}
            </Text>
            {category.name === 'Masala' ? (
              <View
                style={{
                  flexDirection: 'row',
                  width: 60,
                  height: 23,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: appColors?.redOrange,
                  borderRadius: 6,
                  padding: 2,
                  marginTop: 10,
                }}>
                <Text style={{fontSize: 16, color: appColors?.white}}>
                  {'--'}
                </Text>
                <Text style={{fontSize: 16, color: appColors?.white}}>
                  {'1'}
                </Text>
                <Text style={{fontSize: 16, color: appColors?.white}}>
                  {'+'}
                </Text>
              </View>
            ) : (
              <View
                style={{
                  width: 60,
                  height: 23,
                  alignItems: 'center',
                  backgroundColor: '#FFEDEB',
                  borderWidth: 1,
                  borderColor: appColors?.redOrange,
                  borderRadius: 6,
                  marginTop: 10,
                }}>
                <Text style={{fontSize: 16}}>{'Add'}</Text>
              </View>
            )}
          </View>
        ))}
      </View>
    );
  };
  const renderFooterComp = () => {
    return (
      <View style={{marginTop: 10}}>
        <View
          style={{
            width: 45,
            height: 45,
            backgroundColor: appColors?.redOrange,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('DeliveryDetailsScreen')}>
            <Icon
              name={'shopping-bag'}
              type={Icons?.Foundation}
              color={appColors?.white}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 12}}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name={'home'}
              type={Icons?.Foundation}
              color={appColors?.redOrange}
              size={35}
              style={{marginRight: 50}}
            />
            <Icon
              name={'heart'}
              type={Icons?.Foundation}
              color={appColors?.gray}
              size={35}
            />
          </View>
          <View style={{flexDirection: 'row', position: 'absolute', right: 0}}>
            <Icon
              name={'menu'}
              type={Icons?.Ionicons}
              color={appColors?.gray}
              size={35}
              style={{marginRight: 50}}
            />
            <Icon
              name={'star'}
              type={Icons?.Foundation}
              color={appColors?.gray}
              size={35}
            />
          </View>
        </View>
      </View>
    );
  };
  const renderOnlyList = () => {
    return (
      <View style={styles.grid}>
        {categories.map((category, index) => (
          <View key={index} style={styles.item}>
            <Image source={category.image} style={styles.image} />
            <Text style={styles.text}>{category.name}</Text>
            <Text style={{fontSize: 12}}>{category.qty}</Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'semibold',
                color: appColors?.black,
              }}>
              {category.price}
            </Text>
            {category.name === 'Masala' ? (
              <View
                style={{
                  flexDirection: 'row',
                  width: 60,
                  height: 23,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: appColors?.redOrange,
                  borderRadius: 6,
                  padding: 2,
                  marginTop: 10,
                }}>
                <Text style={{fontSize: 16, color: appColors?.white}}>
                  {'--'}
                </Text>
                <Text style={{fontSize: 16, color: appColors?.white}}>
                  {'1'}
                </Text>
                <Text style={{fontSize: 16, color: appColors?.white}}>
                  {'+'}
                </Text>
              </View>
            ) : (
              <View
                style={{
                  width: 60,
                  height: 23,
                  alignItems: 'center',
                  backgroundColor: '#FFEDEB',
                  borderWidth: 1,
                  borderColor: appColors?.redOrange,
                  borderRadius: 6,
                  marginTop: 10,
                }}>
                <Text style={{fontSize: 16}}>{'Add'}</Text>
              </View>
            )}
          </View>
        ))}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {renderHeader('Punjabi Rasoi')}
      {renderDishesDetailComp()}
      {renderFooterComp()}
      {renderOnlyList()}
      <View
        style={{
          borderBottomColor: appColors?.gray,
          borderBottomWidth: 1,
          marginBottom: 18,
          marginVertical: 30,
        }}
      />
      {renderHeader('Nisha Groceries')}
      {renderDishesDetailComp()}
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
    marginTop: 22,
  },
  rateStyle: {
    fontSize: 14,
    marginRight: 2,
    color: '#fff',
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

export default DishesDetails;
