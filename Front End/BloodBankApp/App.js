import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Navigator from './src/config/navigation/navigation';
const BgImg = require('./src/assets/bg-blood.jpg');
import Login from './src/screens/login';

function App() {
  return (
    <View>
      <ImageBackground source={BgImg} style={styles.bgImg} resizeMode="cover">
        <Navigator />
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  bgImg: {
    width: Dimensions.get('screen').width,
    height: '100%',
  },
});

export default App;
