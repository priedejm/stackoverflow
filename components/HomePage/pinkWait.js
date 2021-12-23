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
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
    scale,
    verticalScale,
    moderateScale,
    ScaledSheet,
  } from 'react-native-size-matters';



export default class PinkWait extends React.Component {

  render() {
    return (
        <View style={styles.PinkWait}>
         <MaterialCommunityIcons
          name="fire"
          color="white"
          size={scale(15)}
        />
        <Text style={{fontSize: 11, fontWeight: 'bold', color: 'white', textAlign: 'center', lineHeight: 10, right: scale(3)}}>
            {'<10'} {'\n'} min
        </Text>
    </View>

    );
  }
}

const styles = StyleSheet.create({
    PinkWait:{
        position:'absolute',
        top: scale(5),
        right: scale(5), 
        backgroundColor: '#FF1180',
        height: scale(25),
        width: scale(40),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      },
});
