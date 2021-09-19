import * as React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import CardSeeker from '../components/cardSeeker';

const BgImg = require('../assets/bg-blood.jpg');

export default function Seeker() {
  return (
    <ImageBackground source={BgImg} style={styles.bgimg}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <CardSeeker />
            <CardSeeker />
            <CardSeeker />
            <CardSeeker />
            <CardSeeker />
          </View>
        </ScrollView>
      </SafeAreaView>
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
