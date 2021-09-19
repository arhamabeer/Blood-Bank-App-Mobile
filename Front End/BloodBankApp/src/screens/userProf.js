import React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import UserProfInfo from '../components/userProfInfo';
const BgImg = require('../assets/bg-blood.jpg');

export default function UserProfile() {
  return (
    <ImageBackground source={BgImg} style={styles.bgimg}>
      <View style={styles.container}>
        <UserProfInfo />
        <UserProfInfo />
        <UserProfInfo />
        <UserProfInfo />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'wheat',
  },
  bgimg: {
    width: '100%',
    height: '100%',
  },
});
