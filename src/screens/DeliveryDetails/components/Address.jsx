import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon, {Icons} from '../../../utils/icons';
import {appColors} from '../../../utils/appColors';

const Address = () => {
  const renderHomeAddress = () => {
    return (
      <View style={{marginTop: 22}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name={'home'}
            type={Icons?.Ionicons}
            color={appColors?.redOrange}
            size={18}
            // style={{marginHorizontal: 20}}
          />
          <Text
            style={{fontSize: 18, marginLeft: 8, color: appColors?.redOrange}}>
            Home
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 16, maxWidth: 228, marginTop: 6}}>
            S.P Mukherjee Road, Mohishila, Asansol Pin- 713303
          </Text>
          <View style={{flexDirection: 'row', position: 'absolute', right: 0}}>
            <Icon
              name={'pencil'}
              type={Icons?.Ionicons}
              color={appColors?.black}
            />
            <Icon
              name={'delete'}
              type={Icons?.MaterialCommunityIcons}
              color={appColors?.black}
              style={{marginLeft: 16}}
            />
          </View>
        </View>
      </View>
    );
  };
  const renderOfficeAddress = () => {
    return (
      <View style={{marginTop: 22}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name={'shopping-bag'}
            type={Icons?.Foundation}
            color={appColors?.redOrange}
            size={18}
            // style={{marginHorizontal: 20}}
          />
          <Text
            style={{fontSize: 18, marginLeft: 8, color: appColors?.redOrange}}>
            Office
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 16, maxWidth: 228, marginTop: 6}}>
            Tirupati Complex Burnpur Road, Court More, Asansol, 713304
          </Text>
          <View style={{flexDirection: 'row', position: 'absolute', right: 0}}>
            <Icon
              name={'pencil'}
              type={Icons?.Ionicons}
              color={appColors?.black}
            />
            <Icon
              name={'delete'}
              type={Icons?.MaterialCommunityIcons}
              color={appColors?.black}
              style={{marginLeft: 16}}
            />
          </View>
        </View>
      </View>
    );
  };
  const renderOtherAddress = () => {
    return (
      <View style={{marginTop: 22}}>
        <View>
          <Text
            style={{fontSize: 18, marginLeft: 8, color: appColors?.redOrange}}>
            Other
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={{fontSize: 16, maxWidth: 228, marginTop: 6}}>
              Suraj Jain
            </Text>
            <Text style={{fontSize: 16, maxWidth: 228, marginTop: 6}}>
              8765431234/9876567890
            </Text>
            <Text style={{fontSize: 16, maxWidth: 228, marginTop: 6}}>
              Tirupati Complex Burnpur Road, Court More, Asansol, 713304
            </Text>
          </View>
          <View style={{flexDirection: 'row', position: 'absolute', right: 0}}>
            <Icon
              name={'pencil'}
              type={Icons?.Ionicons}
              color={appColors?.black}
            />
            <Icon
              name={'delete'}
              type={Icons?.MaterialCommunityIcons}
              color={appColors?.black}
              style={{marginLeft: 16}}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 22, marginTop: 16}}>Saved Address</Text>
      {renderHomeAddress()}
      {renderOfficeAddress()}
      {renderOtherAddress()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 14,
    backgroundColor: '#fff',
    marginHorizontal: 8,
  },
});

export default Address;
