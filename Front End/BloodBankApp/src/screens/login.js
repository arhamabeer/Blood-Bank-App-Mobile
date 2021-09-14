import * as React from 'react';
import {ImageBackground, StyleSheet, Dimensions, View} from 'react-native';
const BgImg = require('../assets/bg-blood.jpg');

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

export default function App() {
  return (
    <NativeBaseProvider>
      <ImageBackground source={BgImg} style={styles.bgImg} resizeMode="cover">
        <Box safeArea flex={1} justifyContent="center" p={2} w="90%" mx="auto">
          <Heading size="lg" color="#c43d33">
            Welcome
          </Heading>
          <Heading color="#ff8f87" size="xs">
            Sign in to continue!
          </Heading>

          <VStack space={2} mt={5}>
            <FormControl>
              <FormControl.Label
                _text={{color: '#ff8f87', fontSize: 'sm', fontWeight: 600}}>
                Email ID
              </FormControl.Label>
              <Input color="wheat" />
            </FormControl>
            <FormControl mb={5}>
              <FormControl.Label
                _text={{color: '#ff8f87', fontSize: 'sm', fontWeight: 600}}>
                Password
              </FormControl.Label>
              <Input type="password" color="wheat" />
              <Link
                _text={{fontSize: 'xs', fontWeight: '700', color: 'cyan.500'}}
                alignSelf="flex-end"
                mt={1}>
                Forget Password?
              </Link>
            </FormControl>
            <VStack space={2}>
              <Button
                colorScheme="rgb(196, 56, 51)"
                border="3px solid"
                _text={{color: 'white'}}>
                Login
              </Button>

              <HStack justifyContent="center" alignItem="center"></HStack>
            </VStack>
            <HStack justifyContent="center">
              <Text fontSize="sm" color="#ff8f87" fontWeight={400}>
                I'm a new user.{' '}
              </Text>
              <Link
                _text={{color: 'cyan.500', bold: true, fontSize: 'sm'}}
                href="#">
                Sign Up
              </Link>
            </HStack>
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
