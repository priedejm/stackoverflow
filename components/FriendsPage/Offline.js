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



export default class Offline extends React.Component {

  render() {
    return (
        <View style={styles.greenOpen}>
        <Text style={{fontSize: 11, fontWeight: 'bold', color: 'white'}}>
            Online
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
        backgroundColor: 'grey',
        height: scale(20),
        width: scale(55),
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      },
});
