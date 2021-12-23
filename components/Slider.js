import * as React from 'react';
import  { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Animated, TouchableOpacity, SafeAreaView, Dimensions,  } from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';


const Slider = (props) => {
  
  const [active, setActive] = useState(false)
  let transformX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (active) {
      Animated.timing(transformX, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start()
    } else {
      Animated.timing(transformX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start()
    }
  }, [active]);

  const rotationX = transformX.interpolate({
    inputRange: [0, 1],
    outputRange: [2, Dimensions.get('screen').width / 4]
  })


  return (
    <SafeAreaView style={{
      alignItems: 'center',
    }}>
      <View style={{
        flexDirection: 'row',
        position: 'relative',
        height: 45,
        width: 240,
        borderRadius: 10,
        backgroundColor: 'white',
        marginHorizontal: 5
      }}>
        <Animated.View
          style={{
            position: 'absolute',
            height: 45 - 2*2,
            top: 2,
            bottom: 2,
            borderRadius: 10,
            width: Dimensions
            .get('screen').width / 3 - 3.5 ,
            transform: [
              {
                translateX: rotationX
              }
            ],
            backgroundColor: '#d1cfcf',
          }}
        >
        </Animated.View>
        <TouchableOpacity style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }} onPress={() => {setActive(false); props.renderList() }}>
          <Text>
            List
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }} onPress={() => {setActive(true); props.renderMap() }}>
          <Text>
            Map
        </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


export default Slider