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

export default class GreenHorizontalView extends React.Component {
  static defaultProps = {
    barCategory: '',
    barDistance: '',
    costOfBar: ''
  };

  render() {
    return (
      <View>
        {/* View that hides shadow and holds first line of data */}
        <View style={styles.shadowView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              left: scale(5),
              top: scale(9),
            }}>
            <Text style={styles.barCategoryHorizontal}>{this.props.barCategory}</Text>
            <Text style={styles.dotHorizontal}>⬤</Text>
            <Text style={styles.moneyHorizontal}>{this.props.costOfBar}</Text>
          </View>

           {/* time bubble */}
           <View style={{justifyContent: 'center', alignItems:'center',bottom:scale(5)}}>
            <View
              style={{
                width: scale(30),
                height: scale(30),
                position: 'absolute',
                zIndex: 3,
                borderWidth: 1,
                borderColor: '#31D267',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#31D267',
              }}>
              <Text style={{fontSize: 12, textAlign: 'center', lineHeight: 12, color: 'white'}}>
                {'<5 min'}
              </Text>
              </View>
              
              
              </View>
            {/* Time bubble */}
        </View>

        
       
       
        {/* Background that holds all the data except for first line */}
        <View style={styles.dataView}>
          <View style={{marginTop: scale(28), marginLeft: scale(5)}}>
            <Text style={styles.barCategoryHorizontal}>{this.props.barDistance}</Text>
          </View>
        </View>


      </View>
    );
  }
}

const styles = ScaledSheet.create({
  starRatingHorizontal: {
    color: '#FFC107',
    fontSize: '10@s',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    textShadowColor: '#000',
  },

  barCategoryHorizontal: {
    color: '#6e6e6e',
    fontSize: '15@s',
  },
  dotHorizontal: {
    color: '#6e6e6e',
    fontSize: '5@s',
    paddingRight: '5@s',
    paddingLeft: '5@s',
  },
  moneyHorizontal: {
    color: '#6e6e6e',
    fontSize: '15@s',
  },
  shadowView: {
    backgroundColor: 'white',
    width: scale(147),
    height: scale(7),
    bottom: scale(53),
    position: 'absolute',
    zIndex: 3,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#31D267',
    alignItems: 'center',
  },
  dataView: {
    backgroundColor: 'white',
    width: scale(147),
    height: scale(60),
    zIndex: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    borderWidth: 1,
    borderColor: '#31D267',
  },
});
