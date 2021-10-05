import React, {Component} from 'react';
import Nav from './src';
import {
  View,
  StatusBar,
  LogBox,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Root} from 'native-base';
import {store} from './src/redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import ImageBG from './src/components/AppBG';
// import messaging from '@react-native-firebase/messaging';
LogBox.ignoreAllLogs(true);

// async function requestUserPermission() {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Authorization status:', authStatus);
//   }
// }

class App extends Component {
  // componentDidMount() {
  //   requestUserPermission();
  // }
  render() {
    return (
      <Wrapper>
        <GestureHandlerRootView style={{flex: 1, backgroundColor: 'white'}}>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <Provider store={store}>
            <Root>
              <Nav />
            </Root>
          </Provider>
        </GestureHandlerRootView>
      </Wrapper>
    );
  }
}

export default App;

function Wrapper({children}) {
  if (Platform.OS === 'ios')
    return (
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
        // keyboardVerticalOffset={20}
      >
        {children}
      </KeyboardAvoidingView>
    );
  return <View style={{flex: 1}}>{children}</View>;
}
