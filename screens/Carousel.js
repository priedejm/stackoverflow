import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.6;
const images = [
  { id: '1', uri: require('../assets/placeholder1.jpg'), text: 'Test' },
  { id: '2', uri: require('../assets/placeholder2.jpg') /*text: "Test"*/ },
  { id: '3', uri: require('../assets/placeholder3.jpg') /*text: "Test"*/ },
  { id: '4', uri: require('../assets/placeholder4.jpg') /*text: "Test"*/ },
];

export default class CarouselGallary extends React.Component {
  state = {
    active: 0,
  };

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  };

  /* Swiping bug comes from width in scroll view not being just width, cant spend any more time on something as stupid as thi*/
  render() {
    return (
        <View
          style={{justifyContent: 'center', alignItems: 'center' ,}}>
          <ScrollView
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={this.change}
            style={{ width: 350, height, borderRadius: 10 }}> 
            {images.map((image, index) => (
              <ImageBackground
                source={image.uri}
                style={{width, height: '100%',resizeMode: 'contain' }}>
              </ImageBackground>
            ))}
          </ScrollView>

          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              bottom: -25,
              alignSelf: 'center',
            }}>
            {images.map((i, k) => (
              <Text
                style={
                  k == this.state.active
                    ? styles.activeCorousel
                    : styles.carousel
                }>
                ⬤
              </Text>
            ))}
          </View>
        </View>


    );
  }
}

const styles = StyleSheet.create({
  carousel: {
    color: '#888',
    fontSize: width / 35,
    opacity: 0.5,
  },
  activeCorousel: {
    color: '#FF1180',
    fontSize: width / 35,
  },
  detailsContainer: {
    flex: 2,
    backgroundColor: '#272933',
  },
  starRating: {
    color: 'white',
    fontSize: 20,
  },

  distanceText: {
    color: 'white',
    fontSize: 20,
    paddingLeft: 5,
  },
  barName: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 40,
    paddingLeft: 20,
  },
  barCategory: {
    color: 'white',
    fontSize: 20,
    paddingLeft: 20,
  },
  staticDetails: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  dependentDetails: {
    color: 'grey',
    fontSize: 20,
    paddingLeft: 20,
  },
  dot: {
    color: 'white',
    fontSize: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },
  money: {
    color: 'white',
    fontSize: 25,
  },
  navigationImage: {
    height: 30,
    width: 30,
    transform: [{ rotate: '45deg' }],
  },
});
