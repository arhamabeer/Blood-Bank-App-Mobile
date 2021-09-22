import React from 'react';
import {VStack, Box, NativeBaseProvider} from 'native-base';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function CardHome({navigation, name, color, check}) {
  let don = 0;
  let want = 0;
  if (!check) {
  } else {
    // console.log("check", check);
    var total = check.map(v => {
      // console.log('check1, ',v)
      // return v
      return v.wanted.startsWith('Donor') === true ? (don += 1) : (want += 1);
    });
    // console.log('total=> ', total)
  }
  const changeLocation = clr => {
    // navigation.navigate('Donor');
    if (clr === 'red') {
      navigation.navigate('Seeker');
    } else {
      navigation.navigate('Donor');
    }
  };
  return (
    <NativeBaseProvider>
      <Box
        bgColor="rgba(247, 91, 84,0.28)"
        borderBottomColor={color}
        borderTopColor={color}
        w={96}
        px={48}
        p={36}
        border={3}
        borderTopWidth={8}
        borderBottomWidth={8}
        borderRadius={25}>
        <VStack space={5}>
          <Box px={12} pt={0} px={16}>
            <Text style={{fontSize: 22, color: 'wheat'}}>Total {name}</Text>
          </Box>
          <Box px={32}>
            <Text style={{fontSize: 31, fontWeight: 'bold', color: 'wheat'}}>
              {color === 'red' ? want : don}
            </Text>
          </Box>
          <Box px={10}>
            <TouchableOpacity
              onPress={() => changeLocation(color)}
              // onPress={() => navigation.navigate('Donor')}
              style={styles.click}>
              <Text style={{fontSize: 16, color: 'wheat'}}>
                Click to see all {name}
              </Text>
            </TouchableOpacity>
          </Box>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  click: {
    borderWidth: 2,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    borderColor: 'grey',
    borderRadius: 25,
  },
});
