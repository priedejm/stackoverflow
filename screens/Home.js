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
import BottomSheet from 'reanimated-bottom-sheet';



export default class Screen extends React.Component {

  render() {
    return (
        <View style={styles.greenOpen}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            This crashes when you run it locally
        </Text>
    </View>

    );
  }
}

const styles = StyleSheet.create({
    greenOpen:{
        backgroundColor: '#31D267',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
      },
});
