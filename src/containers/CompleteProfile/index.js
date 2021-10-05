import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Animated,
  KeyboardAvoidingView,
} from 'react-native';
import ImageBG from '../../components/ImageBG';
import Colors from '../../config/colors';
import {Fumi} from '../../components/AnimatedTextInput';
import ImagePicker from 'react-native-image-crop-picker';

const {height, width} = Dimensions.get('screen');

class App extends Component {
  state = {
    name: '',
    email: '',
    contact: '',
    qualification: '',
    profession: '',
    imageUrl: '',
  };

  uploadImage = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      this.setState({imageUrl: image.path});
    });
  };
  render() {
    const {name, email, contact, qualification, profession, imageUrl} =
      this.state;

    return (
      <ImageBG
        name={'COMPLETE PROFILE'}
        icon
        goBack={this.props.navigation.goBack}>
        <KeyboardAvoidingView style={{}}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View
              style={{
                width: width / 2.3,
                height: width / 2.3,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: width / 4,
                borderWidth: 3,
                borderColor: Colors.Text,
                marginTop: 30,
              }}>
              <TouchableOpacity
                onPress={this.uploadImage}
                activeOpacity={0.7}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: Colors.WhiteOpacity(0.2),
                  width: '95%',
                  height: '95%',
                  borderRadius: width,
                }}>
                {!imageUrl.length ? (
                  <Image
                    source={require('../../assets/dpcam.png')}
                    style={{
                      width: '40%',
                      resizeMode: 'contain',
                    }}
                  />
                ) : (
                  <Image
                    source={{uri: imageUrl}}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: width,
                    }}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                width,
                marginVertical: 20,
                paddingBottom: 20,
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
                  label={'Name'}
                  inputPadding={16}
                  style={{width: '80%'}}
                  inputStyle={{color: 'black'}}
                  onChangeText={name => this.setState({name})}
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
                  source={require('../../assets/emailIcon.png')}
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
                  source={require('../../assets/contact.png')}
                  style={{width: 25, height: 25, resizeMode: 'contain'}}
                />

                <Fumi
                  keyboardType={'phone-pad'}
                  label={'Contact No'}
                  inputPadding={16}
                  style={{width: '80%'}}
                  inputStyle={{color: 'black'}}
                  onChangeText={contact => this.setState({contact})}
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
                  source={require('../../assets/qualification.png')}
                  style={{width: 25, height: 25, resizeMode: 'contain'}}
                />

                <Fumi
                  // keyboardType={'phone-pad'}
                  label={'Qualification'}
                  inputPadding={16}
                  style={{width: '80%'}}
                  inputStyle={{color: 'black'}}
                  onChangeText={qualification => this.setState({qualification})}
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
                  source={require('../../assets/profession.png')}
                  style={{width: 25, height: 25, resizeMode: 'contain'}}
                />

                <Fumi
                  // keyboardType={'phone-pad'}
                  label={'Profession'}
                  inputPadding={16}
                  style={{width: '80%'}}
                  inputStyle={{color: 'black'}}
                  onChangeText={profession => this.setState({profession})}
                />
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('AppStack')}
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
                  Done
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBG>
    );
  }
}

export default App;
