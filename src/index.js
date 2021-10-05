import React, {Component} from 'react';
// import DrawerCustom from './components/Drawer';

//Navigations here
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';

//Screens
import {
  Login,
  // ForgetPassword,
  // Signup,
  // Verification,
  // CompleteProfile,
  // Home,
  // TermsConditions,
  // PrivacyPolicy,
  // ChangePassword,
} from './containers';
import {NavService} from './config';
import {ImageBackground} from 'react-native';
// import { connect } from 'react-redux';

const Stack = createNativeStackNavigator();

// const Drawer = createDrawerNavigator();

// const AppStack = () => {
//   return (
//     <ImageBackground source={require('./assets/appBG.png')} style={{flex: 1}}>
//       <Drawer.Navigator
//         screenOptions={{
//           contentStyle: {backgroundColor: 'transparent'},
//           animation: 'simple_push',
//           drawerType: 'front',
//           drawerStyle: {width: '90%', backgroundColor: 'transparent'},
//         }}
//         initialRouteName="Home"
//         drawerContent={props => <DrawerCustom {...props} />}>
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="TermsConditionsApp"
//           component={TermsConditions}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="PrivacyPolicyApp"
//           component={PrivacyPolicy}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="ChangePassword"
//           component={ChangePassword}
//           options={{headerShown: false}}
//         />
//         {/* <Stack.Screen
//         name="Profile"
//         component={ProfileStack}
//         options={{headerShown: false}}
//       />

//       <Stack.Screen
//         name="Notifications"
//         component={Notifications}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="TermsAndConditions"
//         component={TermsAndConditions}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Uploads"
//         component={Uploads}
//         options={{headerShown: false}}
//       /> */}
//       </Drawer.Navigator>
//     </ImageBackground>
//   );
// };

// const ProfileStack = () => {
//   return (
//     <Stack.Navigator initialRouteName="Profile">
//       <Stack.Screen
//         name="Profile"
//         component={Profile}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="ChangePassword1"
//         component={ChangePassword}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="EditProfile"
//         component={EditProfile}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// };

const AuthStack = () => {
  return (
    <ImageBackground source={require('./assets/bg.png')} style={{flex: 1}}>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {backgroundColor: 'transparent'},
          animation: 'simple_push',
        }}
        initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CompleteProfile"
          component={CompleteProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TermsConditionsAuth"
          component={TermsConditions}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PrivacyPolicyAuth"
          component={PrivacyPolicy}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </ImageBackground>
  );
};

class Navigation extends Component {
  state = {
    // ready: false,
    ready: true,
    initialRouteName: 'Auth',
  };
  // componentDidMount() {
  //   setTimeout(() => {
  //     const {user} = this.props;
  //     if (user) {
  //       this.setState({initialRouteName: 'AppStack'});
  //     }
  //     this.setState({ready: true});
  //   }, 2000);
  // }
  render() {
    const {initialRouteName, ready} = this.state;
    // if (!ready) return null;
    return (
      <ImageBackground source={require('./assets/bg.png')} style={{flex: 1}}>
        <NavigationContainer ref={ref => NavService.setTopLevelNavigator(ref)}>
          <Stack.Navigator
            screenOptions={{
              contentStyle: {backgroundColor: 'transparent'},
              animation: 'simple_push',
            }}
            initialRouteName={initialRouteName}>
            <Stack.Screen
              name="Auth"
              component={AuthStack}
              options={{headerShown: false}}
            />
            {/* <Stack.Screen
              name="AppStack"
              component={AppStack}
              options={{headerShown: false}}
            /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </ImageBackground>
    );
  }
}
// function mapStateToProps({reducer: {user}}) {
//   return {
//     user,
//   };
// }

// export default connect(mapStateToProps)(Navigation);
export default Navigation;
