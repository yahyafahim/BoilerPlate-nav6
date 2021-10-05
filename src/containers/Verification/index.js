import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Animated,
  Keyboard,
} from 'react-native';
import ImageBG from '../../components/ImageBG';
import Colors from '../../config/colors';
import OTPInputView from '../../components/react-native-otp-input';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

const {height, width} = Dimensions.get('screen');

class App extends Component {
  state = {
    code: '',
    key: 1,
    resendActivated: false,
  };

  render() {
    const {code, key, resendActivated} = this.state;
    const otpContainerWidth = width - 60;
    const otpsingle = (width - 110) / 6;
    return (
      <ImageBG name={'VERIFICATION'} icon goBack={this.props.navigation.goBack}>
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
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                marginTop: 40,
              }}>
              <Text
                style={{
                  width: '90%',
                  textAlign: 'center',
                  color: '#fff',
                  marginBottom: 40,
                  fontWeight: '600',
                  fontSize: 13,
                }}>
                We have sent you an email containing {'\n'}
                <Text
                  style={{
                    color: Colors.Text,
                  }}>
                  VERIFICATION CODE{' '}
                </Text>
                and instructions. Please follow the instructions to verify your
                email address
              </Text>
              <OTPInputView
                style={{width: otpContainerWidth, height: otpsingle}}
                pinCount={6}
                code={code}
                onCodeChanged={code => {
                  this.setState({code});
                }}
                // autoFocusOnLoad
                codeInputFieldStyle={{
                  width: otpsingle,
                  height: otpsingle,
                  backgroundColor: Colors.White,
                  borderRadius: 10,
                  color: Colors.Text,
                  fontWeight: '700',
                }}
                onCodeFilled={code => {
                  // Keyboard.dismiss();
                  setTimeout(() => {
                    this.props.navigation.navigate('CompleteProfile');
                  }, 100);
                }}
              />
              <View
                style={{
                  marginVertical: 50,
                }}>
                <CountdownCircleTimer
                  key={key}
                  isPlaying
                  rotation={'clockwise'}
                  duration={60}
                  colors={[[Colors.Text, 2000]]}
                  trailColor={Colors.Transparent}
                  size={130}
                  strokeWidth={4}
                  onComplete={() => this.setState({resendActivated: true})}>
                  {({remainingTime, animatedColor}) => (
                    <View
                      style={{
                        height: '85%',
                        borderColor: 'white',
                        borderWidth: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '85%',
                        borderRadius: 200,
                      }}>
                      {resendActivated ? (
                        <Text
                          onPress={() =>
                            this.setState({
                              resendActivated: false,
                              key: key + 1,
                            })
                          }
                          style={{
                            color: Colors.Text,
                            fontWeight: 'bold',
                            fontSize: 16,
                            // fontFamily: Fonts.semiBold,
                          }}>
                          Resend
                        </Text>
                      ) : (
                        <Animated.Text
                          style={{
                            color: Colors.Text,
                            fontWeight: 'bold',
                            // fontFamily: Fonts.semiBold,
                          }}>
                          00:{remainingTime}
                        </Animated.Text>
                      )}
                    </View>
                  )}
                </CountdownCircleTimer>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBG>
    );
  }
}

export default App;
