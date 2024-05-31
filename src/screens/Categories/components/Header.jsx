import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Icon, {Icons} from '../../../utils/icons';
import {appColors} from '../../../utils/appColors';
import {ScreenWidth} from 'react-native-elements/dist/helpers';
const renderTextInputComp = () => {
  return (
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
  );
};
const renderBtns = () => {
  return (
    <View style={{flexDirection: 'row', gap: 6, marginVertical: 18}}>
      <View
        style={{
          width: 78,
          height: 25,
          backgroundColor: appColors?.redOrange,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
          marginVertical: 14,
        }}>
        <Text style={{color: appColors?.white, fontSize: 16, marginRight: 6}}>
          Offers
        </Text>
        <Icon
          name={'cancel'}
          type={Icons?.MaterialIcons}
          color={appColors?.white}
          size={16}
        />
      </View>
      <View
        style={{
          width: 78,
          height: 25,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
          marginVertical: 14,
          borderWidth: 1,
          borderColor: appColors?.black,
        }}>
        <Text style={{color: appColors?.black, fontSize: 16, marginRight: 6}}>
          Top rated
        </Text>
      </View>
      <View
        style={{
          width: 78,
          height: 25,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
          marginVertical: 14,
          borderWidth: 1,
          borderColor: appColors?.black,
        }}>
        <Text style={{color: appColors?.black, fontSize: 16, marginRight: 6}}>
          Loose
        </Text>
      </View>
      <View
        style={{
          width: 78,
          height: 25,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
          marginVertical: 14,
          borderWidth: 1,
          borderColor: appColors?.black,
        }}>
        <Text style={{color: appColors?.black, fontSize: 16, marginRight: 6}}>
          Combo
        </Text>
      </View>
    </View>
  );
};

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon
          name={'arrow-back'}
          type={Icons?.MaterialIcons}
          color={appColors?.black}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.title}>Select from store or product</Text>
      </View>
      {renderTextInputComp()}
      {renderBtns()}
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 40,
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 16}}>See stores</Text>
        <Text style={{fontSize: 16, color: appColors?.redOrange}}>Dishes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
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
    marginBottom: 16,
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
