import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import ImageBG from '../../components/ImageBG';
import Colors from '../../config/colors';
import {Fumi} from '../../components/AnimatedTextInput';
const {height, width} = Dimensions.get('screen');

class App extends Component {
  state = {
    email: '',
  };
  render() {
    const {email} = this.state;

    return (
      <ImageBG
        name={'FORGET PASSWORD'}
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
                  source={require('../../assets/email.png')}
                  style={{width: 25, height: 25, resizeMode: 'contain'}}
                />
                <Fumi
                  label={'Email Address'}
                  inputPadding={16}
                  style={{width: '80%'}}
                  inputStyle={{color: 'black'}}
                  onChangeText={email => this.setState({email})}
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
                  Reset
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
