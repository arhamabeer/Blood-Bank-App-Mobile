import React from 'react';
import {VStack, Box, Divider, NativeBaseProvider} from 'native-base';
import {Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {colorStyle} from 'styled-system';

export default function CardSeeker() {
  return (
    <NativeBaseProvider>
      <Box
        bgColor="rgba(247, 91, 84,0.28)"
        borderBottomColor="red.700"
        borderTopColor="red.700"
        w={96}
        px={12}
        mb={4}
        p={6}
        border={3}
        borderTopWidth={5}
        borderBottomWidth={5}
        borderRadius="md">
        <VStack space={5}>
          <Box px={12} pt={0}>
            <Text
              style={{
                fontSize: 28,
                color: 'wheat',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Arham Abeer
            </Text>
          </Box>
          <Box px={12} pt={0}>
            <Text
              style={{
                fontSize: 24,
                color: 'wheat',
                textAlign: 'center',
                paddingBottom: 12,
              }}>
              Blood Seeker
            </Text>
            <Text style={{fontSize: 14, color: 'wheat', textAlign: 'center'}}>
              click for more info
            </Text>
          </Box>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
