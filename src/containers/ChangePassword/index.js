import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Animated,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {Fumi} from '../../components/AnimatedTextInput';
import ImageBG from '../../components/ImageBG';
import Colors from '../../config/colors';

const {height, width} = Dimensions.get('screen');

class App extends Component {
  state = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  render() {
    const {code, key, resendActivated} = this.state;
    return (
      <ImageBG
        name={'CHANGE PASSWORD'}
        icon
        goBack={this.props.navigation.goBack}>
        <View style={{}}>
          <ScrollView contentContainerStyle={{flexGrow: 1}} bounces={false}>
            <View style={{width, alignItems: 'center'}}>
              <Image
                source={require('../../assets/logo.png')}
                style={{
                  width: width * 0.6,
                  height: height * 0.25,
                  resizeMode: 'contain',
                  // backgroundColor: 'red',
                }}
              />
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View
                style={{
                  height: 60,
                  width: '85%',
                  borderRadius: 15,
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  overflow: 'hidden',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Image
                  source={require('../../assets/password.png')}
                  style={{width: 25, height: 25, resizeMode: 'contain'}}
                />
                <Fumi
                  label={'Existing Password'}
                  inputPadding={16}
                  style={{width: '80%'}}
                  inputStyle={{color: 'black'}}
                  onChangeText={currentPassword =>
                    this.setState({currentPassword})
                  }
                />
              </View>
              <View
                style={{
                  height: 60,
                  width: '85%',
                  borderRadius: 15,
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  overflow: 'hidden',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Image
                  source={require('../../assets/password.png')}
                  style={{width: 25, height: 25, resizeMode: 'contain'}}
                />
                <Fumi
                  label={'New Password'}
                  inputPadding={16}
                  style={{width: '80%'}}
                  inputStyle={{color: 'black'}}
                  onChangeText={newPassword => this.setState({newPassword})}
                />
              </View>
              <View
                style={{
                  height: 60,
                  width: '85%',
                  borderRadius: 15,
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  overflow: 'hidden',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Image
                  source={require('../../assets/confirmPass.png')}
                  style={{width: 25, height: 25, resizeMode: 'contain'}}
                />
                <Fumi
                  label={'Confirm Password'}
                  inputPadding={16}
                  style={{width: '80%'}}
                  inputStyle={{color: 'black'}}
                  onChangeText={confirmPassword =>
                    this.setState({confirmPassword})
                  }
                />
              </View>

              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  marginTop: 25,
                  height: 60,
                  width: '85%',
                  borderRadius: 15,
                  backgroundColor: Colors.Button,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
                  Change
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ImageBG>
    );
  }
}

export default App;
