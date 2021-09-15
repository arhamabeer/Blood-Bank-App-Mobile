import * as React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  View,
  Text,
} from 'react-native';
import CardHome from '../components/cardHome';

const BgImg = require('../assets/bg-blood.jpg');

export default function Home() {
  return (
    <ImageBackground source={BgImg} style={styles.bgimg}>
      <View style={styles.container}>
        <CardHome />
        <CardHome />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'wheat',
  },
  bgimg: {
    width: '100%',
    height: '100%',
  },
});
