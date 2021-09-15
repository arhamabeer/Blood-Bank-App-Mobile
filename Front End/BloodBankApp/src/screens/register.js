import * as React from 'react';
import {ImageBackground, StyleSheet, Dimensions, View} from 'react-native';
import {WantTo} from '../components/wantToSelect';
import {InputName} from '../components/inputName';
import {BloodGroup} from '../components/bloodgrp';
import {City} from '../components/city';
import {Gender} from '../components/gender';
import {Age} from '../components/age';
import {Heading, NativeBaseProvider} from 'native-base';

const BgImg = require('../assets/bg-blood.jpg');

export default function Register() {
  return (
    <NativeBaseProvider>
      <ImageBackground source={BgImg} style={styles.bgimg} resizeMode="cover">
        <View style={styles.container}>
          <Heading marginBottom="32px" size="xl" color="wheat">
            Register Yourself
          </Heading>
          <WantTo />
          <InputName />
          <BloodGroup />
          <City />
          <Gender />
          <Age />
        </View>
      </ImageBackground>
    </NativeBaseProvider>
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
