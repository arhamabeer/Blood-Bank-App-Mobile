import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
const BgImg = require('./src/assets/bg-blood.jpg');

function App() {
  return (
    <View>
      <ImageBackground source={BgImg} style={styles.bgImg} resizeMode="cover">
        <Text>Hello Peter...</Text>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({npm install @react-navigation/native-stack
  bgImg: {
    width: Dimensions.get('screen').width,
    height: '100%',
  },
});

export default App;
