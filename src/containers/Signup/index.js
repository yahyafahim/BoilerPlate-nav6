import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Animated,
} from 'react-native';
import ImageBG from '../../components/ImageBG';
import Colors from '../../config/colors';
import {Fumi} from '../../components/AnimatedTextInput';
const {height, width} = Dimensions.get('screen');

class App extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    isAgreed: false,
    fadeAnim: new Animated.Value(0),
  };

  fadeIn = () => {
    const {isAgreed} = this.state;
    this.setState({isAgreed: true});

    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 600,
    }).start();
  };

  fadeOut = () => {
    const {isAgreed} = this.state;
    this.setState({isAgreed: false});

    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 600,
    }).start();
  };

  render() {
    const {email, password, confirmPassword, isAgreed, fadeAnim} = this.state;

    return (
      <ImageBG name={'SIGNUP'} icon goBack={this.props.navigation.goBack}>
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
                  source={require('../../assets/email.png')}
                  style={{width: 25, height: 25, resizeMode: 'contain'}}
                />
                <Fumi
                  label={'Email'}
                  inputPadding={16}
                  style={{width: '80%'}}
                  inputStyle={{color: 'black'}}
                  onChangeText={email => this.setState({email})}
                />
              </View>
              <View
                style={{
                  height: 60,
                  marginTop: 25,
                  width: '85%',
                  borderRadius: 15,
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  overflow: 'hidden',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/password.png')}
                  style={{width: 25, height: 25, resizeMode: 'contain'}}
                />
                <Fumi
                  label={'Password'}
                  inputPadding={16}
                  style={{width: '80%'}}
                  inputStyle={{color: 'black'}}
                  onChangeText={password => this.setState({password})}
                  secureTextEntry
                />
              </View>
              <TouchableOpacity
                style={{
                  height: 60,
                  marginTop: 25,
                  width: '85%',
                  borderRadius: 15,
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  overflow: 'hidden',
                  justifyContent: 'center',
                  alignItems: 'center',
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
                  secureTextEntry
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Verification')}
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
                  Signup
                </Text>
              </TouchableOpacity>
              <View
                // onPress={() => this.props.navigation.navigate('ForgetPassword')}
                // activeOpacity={0.7}
                style={{
                  marginTop: 30,
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  flexDirection: 'row',
                  width: '85%',
                  // backgroundColor: 'red',
                  // overflow: 'hidden',
                }}>
                <TouchableOpacity
                  onPress={isAgreed ? this.fadeOut : this.fadeIn}
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 5,
                    backgroundColor: 'white',
                    marginRight: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Animated.Image
                    source={require('../../assets/check.png')}
                    style={{
                      width: 15,
                      height: 15,
                      resizeMode: 'contain',
                      tintColor: Colors.Text,
                      opacity: fadeAnim,
                    }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    flex: 1,
                    color: Colors.Text,
                    fontSize: 12,
                    fontWeight: '700',
                    textAlign: 'center',
                    lineHeight: 20,
                  }}>
                  I have read and agreed the{' '}
                  <Text
                    onPress={() =>
                      this.props.navigation.navigate('TermsConditionsAuth')
                    }>
                    Terms & Conditions
                  </Text>{' '}
                  and{' '}
                  <Text
                    onPress={() =>
                      this.props.navigation.navigate('PrivacyPolicyAuth')
                    }>
                    Privacy Policy
                  </Text>
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBG>
    );
  }
}

export default App;
