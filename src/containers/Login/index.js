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
import {getStatusBarHeight} from 'react-native-status-bar-height';

const {height, width} = Dimensions.get('screen');

class App extends Component {
  state = {
    email: '',
    password: '',
    logoTop: new Animated.Value(height * 0.25),
    contentOpacity: new Animated.Value(0),
  };

  componentDidMount() {
    // SplashScreen.hide();
    this.doAnimation();
  }

  doAnimation = () => {
    // LayoutAnimation.spring ()
    Animated.timing(this.state.logoTop, {
      toValue: 20,
      duration: 1000,
    }).start();
    setTimeout(() => {
      Animated.timing(this.state.contentOpacity, {
        toValue: 1,
        duration: 1000,
      }).start();
    }, 500);
  };

  render() {
    const {email, password, logoTop, contentOpacity} = this.state;

    return (
      <ImageBG name={'LOGIN'}>
        <Animated.Image
          source={require('../../assets/logo.png')}
          style={{
            width: width * 0.6,
            // position: 'absolute',
            top: logoTop,
            height: height * 0.2,
            alignSelf: 'center',
          }}
          resizeMode="contain"
        />
        <Animated.View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingTop: getStatusBarHeight(),
            alignItems: 'center',
            opacity: contentOpacity,
          }}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1, width}}
            bounces={false}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                marginTop: 20,
                // justifyContent: 'center',
              }}>
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
                onPress={() => {
                  this.props.navigation.navigate('AppStack');
                }}
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
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ForgetPassword')}
                activeOpacity={0.7}
                style={{
                  marginTop: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{color: Colors.Text, fontSize: 14, fontWeight: '700'}}>
                  Forget Password?
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: Colors.White,
                fontSize: 16,
                fontWeight: '600',
                textAlign: 'center',
                marginBottom: 30,
              }}>
              Don't have an account?{' '}
              <Text
                onPress={() => this.props.navigation.navigate('Signup')}
                style={{color: Colors.Text}}>
                Create One
              </Text>
            </Text>
          </ScrollView>
        </Animated.View>
      </ImageBG>
    );
  }
}

export default App;
