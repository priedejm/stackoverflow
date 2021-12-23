import * as React from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import ListHome from './ListHome'
import MapHome from './MapHome';
import Top3 from '../components/Top3Components'

import Slider from '../components/Slider'
import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';



export default class Home extends React.Component {
 
  constructor(props) {
    super(props)
    this.state ={
      visible: true,
      whichComponentToShow: 'Screen1'
    };
}

goToMap = () => {
  this.setState({whichComponentToShow: 'Screen2'})
}
goToList = () => {
  this.setState({whichComponentToShow: 'Screen1'})
}

  render(){

   
     const { whichComponentToShow } = this.state;

    return(
      <View style={{backgroundColor: '#d1cfcf' ,flex: 1}}>
      {whichComponentToShow === 'Screen1' && <ListHome />}
      {whichComponentToShow === 'Screen2' && <MapHome />}
      <View style={{position: 'absolute', top: 0, left: 0, right: 0}}>
        <Top3
          renderMap={this.goToMap}
          renderList={this.goToList}
        />
      </View>
    </View>
      );
    }
 }
 

 const styles = ScaledSheet.create({
  starRating: {
    color: '#00FE0A',
    fontSize: '15@s',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textShadowColor: '#000',
    paddingLeft: '15@s'
  },

  barCategory: {
    color: 'black',
    fontSize: '15@s',
    paddingLeft: '15@s'
  },
  barName: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: '20@s',
    paddingLeft: '15@s'
  },
  dot: {
    color: 'black',
    fontSize: '5@s',
    paddingLeft: '5@s',
    paddingRight: '5@s',

  },
  money: {
    color: 'black',
    fontSize: '15@s',
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
    color: '#00FE0A',
    fontSize: '10@s',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    textShadowColor: '#000',
  },

  barCategoryHorizontal: {
    color: 'white',
    fontSize: '12@s',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    textShadowColor: '#000',
  },
  dotHorizontal: {
    color: 'white',
    fontSize: '5@s',
    paddingLeft: '5@s',
    paddingRight: '5@s',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    textShadowColor: '#000',
  },
  moneyHorizontal: {
    color: 'white',
    fontSize: '15@s',
  },
});
 
 
 


