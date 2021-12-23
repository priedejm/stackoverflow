import * as React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Slider from './Slider';

import {
    scale,
    verticalScale,
    moderateScale,
    ScaledSheet,
  } from 'react-native-size-matters';

export default class Top3 extends React.Component{

    state = {
        search: '',
      };
    
      updateSearch = (search) => {
        this.setState({ search });
      };
   
    goToMap = () => {
        this.props.renderMap();
      }
    
      goToList = () => {
        this.props.renderList();
      }
   
    render(){

        const { search } = this.state;

        return (
      <View style={{zIndex: 10}}>
               
       <View style={{flexDirection: 'row', marginTop: 40, justifyContent: 'center', alignItems:'center'}}> 
          <View style={{backgroundColor: '#ffffff', width: 35, height: 35, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../assets/transparentPinkWhite.png')}
                style={{width: 40, height: 40}}
              />
          </View>

          {/* Search Bar */}
          <View style={{ justifyContent: 'center', alignItems: 'center', }}>
          <SearchBar
            placeholder="Search..."
            onChangeText={this.updateSearch}
            value={search}
            round="true"
            containerStyle={styles.searchBarContainer}
            inputContainerStyle={{
              height: scale(38),
              width: scale(200),
              backgroundColor: '#FFFFFF',
              borderRadius: 10
              
            }}
            searchIcon={() => (
              <MaterialCommunityIcons
                name="glass-mug-variant"
                size={25}
                color="black"
              />
            )}
            clearIcon="null"
          />
          </View>

          <TouchableOpacity>
          <View style={{backgroundColor: '#ffffff', width: 35, height: 35, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="filter-outline"
              size={30}
              color="black"
            />
          </View>
          </TouchableOpacity>
        </View>

        <Slider
        renderMap={this.goToMap.bind(this)}
        renderList={this.goToList.bind(this)}/>

        
      
       
      </View>
        );
    }

}

const styles = ScaledSheet.create({
    searchBarContainer: {
      backgroundColor: 'transparent',
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
      top: scale(5)
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
      top: scale(5)
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
      paddingBottom: '3@s'
    },
    barAddress:{
      color: '#6e6e6e',
      fontSize: '15@s',
      right: '3@s',
      paddingBottom: '3@s'
      
    },
    barName: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: '15@s',
      paddingTop: '10@s'
      
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
    pinkBusy:{
      position:'absolute',
      top: scale(10),
      left: scale(250), 
      backgroundColor: '#FF1180',
      height: scale(20),
      width: scale(55),
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    barDistance:{
      position:'absolute',
      top: scale(35),
      left: scale(250), 
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center'
    }
  });
   
    


