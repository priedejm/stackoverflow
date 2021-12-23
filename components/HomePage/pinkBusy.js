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



export default class PinkBusy extends React.Component {

  render() {
    return (
        <View style={styles.pinkBusy}>
        <MaterialCommunityIcons
          name="fire"
          color="white"
          size={scale(15)}
        />
        <Text style={{fontSize: 11, fontWeight: 'bold', color: 'white'}}>
            BUSY
        </Text>
    </View>

    );
  }
}

const styles = StyleSheet.create({
    pinkBusy:{
        position:'absolute',
        top: scale(10),
        left: scale(260), 
        backgroundColor: '#FF1180',
        height: scale(20),
        width: scale(55),
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      },
});
