import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Header from './components/Header';
import Address from './components/Address';

const DeliveryDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Address />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default DeliveryDetailsScreen;
