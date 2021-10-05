import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Colors} from '../config';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const ImageBG = ({
  children,
  name,
  drawer,
  openModal,
  back,
  navigate = null,
}) => {
  return (
    <ImageBackground
      source={require('../assets/appBG.png')}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
          width: '100%',
          backgroundColor: Colors.primary,
          paddingTop: getStatusBarHeight() + 10,
          paddingBottom: 20,
          // backgroundColor: 'red',
        }}>
        {drawer ? (
          <TouchableOpacity
            onPress={() => {
              if (drawer) drawer(navigate);
            }}
            style={{
              position: 'absolute',
              top: getStatusBarHeight() + 10,
              left: 25,
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: '#fff',
                resizeMode: 'contain',
              }}
              source={
                back
                  ? require('../assets/back.png')
                  : require('../assets/menu.png')
              }
            />
          </TouchableOpacity>
        ) : null}
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          {name}
        </Text>
        {openModal ? (
          <TouchableOpacity
            onPress={openModal}
            style={{
              position: 'absolute',
              top: getStatusBarHeight() + 10,
              right: 25,
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: '#fff',
                resizeMode: 'contain',
              }}
              source={require('../assets/plus.png')}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={{flex: 1}}>{children}</View>
    </ImageBackground>
  );
};

export default ImageBG;
