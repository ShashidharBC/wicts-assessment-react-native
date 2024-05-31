import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Header from './components/Header.jsx';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  selectedButton: {
    backgroundColor: '#ccc',
  },
});

export default WelcomeScreen;
