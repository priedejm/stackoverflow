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



export default class GreenOpen extends React.Component {

  render() {
    return (
        <View style={styles.greenOpen}>
        <Text style={{fontSize: 11, fontWeight: 'bold', color: 'white'}}>
            OPEN
        </Text>
    </View>

    );
  }
}

const styles = StyleSheet.create({
    greenOpen:{
        position:'absolute',
        top: scale(10),
        left: scale(250), 
        backgroundColor: '#31D267',
        height: scale(20),
        width: scale(55),
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      },
});
