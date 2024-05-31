import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from './components/Header.jsx';
import Categories from './components/Categories.jsx';
import BestSellings from './components/BestSellings.jsx';

const WelcomeScreen = ({navigation}) => {
  const onPressCategories = () => {
    console.log('Pressedddd>>>>');
    navigation.navigate('CategoriesScreen');
  };
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Categories onPressCategories={onPressCategories} />
        <BestSellings />
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

export default WelcomeScreen;
