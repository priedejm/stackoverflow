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

import {
    scale,
    verticalScale,
    moderateScale,
    ScaledSheet,
  } from 'react-native-size-matters';



export default class GreenWait extends React.Component {

  render() {
    return (
        <View style={styles.GreenWait}>
        <Text style={{fontSize: 11, fontWeight: 'bold', color: 'white', textAlign: 'center', lineHeight: 10,}}>
            {'<5 min'}
        </Text>
    </View>

    );
  }
}

const styles = StyleSheet.create({
    GreenWait:{
        position:'absolute',
        top: scale(5),
        right: scale(5), 
        backgroundColor: '#31D267',
        height: scale(25),
        width: scale(25),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      },
});
