import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {
  BEST_SELL,
  FOOTER_1_IMAGE,
  FOOTER_IMAGE,
  WELCOME_1,
} from '../../../../public/images';
import LinearGradient from 'react-native-linear-gradient';
import Icon, {Icons} from '../../../utils/icons';
import {appColors} from '../../../utils/appColors';

const BestSellings = () => {
  const bestSellingItems = [
    {name: 'Durga Groceries', image: BEST_SELL, distance: '1.5 km', rate: 4},
    {name: 'Durga Groceries', image: BEST_SELL, distance: '1.5 km', rate: 4},
    {name: 'Durga Groceries', image: BEST_SELL, distance: '1.5 km', rate: 4},
    {name: 'Durga Groceries', image: BEST_SELL, distance: '1.5 km', rate: 4},
    {name: 'Durga Groceries', image: BEST_SELL, distance: '1.5 km', rate: 4},
    {name: 'Durga Groceries', image: BEST_SELL, distance: '1.5 km', rate: 4},
    {name: 'Durga Groceries', image: BEST_SELL, distance: '1.5 km', rate: 4},
    {name: 'Durga Groceries', image: BEST_SELL, distance: '1.5 km', rate: 4},
    {name: 'Durga Groceries', image: BEST_SELL, distance: '1.5 km', rate: 4},
    {name: 'Durga Groceries', image: BEST_SELL, distance: '1.5 km', rate: 4},
  ];
  const storesNearYou = [
    {
      name: 'Punjabi Rasoi',
      image: BEST_SELL,
      details: 'Deals in Food',
      address: 'Court More, Opposite Oro Dental Hospital, Asansol',
      rating: '4.5',
    },
    {
      name: 'Hotel Grand',
      image: BEST_SELL,
      details: 'Deals in Food',
      address: 'Court More, Opposite Oro Dental Hospital, Asansol',
      rating: '4.5',
    },
    {
      name: 'Raju Chicken Pakora',
      image: BEST_SELL,
      details: 'Deals in Food',
      address: 'Court More, Opposite Oro Dental Hospital, Asansol',
      rating: '4.5',
    },
    // Add more stores here
  ];
  return (
    <View style={styles.section}>
      <LinearGradient
        colors={['#ffff00', '#ffc107', '#ffff00']}
        style={styles.linearGrad}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <Text style={styles.text}>
          Best Selling
          <View style={styles.underline} />
        </Text>
      </LinearGradient>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}>
        {bestSellingItems.map((item, index) => (
          <View key={index} style={styles.bestSellingItem}>
            <Image source={item.image} style={styles.bestSellingImage} />
            <Text style={styles.bestSellingText}>{item.name}</Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 8,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 33,
                  height: 18,
                  backgroundColor: appColors?.redOrange,
                  borderRadius: 16,
                }}>
                <Text style={styles.rateStyle}>{item.rate}</Text>
                <Icon
                  name={'star'}
                  type={Icons?.MaterialIcons}
                  size={16}
                  color={appColors?.white}
                />
              </View>

              <Text style={styles.bestSellingDistance}>{item.distance}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View>
        <View style={styles.section}>
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
            <Icon
              name={'shopping-bag'}
              type={Icons?.Foundation}
              color={appColors?.white}
            />
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
            <View
              style={{flexDirection: 'row', position: 'absolute', right: 0}}>
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
          <Text style={styles.sectionHeader}>Stores near you</Text>
          {storesNearYou.map((store, index) => (
            <View>
              <View key={index} style={styles.storeItem}>
                <Image source={store.image} style={styles.storeImage} />
                <View style={styles.storeDetails}>
                  <Text style={styles.storeName}>{store.name}</Text>
                  <Text style={styles.storeDetailsText}>{store.details}</Text>
                  <Text style={styles.storeAddress}>{store.address}</Text>
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
                    <Text style={styles.rateStyle}>{store.rating}</Text>
                    <Icon
                      name={'star'}
                      type={Icons?.MaterialIcons}
                      size={16}
                      color={appColors?.white}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: appColors?.gray,
                  borderBottomWidth: 1,
                  marginBottom: 18,
                }}
              />
            </View>
          ))}
        </View>
        <Image source={FOOTER_1_IMAGE} style={styles.footer1Image} />
        <View style={styles.footer}>
          <Image source={FOOTER_IMAGE} style={styles.footerImage} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  linearGrad: {
    width: 200,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7f6000',
    position: 'relative',
  },
  section: {
    marginTop: 12,
    backgroundColor: '#fff',
    padding: 8,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
    color: appColors?.black,
  },
  horizontalScroll: {
    flexDirection: 'row',
  },
  bestSellingItem: {
    width: 120,
    marginRight: 16,
    alignItems: 'center',
  },
  bestSellingImage: {
    width: 110,
    height: 112,
    borderRadius: 8,
    resizeMode: 'stretch',
    marginTop: 26,
  },
  bestSellingText: {
    marginTop: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  bestSellingDistance: {
    fontSize: 14,
    color: '#888',
    marginLeft: 14,
  },
  rateStyle: {
    fontSize: 14,
    marginRight: 2,
    color: '#fff',
  },
  storeItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  storeImage: {
    width: 110,
    height: 112,
    borderRadius: 8,
    resizeMode: 'stretch',
  },
  footerImage: {
    width: 160,
    height: 90,
    resizeMode: 'contain',
  },
  footer1Image: {
    width: 260,
    height: 80,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  storeDetails: {
    marginLeft: 16,
    flex: 1,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  storeDetailsText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 12,
  },
  storeAddress: {
    fontSize: 14,
    color: appColors?.black,
    marginBottom: 4,
  },
  storeRating: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeRatingText: {
    fontSize: 14,
    color: '#ff6600',
  },
  footer: {
    alignItems: 'center',
    marginTop: 32,
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'semibold',
    marginBottom: 35,
    color: appColors?.black,
    alignSelf: 'center',
  },
  satisfyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff6600',
  },
  cravingsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff6600',
  },
});

export default BestSellings;
