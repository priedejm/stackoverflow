import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  useWindowDimensions,
  Dimensions
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';

import ProgressCircle from 'react-native-progress-circle'
import CarouselGallary from './Carousel';

//taskbar color=#e1e1e1
//background color =#d1cfcf

const screenResolutions = () => {
  var SCREEN_HEIGHT = useWindowDimensions().width;
  var SCREEN_WIDTH = useWindowDimensions().height;
};

const images = [
  { id: '1', uri: require('../assets/placeholder1.jpg')},
  { id: '2', uri: require('../assets/placeholder2.jpg')},
  { id: '3', uri: require('../assets/placeholder3.jpg')},
  { id: '4', uri: require('../assets/placeholder4.jpg')},
  { id: '5', uri: require('../assets/placeholder5.jpg')},
];

const { width } = Dimensions.get('window');
const height = width * 0.6;

export default class VenueDetailsScreen extends React.Component {

  state = {
    active: 0,
  };

  //Image gallary
  change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  };

  render() {
    return (
      
      <ScrollView style={{flex: 1,backgroundColor: '#d1cfcf', padding: 20}}>
       
        {/*top location Card*/}
        <View style={{height: 225, width: '100%', backgroundColor: "#FFFFFF" , marginTop: 60,  borderRadius: 10}}>
            
            <Text style={{paddingLeft: 15, paddingTop: 10, fontSize: 20, fontWeight: 'bold'}}>
              Tequila Bars & Tacos
            </Text>
            
                {/*Busy*/}
            <View style={{backgroundColor: '#FF1180', height: 25, width: 65,  borderRadius: 20, marginTop: 5, marginLeft: 15}}>
                <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}> 
                  <MaterialCommunityIcons
                    name="fire"
                    color="white"
                    size={scale(15)}>
                 </MaterialCommunityIcons>
                  <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12,}}>
                    BUSY
                  </Text>
                </View>
            </View>

              {/* Distance */}
            <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 15, paddingTop: 10}}>
              <MaterialCommunityIcons
                  name="map-marker"
                  color="#6e6e6e"
                  size={scale(15)}>
              </MaterialCommunityIcons>
              <Text style={{color:'#6e6e6e'}}>
                  .8 Miles
              </Text>
            </View>

            <Text style={{color:'#6e6e6e', paddingLeft: 15, paddingTop: 15}}>
                189 Brown St, Boone, NC {"\n"}
                28607 United States
            </Text>

              {/* Stars*/}
            <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 15, paddingTop: 15}}>
                <MaterialCommunityIcons
                    name="star"
                    color="#FFC107"
                    size={scale(15)}>
                </MaterialCommunityIcons>
                <MaterialCommunityIcons
                    name="star"
                    color="#FFC107"
                    size={scale(15)}>
                </MaterialCommunityIcons>
                <MaterialCommunityIcons
                    name="star"
                    color="#FFC107"
                    size={scale(15)}>
                </MaterialCommunityIcons>
                <MaterialCommunityIcons
                    name="star"
                    color="#FFC107"
                    size={scale(15)}>
                </MaterialCommunityIcons>
                <MaterialCommunityIcons
                    name="star"
                    color="#6e6e6e"
                    size={scale(15)}>
                </MaterialCommunityIcons>
                <Text style={{color:'#6e6e6e', paddingLeft: 5,}}>
                    4 Reviews
                </Text>

                <View style={{position: 'absolute', }}>
               
                </View>
            </View>

            {/* Progress circle*/}
            <View style={{position: 'absolute', right: 15, top: 20}}>
              <ProgressCircle
                  percent={70}
                  radius={80}
                  borderWidth={12}
                  color="#79D2DE"
                  shadowColor="#999"
                  bgColor="#fff"
                >
                  <View style={{justifyContent:'center', alignItems:'center'}}>
                     <Text style={{ fontSize: 40, color: '#FF1180', fontWeight: 'bold' }}>70%</Text>
                     <Text style={{ fontSize: 25, color: '#FF1180', fontWeight: 'bold'  }}>FULL</Text>
                  </View>
              </ProgressCircle>
              </View>

            <View style={{flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 15, paddingTop: 10}}>
           {/* Pink bubble*/}
            <View style={{backgroundColor: '#FF1180', height: 20, width: 55,  borderRadius: 20, marginTop: 5, }}>
                <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}> 
                  <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15,}}>
                    Bar
                  </Text>
                </View>
            </View>
            {/* Pink bubble*/}
            <View style={{backgroundColor: '#FF1180', height: 20, width: 55,  borderRadius: 20, marginTop: 5, marginLeft: 5, marginRight: 5 }}>
                <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}> 
                  <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15,}}>
                    Line
                  </Text>
                </View>
            </View>
            {/* Pink bubble*/}
            <View style={{backgroundColor: '#FF1180', height: 20, width: 55,  borderRadius: 20, marginTop: 5, }}>
                <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}> 
                  <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15,}}>
                    DJ
                  </Text>
                </View>
            </View>

            </View>
         
          

        </View>
        {/*end of top location Card*/}
        
        {/*Middle image gallary*/}
        <View style={{ height: 250, width:'100%', backgroundColor: "#FFFFFF", marginBottom: 20, marginTop:30,  borderRadius: 10,}}>

          <View style={{height: 200, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 15, left: 0, right: 0, bottom: 0}}>
             <CarouselGallary/>
          </View>

        </View>
        {/* Ending of image gallary */}

        {/* Third review card */}
        <View style={{ height: 210, width: '100%', backgroundColor: "#FFFFFF", marginBottom: 60,  borderRadius: 10 }}>
              
              <View style={{alignItems:'center', marginTop: 10, }}>
                <Text style={{color:'black', fontSize: 15, fontWeight: 'bold'}}>
                  Latest Reviews
                </Text>
                
              </View>

              <View style={{flexDirection:'row'}}>
                    <View style={{marginTop: 10, marginLeft: 35 }}>
                      <Text style={{color:'black', fontSize: 15, fontWeight: 'bold'}}>
                        Justin Priede
                      </Text>
                      <Text style={{color:'#6e6e6e', fontSize: 15, paddingTop: 5, }}>
                        25 August 2021
                      </Text>
                    </View>

                    {/* Stars */}
                   <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 60, paddingTop: 5, paddingBottom: 20}}>
                      <MaterialCommunityIcons
                          name="star"
                          color="#FFC107"
                          size={scale(20)}>
                      </MaterialCommunityIcons>
                      <MaterialCommunityIcons
                          name="star"
                          color="#FFC107"
                          size={scale(20)}>
                      </MaterialCommunityIcons>
                      <MaterialCommunityIcons
                          name="star"
                          color="#FFC107"
                          size={scale(20)}>
                      </MaterialCommunityIcons>
                      <MaterialCommunityIcons
                          name="star"
                          color="#FFC107"
                          size={scale(20)}>
                      </MaterialCommunityIcons>
                      <MaterialCommunityIcons
                          name="star"
                          color="#6e6e6e"
                          size={scale(20)}>
                      </MaterialCommunityIcons>
                   </View>
              </View>

              {/* Review */}
              <View style={{ justifyContent: 'center', alignItems:'center', paddingTop: 10}}>
                  
                  <View style={styles.reviewBox}>
                      <View style={{marginTop: 10, alignItems: 'center'}}>
                      <Text style={{fontSize: 14, color: 'black', textAlign: 'center'}}>
                        This is where a review goes and definitely needs a rework
                      </Text>
                      </View>
                  </View>
              </View>

               {/* Next Review*/}
               <View style={{backgroundColor: '#FF1180', height: 20, width: 85,  borderRadius: 20, marginTop: 15, marginLeft: 35, marginRight: 5 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}> 
                  <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12,}}>
                    Next Review
                  </Text>
                </View>
              </View>

              {/* Live Chat*/}
              <View style={{backgroundColor: '#FF1180', height: 40, width: 125,  borderRadius: 10, position: 'absolute', right: 35, bottom: 15 }}>
                <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}> 
                  <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12, paddingRight: 10}}>
                    Live Chat
                  </Text>
                  <MaterialCommunityIcons
                      name="chat-processing-outline"
                      color="#FFFFFF"
                      size={scale(20)}>
                  </MaterialCommunityIcons>
                </View>
              </View>

        </View>
         {/* Ending of review card */}


       
  
          </ScrollView>
    );
  };
}
  
  const styles = StyleSheet.create({
    carousel: {
      color: 'white',
      fontSize: width / 35,
      opacity: 0.5,
    },
    activeCorousel: {
      color: 'white',
      fontSize: width / 35,
    },
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#d1cfcf" 
    },
    reviewBox: {
      width: 300, 
      height: 50, 
      backgroundColor: '#fff',
      borderTopWidth: 0,
      borderBottomWidth:.5, 
      borderRightWidth: .5, 
      borderLeftWidth: .5, 
      borderColor: '#6e6e6e', 
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      shadowColor: "#000000",
      shadowOpacity: 1,
      shadowRadius: 1,
      shadowOffset: {
        height: 1,
        width: 1
      }
    },
    
  });
  
