import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  RefreshControl,
} from 'react-native';
import PinkBusy from '../components/HomePage/pinkBusy'
import GreenOpen from '../components/HomePage/greenOpen'
import PinkWait from '../components/HomePage/pinkWait';
import GreenWait from '../components/HomePage/greenWait';
import OneStar from '../components/Stars/oneStar';
import TwoStars from '../components/Stars/twoStars';
import ThreeStars from '../components/Stars/threeStar';
import FourStars from '../components/Stars/fourStars';
import FiveStars from '../components/Stars/fiveStars';
import GreenHorizontalView from '../components/HomePage/greenHorizontalView';
import PinkHorizontalView from '../components/HomePage/pinkHorizontalView';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';

const BarsList = [
  {
    name: 'GoodFellas',
    uri: require('../assets/PinkMug.png'),
    status: <PinkBusy />,
    subtitle: 'Sports Bar',
    star: <FourStars />,
  },
  {
    name: 'Tapp Room',
    uri: require('../assets/PinkMug.png'),
    status: <PinkBusy />,
    subtitle: 'Pub',
    star: <ThreeStars />,
  },
  {
    name: 'Disco Fiesta',
    uri: require('../assets/GreenMug.png'),
    status: <GreenOpen />,
    subtitle: 'Karaoke Bar',
    star: <FiveStars />,
  },
  {
    name: 'The Ale House',
    uri: require('../assets/GreenMug.png'),
    status: <GreenOpen />,
    subtitle: 'Sports Bar',
    star: <TwoStars />,
  },
  {
    name: 'The Peddler',
    uri: require('../assets/GreenMug.png'),
    status: <GreenOpen />,
    subtitle: 'Pub',
    star: <OneStar />,
  },
  {
    name: 'MoonShot',
    uri: require('../assets/GreenMug.png'),
    status: <GreenOpen />,
    subtitle: 'Sports Bar',
    star: <ThreeStars />,
  },
  {
    name: 'Hes Not Here',
    uri: require('../assets/GreenMug.png'),
    status: <GreenOpen />,
    subtitle: 'Pub',
    star: <ThreeStars />,
  },
  {
    name: '8',
    uri: require('../assets/GreenMug.png'),
    status: <GreenOpen />,
    subtitle: 'Karaoke Bar',
    star: <ThreeStars />,
  },
  {
    name: '9',
    uri: require('../assets/GreenMug.png'),
    status: <GreenOpen />,
    subtitle: 'Sports Bar',
    star: <ThreeStars />,
  },
];

const BarsListPhotos = [
  {
    name: 'GoodFellas',
    uri: require('../assets/placeholder1.jpg'),
    status: <PinkBusy />,
    subtitle: 'Sports Bar',
    star: <FourStars />,
  },
  {
    name: 'Tapp Room',
    uri: require('../assets/placeholder2.jpg'),
    status: <PinkBusy />,
    subtitle: 'Pub',
    star: <ThreeStars />,
  },
  {
    name: 'Disco Fiesta',
    uri: require('../assets/placeholder3.jpg'),
    status: <GreenOpen />,
    subtitle: 'Karaoke Bar',
    star: <FiveStars />,
  },
  {
    name: 'The Ale House',
    uri: require('../assets/placeholder4.jpg'),
    status: <GreenOpen />,
    subtitle: 'Sports Bar',
    star: <TwoStars />,
  },
  {
    name: 'The Peddler',
    uri: require('../assets/placeholder5.jpg'),
    status: <GreenOpen />,
    subtitle: 'Pub',
    star: <OneStar />,
  },
  {
    name: 'MoonShot',
    uri: require('../assets/placeholder6.jpg'),
    status: <GreenOpen />,
    subtitle: 'Sports Bar',
    star: <ThreeStars />,
  },
  {
    name: 'Hes Not Here',
    uri: require('../assets/placeholder7.jpg'),
    status: <GreenOpen />,
    subtitle: 'Pub',
    star: <ThreeStars />,
  },
  {
    name: '8',
    uri: require('../assets/placeholder8.jpg'),
    status: <GreenOpen />,
    subtitle: 'Karaoke Bar',
    star: <ThreeStars />,
  },
  {
    name: '9',
    uri: require('../assets/placeholder9.jpg'),
    status: <GreenOpen />,
    subtitle: 'Sports Bar',
    star: <ThreeStars />,
  },
];

