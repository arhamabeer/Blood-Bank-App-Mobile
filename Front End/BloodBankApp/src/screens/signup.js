import * as React from 'react';
const BgImg = require('../assets/bg-blood.jpg');
import {ImageBackground, StyleSheet, Dimensions, View} from 'react-native';

import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
} from 'native-base';

export default function SignUp() {
  return (
    <NativeBaseProvider>
      <ImageBackground source={BgImg} style={styles.bgImg} resizeMode="cover">
        <Box safeArea flex={1} justifyContent="center" p={2} w="90%" mx="auto">
          <Heading size="lg" color="#c43d33">
            Welcome
          </Heading>
          <Heading color="#ff8f87" size="xs">
            Sign up to continue!
          </Heading>

          <VStack space={2} mt={5}>
            <FormControl>
              <FormControl.Label
                _text={{color: '#ff8f87', fontSize: 'sm', fontWeight: 600}}>
                Email
              </FormControl.Label>
              <Input color="wheat" />
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{color: '#ff8f87', fontSize: 'sm', fontWeight: 600}}>
                Password
              </FormControl.Label>
              <Input type="password" color="wheat" />
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{color: '#ff8f87', fontSize: 'sm', fontWeight: 600}}>
                Confirm Password
              </FormControl.Label>
              <Input type="password" color="wheat" />
            </FormControl>
            <VStack space={2} mt={5}>
              <Button colorScheme="rgb(196, 56, 51)" border='3px solid red' _text={{color: 'wheat'}}>
                SignUp
              </Button>
            </VStack>
          </VStack>
        </Box>
      </ImageBackground>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  bgImg: {
    width: Dimensions.get('screen').width,
    height: '100%',
  },
});
