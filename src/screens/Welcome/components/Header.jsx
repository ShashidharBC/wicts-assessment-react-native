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

import Icon, {Icons} from '../../../utils/icons';
import {appColors} from '../../../utils/appColors';
import {ScreenWidth} from 'react-native-elements/dist/helpers';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Icon
          name={'arrow-back'}
          type={Icons?.MaterialIcons}
          color={appColors?.black}
          // style={{paddingLeft: 8}}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
          <Text style={styles.title}>Foods</Text>
          <Text style={styles.subTitle}>Deliver at</Text>

          <View style={styles.deliveryContainer}>
            <Icon
              name={'send'}
              type={Icons?.Ionicons}
              color={appColors?.primary}
              // style={{paddingLeft: 8}}
            />
            <Text style={styles.deliveryText}>Court More, Burnpur</Text>
          </View>
        </View>
        <Image source={WELCOME_1} style={styles.foodImage} />
      </View>
      <View style={styles.searchContainer}>
        <Icon
          name={'search'}
          type={Icons?.MaterialIcons}
          color={appColors?.redOrange}
          // style={{paddingLeft: 8}}
        />
        <TextInput
          style={styles.searchInput}
          placeholder='Search for "biriyani"'
        />
        <Icon
          name={'mic'}
          type={Icons?.MaterialIcons}
          color={appColors?.redOrange}
          // style={{paddingLeft: 8}}
        />
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
    marginBottom: 28,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: appColors?.gray,
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
    height: 114,
    alignSelf: 'center',
    marginVertical: 16,
    resizeMode: 'contain',
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
    height: ScreenWidth / 10,
    flex: 1,
    marginLeft: 8,
  },
  micIcon: {
    marginLeft: 8,
  },
});

export default Header;
