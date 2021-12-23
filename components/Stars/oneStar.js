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



export default class OneStar extends React.Component {

  render() {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', }}>
             <Text style={{color:'#FFC107', fontSize: 16}}>
                    ★
                </Text>
                <Text style={{color:'#6e6e6e',  fontSize: 16}}>
                    ★★★★ 4 Reviews
                </Text>
        </View>
              
    );
  }
}

const styles = StyleSheet.create({
    star:{
       
      },
});
