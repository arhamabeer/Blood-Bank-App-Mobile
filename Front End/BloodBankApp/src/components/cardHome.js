import React from 'react';
import {VStack, Box, Divider, NativeBaseProvider} from 'native-base';
import {Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {colorStyle} from 'styled-system';

export default function CardHome() {
  return (
    <NativeBaseProvider>
      <Box
        bgColor="rgba(247, 91, 84,0.28)"
        borderBottomColor="red.700"
        borderTopColor="red.700"
        w={96}
        px={48}
        p={36}
        border={3}
        borderTopWidth={5}
        borderBottomWidth={5}
        borderRadius="md">
        <VStack space={5}>
          <Box px={24} pt={4}>
            <Text style={{fontSize: 18, color: 'wheat'}}>Total Donor</Text>
          </Box>
          <Box px={32}>
            <Text style={{fontSize: 26, fontWeight: 'bold', color: 'wheat'}}>
              15
            </Text>
          </Box>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
