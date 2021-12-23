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
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';
import Online from '../components/FriendsPage/Online';
import Offline from '../components/FriendsPage/Offline';
import {
    scale,
    verticalScale,
    moderateScale,
    ScaledSheet,
  } from 'react-native-size-matters';

  const FriendsList = [
    {
      name: 'Justin Priede',
      uri: require('../assets/male.png'),
      status: <Online />,
      distance: '0.8',
      miles: 'mi',
      //marker: <MapMarker />,
      s: 'online',
    },
    {
      name: 'Scarlett Johansen',
      uri: require('../assets/female.png'),
      status: <Online />,
      distance: '1.2',
      miles: 'mi',
      //marker: <MapMarker />,
      s: 'online',
    },
    {
      name: 'Connor Fewin',
      uri: require('../assets/male.png'),
      status: <Offline />,
    },
    {
      name: 'Margot Robbie',
      uri: require('../assets/female.png'),
      status: <Online />,
      distance: '2',
      miles: 'mi',
      //marker: <MapMarker />,
      s: 'online',
    },
    {
      name: 'Fiona From Shrek',
      uri: require('../assets/female.png'),
      status: <Offline />,
    },
    {
      name: 'Jessup Lowe',
      uri: require('../assets/male.png'),
      status: <Offline />,
    },
    {
      name: 'Noah Ze Waxman',
      uri: require('../assets/male.png'),
      status: <Online />,
      distance: '0.4',
      miles: 'mi',
      //marker: <MapMarker />,
      s: 'online',
    },
    {
      name: 'My Mom',
      uri: require('../assets/female.png'),
      status: <Online />,
      distance: '3',
      miles: 'mi',
      //marker: <MapMarker />,
      s: 'online',
    },
    {
      name: 'Your Mom',
      uri: require('../assets/female.png'),
      status: <Offline />,
    },
  ];

export default class Friends extends React.Component {

    state = {
        search: '',
      };
    
      goToMap = () => {
        this.props.renderMap();
      };
    
      updateSearch = (search) => {
        this.setState({ search });
      };
    
      renderFriendsList = (props) => {
        return FriendsList.map((item, i) => {
          if (item.s == 'online') {
            return (
              <View style={{ paddingLeft: scale(10), paddingRight: scale(10) }}>
                <View
                  style={{
                    backgroundColor: '#d1cfcf',
                    width: scale(330),
                    height: scale(85),
                    borderRadius: scale(10),
                    flexDirection: 'row',
                    borderColor: '#8f8a8a',
                    borderBottomWidth: 1,
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'absolute',
                      paddingLeft: scale(15),
                      top: 0,
                      bottom: 0,
                    }}>
                    <Image
                      source={item.uri}
                      style={{
                        width: scale(60),
                        height: scale(60),
                          borderWidth: 2,
                      borderColor: '#31D267',
                      borderRadius: scale(30),
                      }}
                    />
                  </View>
    
    
                  <View
                    style={{
                      position: 'absolute',
                      left: scale(100),
                      top: scale(15),
                    }}>
                    <Text style={{ fontSize: 15 }}>{item.name}</Text>
                  </View>
    
                  <View
                    style={{
                      position: 'absolute',
                      left: scale(100),
                      top: scale(35),
                    }}>
                    <Text style={{ fontSize: 15 }}>{item.status}</Text>
                  </View>
    
                  <View
                    style={{
                      position: 'absolute',
                      right: scale(20),
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.goToMap;
                        this.props.navigation.navigate('Home');
                      }}
                      activeOpacity={0.7}>
                      <View style={{top: scale(25) }}>{item.marker}</View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Home')}
                      activeOpacity={0.7}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          right: scale(105),
                          top: scale(10)
                        }}>
                        <Text
                          style={{
                            fontSize: 14,
                            color: 'black',
                          }}>
                          {item.distance}
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            color: 'black',
                            bottom: scale(2),
                          }}>
                          {item.miles}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
    
                  
                </View>
              </View>
            );
          } else {
            return (
              <View style={{ paddingLeft: scale(10), paddingRight: scale(10) }}>
                <View
                  style={{
                    backgroundColor: '#d1cfcf',
                    width: scale(330),
                    height: scale(85),
                    borderRadius: scale(10),
                    flexDirection: 'row',
                    borderColor: '#8f8a8a',
                    borderBottomWidth: 1,
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      paddingLeft: scale(15),
                    }}>
                    <Image
                      source={item.uri}
                      style={{
                        width: scale(60),
                        height: scale(60),
                        borderWidth: 2,
                        borderColor: '#6e6e6e',
                        borderRadius: scale(30),
                      }}
                    />
                  </View>
    
                  <View
                    style={{
                      position: 'absolute',
                      left: scale(100),
                      top: scale(15),
                    }}>
                    <Text style={{ fontSize: 15 }}>{item.name}</Text>
                  </View>
    
                  <View
                    style={{
                      position: 'absolute',
                      left: scale(100),
                      top: scale(35),
                    }}>
                    <Text style={{ fontSize: 15 }}>{item.status}</Text>
                  </View>
    
                  <View
                    style={{
                      position: 'absolute',
                      right: scale(20),
                      top: scale(15),
                    }}>
                    <View
                      style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontSize: 15 }}>{item.distance}{item.miles}</Text>
                      
                    </View>
                    <View style={{ bottom: scale(35), right: scale(35) }}>
                      {item.marker}
                    </View>
                  </View>
    
                </View>
              </View>
            );
          }
        });
      };

  render() {

    const { search } = this.state;

    return (
        <View style={{ backgroundColor: '#d1cfcf' }}>
        <View style={{ marginTop: scale(25) }}>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: scale(15),
              alignItems: 'center',
              height: scale(75),
            }}>
            {/* Search Bar */}
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <SearchBar
                placeholder="Search Friends..."
                onChangeText={this.updateSearch}
                value={search}
                round="true"
                containerStyle={styles.searchBarContainer}
                inputContainerStyle={{
                  height: scale(30),
                  width: scale(225),
                  backgroundColor: '#FFFFFF',
                  borderRadius: 20,
                }}
                clearIcon="null"
              />
            </View>
            {/* Search Bar */}

            <MaterialCommunityIcons
              name="account-multiple-plus"
              size={35}
              color="#6e6e6e"
            />
          </View>

          <ScrollView style={{ marginBottom: scale(150) }}>
            <this.renderFriendsList />
          </ScrollView>
        </View>
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
      left: scale(250),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cheersMe: {
      position: 'absolute',
      backgroundColor: '#292935',
      height: scale(30),
      width: scale(75),
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      right: scale(20),
      bottom: scale(5),
    },
  });
  