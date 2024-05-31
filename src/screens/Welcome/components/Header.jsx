import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {WELCOME_1} from '../../../../public/images/index';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Foods</Text>
      <View style={styles.deliveryContainer}>
        <Icon name="location-on" size={20} color="#3B82F6" />
        <Text style={styles.deliveryText}>Court More, Burnpur</Text>
      </View>
      <Image source={WELCOME_1} style={styles.foodImage} />
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="#F97316" />
        <TextInput
          style={styles.searchInput}
          placeholder='Search for "biriyani"'
        />
        <Icon name="mic" size={24} color="#F97316" style={styles.micIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  deliveryText: {
    marginLeft: 8,
    color: '#6B7280',
    fontSize: 16,
  },
  foodImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
  },
  micIcon: {
    marginLeft: 8,
  },
});

export default Header;