const BarsHorizontal = [
  {
    name: 'Boone Saloon',
    uri: require('../assets/placeholder1.jpg'),
    subtitle: 'Bar and Arcade',
    costOfBar: '$',
    reviewStars:'★★',
    barDistance:".08 miles",
    status2: <GreenWait/>,
    status: (
      <GreenHorizontalView
        barCategory="Sports Bar"
        barDistance=".08 miles"
        costOfBar="$"
      />
    ),
  },
  {
    name: 'Tapp Room',
    uri: require('../assets/placeholder2.jpg'),
    subtitle: 'Sports Bar',
    costOfBar: '$$$',
    reviewStars:'★★★★',
    barDistance:"1.2 miles",
    status2: <PinkWait/>,
    status: (
      <PinkHorizontalView
        barCategory="Pub"
        barDistance="1.2 miles"
        costOfBar="$$$"
      />
    ),
  },
  {
    name: 'The Ale House',
    uri: require('../assets/placeholder3.jpg'),
    subtitle: 'Karaoke Bar',
    costOfBar: '$$',
    reviewStars:'★',
    barDistance:"1.5 miles",
    status2: <GreenWait/>,
    status: (
      <GreenHorizontalView
        barCategory="Sports Bar"
        barDistance="1.5 miles"
        costOfBar="$$$"
      />
    ),
  },
  {
    name: 'Disco Fiesca',
    uri: require('../assets/placeholder4.jpg'),
    subtitle: 'Pub',
    costOfBar: '$',
    reviewStars:'★★★★★',
    barDistance:"2 miles",
    status2: <GreenWait/>,
    status: (
      <GreenHorizontalView
        barCategory="Karaoke Bar"
        barDistance="2 miles"
        costOfBar="$$"
      />
    ),
  },
  {
    name: 'Hes Not Here',
    uri: require('../assets/placeholder5.jpg'),
    subtitle: 'Pub',
    costOfBar: '$$$',
    reviewStars:'★★★',
    barDistance:"2.2 miles",
    status2: <PinkWait/>,
    status: (
      <PinkHorizontalView
        barCategory="Sports Bar"
        barDistance="2.2 miles"
        costOfBar="$$"
      />
    ),
  },
  {
    name: 'Chucky Cheese',
    uri: require('../assets/placeholder6.jpg'),
    subtitle: 'Sports Bar',
    costOfBar: '$$',
    reviewStars:'★★★',
    barDistance:"2.7 miles",
    status2: <GreenWait/>,
    status: (
      <PinkHorizontalView
        barCategory="Pub"
        barDistance="2.7 miles"
        costOfBar="$"
      />
    ),
  },
  {
    name: 'MoonShot',
    uri: require('../assets/placeholder7.jpg'),
    subtitle: 'Karaoke Bar',
    costOfBar: '$',
    reviewStars:'★★★',
    barDistance:"3 miles",
    status2: <GreenWait/>,
    status: (
      <GreenHorizontalView
        barCategory="NightClub"
        barDistance="3 miles"
        costOfBar="$$$"
      />
    ),
  },
  {
    name: 'The Peddler',
    uri: require('../assets/placeholder8.jpg'),
    subtitle: 'Pub',
    costOfBar: '$$$',
    reviewStars:'★★★',
    barDistance:".08 miles",
    status2: <GreenWait/>,
    status: (
      <GreenHorizontalView
        barCategory="Sports Bar"
        barDistance="0.8 miles"
        costOfBar="$$"
      />
    ),
  },
  {
    name: 'Chucky Cheese',
    uri: require('../assets/placeholder9.jpg'),
    subtitle: 'Sports Bar',
    costOfBar: '$',
    reviewStars:'★★★',
    barDistance:".08 miles",
    status2: <PinkWait/>,
    status: (
      <PinkHorizontalView
        barCategory="Sports Bar"
        barDistance="0.8 miles"
        costOfBar="$$"
      />
    ),
  },
];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class ListHome extends React.Component {
  state = {
    search: '',
    refreshing: false,
  };

  /* use this method when you need refresh to have a functionality. fetchData is the method that would call the newest data.
   use the code 'onrefresh={this.onRefresh} in refreshcontrol under the scroll view
 onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }*/

  updateSearch = (search) => {
    this.setState({ search });
  };

  renderBarsHorizontal = () => {
    return BarsHorizontal.map((item, i) => {
      return (
        <View
          style={{
            width: scale(157),
            paddingLeft: scale(10),
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('VenueDetails')}
            activeOpacity={0.7}>
            <ImageBackground
              source={item.uri}
              style={{
                width: '100%',
                height: scale(195),
                shadowColor: '#000',
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 1,
              }}
              imageStyle={{ borderRadius: 10, }}>
              {item.status2}
              <View
                style={{
                  position: 'absolute',
                  bottom: 10,
                  left: 10,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}>
                <Text style={styles.barNameHorizontal}>{item.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.barCategoryHorizontal}>
                    {item.subtitle}
                  </Text>
                  <Text style={styles.dotHorizontal}>⬤</Text>
                  <Text style={styles.moneyHorizontal}>{item.costOfBar}</Text>
                </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons
                name="map-marker"
                size={15}
                color="white"
              />
                <Text style={styles.barDistanceHorizontal}>{item.barDistance}</Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      );
    });
  };

  renderBarsList = (props) => {
    return BarsListPhotos.map((item, i) => {
      return (
        <View
          style={{
            width: scale(110),
            paddingLeft: scale(10),
            paddingRight: scale(10),
            paddingBottom: scale(10),
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('VenueDetails')}
            activeOpacity={0.7}>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                width: scale(330),
                height: scale(125),
                borderRadius: scale(10),
                flexDirection: 'row',
                shadowColor: '#000',
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.8,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingLeft: scale(5),
                  position: 'absolute',
                  paddingTop: scale(5),
                }}>
                <Image
                  source={item.uri}
                  style={{
                    width: 125,
                    height: scale(115),
                    borderBottomLeftRadius: scale(10),
                    borderTopLeftRadius: scale(10),
                  }}
                />
              </View>

              <View style={{ left: scale(135) }}>
                <Text style={styles.barName}>{item.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.barCategory}>Sports Bar</Text>
                  <Text style={styles.dot}>⬤</Text>
                  <Text style={styles.money}>$$</Text>
                </View>
                <Text style={styles.barAddress}>
                  {' '}
                  189 Brown St Boone, NC {'\n'} 28607{' '}
                </Text>
                {item.star}
              </View>
            </View>

            {item.status}
            <View style={styles.barDistance}>
              <MaterialCommunityIcons
                name="map-marker"
                size={13}
                color="#6e6e6e"
              />

              <Text style={{ fontSize: 12, color: '#6e6e6e' }}>0.8 Miles</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={{}}>
        <View
          style={{
            backgroundColor: '#d1cfcf',
            height: scale(140),
            width: windowWidth,
          }}></View>

        <ScrollView
          refreshControl={<RefreshControl refreshing={this.state.refreshing} />}
          style={{ marginBottom: scale(150) }}>
          <View style={{ paddingLeft: scale(10), bottom: scale(5) }}>
            <Text style={{ fontSize: scale(17) }}>Nearby</Text>
          </View>
          <ScrollView horizontal={true} style={{ height: scale(205) }}>
            <this.renderBarsHorizontal />
          </ScrollView>

          <View style={{ paddingLeft: scale(10), paddingTop: scale(15) }}>
            <Text style={{ fontSize: scale(17) }}>Popular</Text>
          </View>

          <View style={{ marginTop: scale(5) }}>
            <this.renderBarsList />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = ScaledSheet.create({
  searchBarContainer: {
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textShadowColor: 'black',
    backgroundColor: '#d1cfcf',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    paddingRight: scale(20),
    paddingLeft: scale(20),
  },
  conditionalMap: {
    backgroundColor: 'white',
    height: scale(45),
    width: scale(100),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: scale(75),
    top: scale(5),
  },
  conditionalList: {
    backgroundColor: '#b3b3b3',
    height: scale(45),
    width: scale(115),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: scale(75),
    top: scale(5),
  },
  starRating: {
    color: '#FFC107',
    fontSize: '15@s',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textShadowColor: '#000',
  },

  barCategory: {
    color: '#6e6e6e',
    fontSize: '15@s',
    paddingTop: '3@s',
    paddingBottom: '3@s',
  },
  barAddress: {
    color: '#6e6e6e',
    fontSize: '15@s',
    right: '3@s',
    paddingBottom: '3@s',
  },
  barName: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: '15@s',
    paddingTop: '10@s',
  },
  dot: {
    color: '#6e6e6e',
    fontSize: '5@s',
    paddingLeft: '5@s',
    paddingRight: '5@s',
  },
  money: {
    color: '#6e6e6e',
    fontSize: '15@s',
  },
  pinkBusy: {
    position: 'absolute',
    top: scale(10),
    left: scale(250),
    backgroundColor: '#FF1180',
    height: scale(20),
    width: scale(55),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  barDistance: {
    position: 'absolute',
    top: scale(35),
    left: scale(260),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  barNameHorizontal: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: '15@s',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    textShadowColor: '#000',
  },
  starRatingHorizontal: {
    color: '#FFC107',
    fontSize: '10@s',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    textShadowColor: '#000',
  },

  barCategoryHorizontal: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: '13@s',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    textShadowColor: '#000',
  },
  barDistanceHorizontal: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: '11@s',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    textShadowColor: '#000',
  },
  dotHorizontal: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: '5@s',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    textShadowColor: '#000',
    paddingRight: '5@s',
    paddingLeft: '5@s',
  },
  moneyHorizontal: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: '13@s',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    textShadowColor: '#000',
  },
});
