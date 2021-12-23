import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { SearchBar } from 'react-native-elements';
import Slider from '../components/Slider';
import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';

export default class MapHome extends React.Component {
  render() {
    return (
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 36.215100539405334,
          longitude: -81.67696727327234,
          latitudeDelta: 0.0025,
          longitudeDelta: 0.0025,
        }}>
        <Marker
          coordinate={{
            latitude: 36.215100539405334,
            longitude: -81.67696727327234,
          }}
          title="Brown St"
          description="this is your home">
          <Callout tooltop>
            <View>
              <View style={styles.bubble}>
                <Text styles={{ fontSize: 16, marginBottom: 5 }}>Brown St</Text>
                <Text styles={{}}>Where you live</Text>
              </View>
            </View>
          </Callout>
        </Marker>
      </MapView>
    );
  }
}

const styles = ScaledSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    bottom: scale(60),
  },
  bubble: {
    flexDirection: 'row',
    padding: 15,
  },
});
