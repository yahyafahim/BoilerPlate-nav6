import React, {Component} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import AppBG from '../../components/AppBG';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import {Colors} from '../../config';
import StarRating from 'react-native-star-rating';

const {width} = Dimensions.get('screen');

const BACON_IPSUM =
  'Bacon ipsum dolor amet turducken landjaeger tongue spare ribs.';

const CONTENT = [
  {
    title: 'First',
    content: [
      {
        description: BACON_IPSUM,
        rating: 3,
      },
      {
        description: BACON_IPSUM,
        rating: 7,
      },
    ],
  },
  {
    title: 'Second',
    content: [
      {
        description: BACON_IPSUM,
        rating: 7,
      },
      {
        description: BACON_IPSUM,
        rating: 7,
      },
    ],
  },
  {
    title: 'Third',
    content: [
      {
        description: BACON_IPSUM,
        rating: 7,
      },
      {
        description: BACON_IPSUM,
        rating: 7,
      },
    ],
  },
  {
    title: 'Fourth',
    content: [
      {
        description: BACON_IPSUM,
        rating: 7,
      },
      {
        description: BACON_IPSUM,
        rating: 7,
      },
    ],
  },
  {
    title: 'Fifth',
    content: [
      {
        description: BACON_IPSUM,
        rating: 7,
      },
      {
        description: BACON_IPSUM,
        rating: 7,
      },
    ],
  },
];

class App extends Component {
  state = {
    activeSections: [0],
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 1000);
  }

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/circle.png')}
            style={{width: 10, height: 10, tintColor: Colors.Text}}
          />
          <Text style={styles.headerText}>{section.title}</Text>
        </View>
        <Image
          source={require('../../assets/dropdown.png')}
          style={{
            width: 18,
            height: 18,
            resizeMode: 'contain',
            marginRight: 10,
            tintColor: Colors.Text,
            transform: isActive ? [{rotate: '0deg'}] : [{rotate: '-90deg'}],
          }}
        />
      </Animatable.View>
    );
  };

  renderContent = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={100}
        style={[
          styles.content,
          isActive ? styles.activeContent : styles.inactive,
        ]}
        transition="backgroundColor">
        {section.content.map(item => {
          const {description, rating} = item;
          return (
            <View style={{flexDirection: 'row', marginBottom: 25}}>
              <Image
                source={require('../../assets/circle.png')}
                style={{
                  width: 10,
                  height: 10,
                  tintColor: Colors.White,
                  marginTop: 3,
                }}
              />
              <View
                style={{
                  marginLeft: 10,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    console.log(this.props);

                    this?.props.navigation.navigate('DashboardDetails');
                  }}>
                  <Text
                    numberOfLines={2}
                    style={{
                      color: 'white',
                      fontSize: 16,
                      fontStyle: 'italic',
                      marginBottom: 10,
                    }}>
                    {description}
                  </Text>
                </TouchableOpacity>
                <StarRating
                  disabled={true}
                  emptyStar={require('../../assets/ratingEmpty.png')}
                  fullStar={require('../../assets/ratingFilled.png')}
                  maxStars={10}
                  starSize={width / 20}
                  rating={rating}
                />
              </View>
            </View>
          );
        })}
      </Animatable.View>
    );
  };

  renderFooter() {
    return <View style={{height: 20, backgroundColor: 'transparent'}} />;
  }

  render() {
    const {activeSections, isLoading} = this.state;
    return (
      <AppBG name={'DASHBOARD'} drawer={this.props.navigation.openDrawer}>
        <ScrollView
          contentContainerStyle={{padding: 20}}
          bounces={false}
          showsVerticalScrollIndicator={false}>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={false}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            renderFooter={this.renderFooter}
            duration={200}
            onChange={this.setSections}
            renderAsFlatList={false}
          />
        </ScrollView>
      </AppBG>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  header: {
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 15,
  },
  content: {
    paddingHorizontal: 30,
    paddingTop: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  active: {
    backgroundColor: 'rgba(183,183,183,.3)',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  activeContent: {
    backgroundColor: 'rgba(183,183,183,.3)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  inactive: {
    backgroundColor: 'rgba(183,183,183,.3)',
  },
});
