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

const Header = () => {
  const navigation = useNavigation();
  const renderHeaderComp = () => {
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
            marginBottom: 22,
          }}>
          <Text style={styles.title}>Choose delivery location</Text>
        </View>
        {renderMiddleComp()}
      </View>
    );
  };
  const renderMiddleComp = () => {
    return (
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name={'location'}
            type={Icons?.Ionicons}
            color={appColors?.redOrange}
            size={26}
            style={{marginHorizontal: 8}}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: appColors?.redOrange,
            }}>
            Use current location
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: appColors?.gray,
            borderBottomWidth: 1,
            marginBottom: 18,
            marginVertical: 18,
          }}
        />
        <View
          style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 4}}>
          <Icon
            name={'plus'}
            type={Icons?.Foundation}
            color={appColors?.redOrange}
            size={26}
            style={{marginHorizontal: 8}}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: appColors?.redOrange,
            }}>
            Add new address
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: appColors?.gray,
            borderBottomWidth: 1,
            marginBottom: 18,
            marginVertical: 18,
          }}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name={'location'}
            type={Icons?.Ionicons}
            color={appColors?.redOrange}
            size={26}
            style={{marginHorizontal: 8}}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: appColors?.redOrange,
            }}>
            Order for someone else
          </Text>
        </View>
      </View>
    );
  };
  return <>{renderHeaderComp()}</>;
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
