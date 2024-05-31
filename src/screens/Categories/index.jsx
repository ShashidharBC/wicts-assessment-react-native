import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from './components/Header';
import DishesList from './components/DishesList';
import DishesDetails from './components/DishesDetails';

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <DishesList />
        <DishesDetails />
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

export default CategoriesScreen;
