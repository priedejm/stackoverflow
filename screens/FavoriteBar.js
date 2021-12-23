import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Dimensions,
  Image,
  Animated,
  PanResponder,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';

const HeadBars = {
  id: '1',
  uri: require('../assets/placeholder4.jpg'),
  text: 'Test',
};

const Bars = [
  { id: '1', uri: require('../assets/placeholder1.jpg') },
  { id: '2', uri: require('../assets/placeholder2.jpg') },
  { id: '3', uri: require('../assets/placeholder3.jpg') },
  { id: '4', uri: require('../assets/placeholder4.jpg') },
];

const pressableTest = () => {
  let textlog = '';
  const [state, setState] = useState(0);
};

export default class FavoriteBar extends React.Component {
  renderBars = () => {
    return Bars.map((item, i) => {
      return (
        <View style={{ paddingTop: 15, paddingLeft: 15, paddingRight: 15,}}>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('VenueDetails')}
              activeOpacity={.60}
              >
              
              <LinearGradient colors={['transparent', '#FFFFFF']}>
                <ImageBackground
                  source={item.uri}
                  style={{
                    width: '100%',
                    height: 225,
                    backgroundColor: '#FFFFFF'
                  }}
                  imageStyle={{ borderRadius: 15 }}>
                 
               
                 
                  <View
                    style={{
                      position: 'absolute',
                      top: 135,
                      left: 10,
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.barName}>Bar Name</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      position: 'absolute',
                      top: 165,
                      left: 10,
                    }}>
                    <Text style={styles.barCategory}>Sports Bar</Text>
                    <Text style={styles.dot}>•</Text>
                    <Text style={styles.money}>$$</Text>
                    <Text style={styles.dot}>•</Text>
                    <Text style={styles.starRating}>★★★</Text>
                  </View>

                  <View style={{position: 'absolute', top: 185, left: 10}}>
                    <Text style={{ color: 'white' , fontSize: 15, textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
    textShadowColor: '#000',}}>
                      You have visited this restraunt 24 times
                    </Text>
                    </View>
                  

                  <View
                    style={{
                      borderBottomLeftRadius: 15,
                      borderBottomRightRadius: 15,
                      overflow: 'hidden',
                      top: 175,
                    }}>
                    <LinearGradient
                      colors={['transparent', 'rgba(0,0,0,0.8)']}
                      style={{ width: 390, height: 50 }}>
                      </LinearGradient>
                  </View>

                </ImageBackground>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      );
    });
  };

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <View style={{ top: scale(50), alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: scale(20) }}>
            My favorites
          </Text>
        </View>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
          <View style={{ top: scale(17), paddingLeft: scale(5) }}>
            <MaterialCommunityIcons
              name="chevron-left"
              color="black"
              size={45}
            />
          </View>
        </TouchableOpacity>

        <View style={{ top: 35, paddingLeft: 15 }}>
          <Text
            style={{ color: 'black', fontSize: scale(15), fontWeight: 'bold' }}>
            4 Bars
          </Text>
        </View>

        <View style={{ marginTop: 30 }}>{this.renderBars()}</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  starRating: {
    color: 'white',
    fontSize: 15,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    textShadowColor: '#000',
  },

  barCategory: {
    color: 'white',
    fontSize: 15,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    textShadowColor: '#000',
  },
  barName: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    textShadowColor: '#000',
  },
  dot: {
    color: 'white',
    fontSize: 15,
    paddingLeft: 5,
    paddingRight: 5,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    textShadowColor: '#000',
    alignItems: 'center',
  },
  money: {
    color: 'white',
    fontSize: 15,
  },
});
