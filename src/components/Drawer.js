import {Card} from 'native-base';
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import FastImage from 'react-native-fast-image';
// import LinearGradient from 'react-native-linear-gradient';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Colors} from '../config';
import Devices from './Devices';
const {width, height} = Dimensions.get('screen');
const uri =
  'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201508/aaron-paul-story_647_082615064817.jpg';
const menuItems = [
  {
    icon: require('../assets/Menu/dashboardicon.png'),
    title: 'DASHBOARD',
    nav: 'Home',
  },
  // {
  //   icon: require('../assets/Menu/dashboardicon.png'),
  //   title: 'GOALS',
  //   nav: 'Goals',
  // },
  // {
  //   icon: require('../assets/Menu/forum.png'),
  //   title: 'FORUM',
  //   nav: 'Forum',
  // },
  // {
  //   icon: require('../assets/Menu/changepass.png'),
  //   title: 'CHANGE PASSWORD',
  //   nav: 'ChangePassword',
  // },
  // {
  //   icon: require('../assets/Menu/terms.png'),
  //   title: 'TERMS & CONDITIONS',
  //   nav: 'TermsConditionsApp',
  // },
  // {
  //   icon: require('../assets/Menu/privacy.png'),
  //   title: 'PRIVACY POLICY',
  //   nav: 'PrivacyPolicyApp',
  // },
  {
    icon: require('../assets/Menu/logout.png'),
    title: 'LOGOUT',
    nav: 'Login',
  },
];

class Drawer extends Component {
  state = {
    loader: false,
    name: 'John Smith',
    email: 'john.smith@domian.com',
    contact: '(123) 456 7890',
    qualification: 'Pre Graduated',
    profession: 'Student',
  };

  _renderItem({title, icon, nav}) {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate(nav);
        }}
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 30,
        }}>
        <Image
          source={icon}
          style={{
            width: 25,
            height: 25,
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            marginLeft: 30,
            color: '#919191',
            fontSize: 16,
            fontWeight: '600',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
  render() {
    const {name, email, contact, qualification, profession} = this.state;
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: Colors.drawerBG,
          alignItems: 'center',
        }}>
        <View
          // colors={['rgb(0,140,219)', 'rgb(0,203,225)']}
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: getStatusBarHeight() + 20,
            paddingBottom: 20,
          }}>
          <View style={{alignItems: 'center', width: '100%'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('EditProfile')}
              style={{position: 'absolute', right: 20}}
              activeOpacity={0.7}>
              <Image
                source={require('../assets/editprofile.png')}
                style={{width: 30, height: 30, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
            <Card
              style={{
                borderRadius: width,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.5,
                shadowRadius: 8.3,

                elevation: 13,
              }}>
              <FastImage
                source={{uri: uri}}
                style={{
                  backgroundColor: 'transparent',
                  height: height * 0.2,
                  width: height * 0.2,
                  borderColor: '#fff',
                  borderWidth: 2,
                  borderRadius: width,
                }}
              />
            </Card>

            <Text
              style={{
                color: '#fff',
                fontSize:
                  Devices.isIphoneX || Devices.isAndroidBeazeLess ? 22 : 20,
                fontWeight: '700',
                marginTop: 10,
              }}>
              {name}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 13,
                marginTop: 5,
              }}>
              {email}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 13,
                marginTop: 5,
              }}>
              {contact}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 13,
              }}>
              {qualification}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 13,
              }}>
              {profession}
            </Text>
          </View>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={menuItems}
          style={{
            width: '75%',
          }}
          contentContainerStyle={{
            marginTop: 50,
          }}
          numColumns={1}
          renderItem={({item}) => this._renderItem(item)}
        />
      </View>
    );
  }
}

export default Drawer;
