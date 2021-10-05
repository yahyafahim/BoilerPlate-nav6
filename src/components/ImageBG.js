import React, {Children, Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Colors} from '../config';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const ImageBG = ({children, icon, name, goBack}) => {
  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
        {icon ? (
          <TouchableOpacity
            onPress={() => {
              if (goBack) goBack();
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
              source={require('../assets/back.png')}
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
      </View>
      <View style={{flex: 1}}>{children}</View>
    </ImageBackground>
  );
};

export default ImageBG;
