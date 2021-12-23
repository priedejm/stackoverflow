import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';


export default class Profile extends React.Component {
  render() {
  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{paddingBottom: scale(40)}}>
       {/*  Profile Picture */}
        <View style={{ alignItems: 'center', top: scale(75) }}>
        <MaterialCommunityIcons
                name="heart"
                color="black"
                size={scale(35)}></MaterialCommunityIcons>
          {/* Eventually will call to database to get Users name, for now its a placeholder, same for user profile picture above^ */}
          <Text style={styles.userName}>User Name</Text>
        </View>

  


        <View style={{ flex: 3, justifyContent: 'center', paddingTop: scale(100)}}>
        
          {/* Beginning of Favorite Bar */}
          <View style={{paddingBottom: 10,paddingLeft: 10, paddingRight: 10,}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('FavoriteBar')}>
            <View style={styles.accountSettings}>
              <MaterialCommunityIcons
                name="heart"
                color="black"
                size={scale(35)}></MaterialCommunityIcons>
              <View style={{ flexGrow: scale(1), paddingLeft: scale(10), }}>
                <Text style={styles.accountPlaceholder}>
                  Favorite Bar
                </Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                color="black"
                size={scale(35)}></MaterialCommunityIcons>
            </View>
          </TouchableOpacity>
          </View>
          {/* End of Favorite Bar */}

          {/* Beginning of Account Settings */}
          <View style={{paddingBottom: 10,paddingLeft: 10, paddingRight: 10,}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileSettings')}>
            <View style={styles.accountSettings}>
              <MaterialCommunityIcons
                name="cog"
                color="black"
                size={scale(35)}></MaterialCommunityIcons>
              <View style={{ flexGrow: scale(1), paddingLeft: scale(10), }}>
                <Text style={styles.accountPlaceholder}>
                  Account Settings
                </Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                color="black"
                size={scale(35)}></MaterialCommunityIcons>
            </View>
          </TouchableOpacity>
          </View>
          {/* End of Account Settings */}

          {/* Beginning of Privacy Policy, probably a better icon for this*/}
          <View style={{paddingBottom: 10,paddingLeft: 10, paddingRight: 10,}}>
          <TouchableOpacity >
            <View style={styles.accountButton}>
              <MaterialCommunityIcons
                name="security"
                color="black"
                size={scale(35)}></MaterialCommunityIcons>
              <View style={{ flexGrow: scale(1), paddingLeft: scale(10) }}>
                <Text style={styles.accountPlaceholder}>
                  Privacy Policy
                </Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                color="black"
                size={scale(35)}></MaterialCommunityIcons>
            </View>
          </TouchableOpacity>
          </View>
          {/* End of Privacy Policy */}

          {/* Beginning of Terms/Conditions, probably a better icon for this */}
          <View style={{paddingBottom: 10,paddingLeft: 10, paddingRight: 10,}}>
          <TouchableOpacity >
            <View style={styles.accountButton}>
              <MaterialCommunityIcons
                name="file-document-outline"
                color="black"
                size={scale(35)}></MaterialCommunityIcons>
              <View style={{ flexGrow: scale(1), paddingLeft: scale(10) }}>
                <Text style={styles.accountPlaceholder}>
                  Terms and Conditions
                </Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                color="black"
                size={scale(35)}></MaterialCommunityIcons>
            </View>
          </TouchableOpacity>
          </View>
          {/* End of Terms/Conditions */}

          {/* Beginning of Click to sign out */}
          <View style={{paddingBottom: 10,paddingLeft: 10, paddingRight: 10,}}>
          <TouchableOpacity>
            <View style={styles.accountButton}>
              <MaterialCommunityIcons
                name="logout"
                color="black"
                size={scale(35)}></MaterialCommunityIcons>
              <View
                style={{
                  flexGrow: scale(1),
                  paddingLeft: scale(10),
                  paddingRight: scale(20),
                }}>
                <Text style={styles.accountPlaceholder}>
                    Sign out
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          </View>
          {/* End of Click to Sign out*/}
        </View>
      </View>
    </ScrollView>
  );
}
}

const styles = ScaledSheet.create({
  container: {
    flex: '1@s',
    alignItems: 'center',
  },
  accountPlaceholder: {
    color: 'black',
    fontSize: '20@s',
  },
  accountSettings: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: '65@s',
    backgroundColor: '#EBEEF0',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10
  },
  accountButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    height: '65@s',
    backgroundColor: '#EBEEF0',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10
  },
  userName: {
    color: 'black',
    fontSize: '32@s',
    fontWeight: 'bold',
    padding: '20@s',
  },
});