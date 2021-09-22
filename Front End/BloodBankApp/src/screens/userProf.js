import React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import UserProfInfo from '../components/userProfInfo';
const BgImg = require('../assets/bg-blood.jpg');

export default function UserProfile({route}) {
  // console.log('item=>', route.params.item)
  const {item} = route.params;
  return (
    <ImageBackground source={BgImg} style={styles.bgimg}>
      <View style={styles.container}>
        <UserProfInfo name="BLOOD GROUP" value={item.bloodGroup} />
        <UserProfInfo name="GENDER" value={item.gender} />
        <UserProfInfo name="CITY" value={item.city} />
        <UserProfInfo name="ADDRESS" value={item.address} />
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
