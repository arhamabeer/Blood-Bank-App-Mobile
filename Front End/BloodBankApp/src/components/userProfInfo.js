import React from 'react';
import {VStack, Box, Divider, NativeBaseProvider} from 'native-base';
import {Text} from 'react-native';

export default function UserProfInfo() {
  return (
    <NativeBaseProvider>
      <Box
        bgColor="rgba(247, 91, 84,0.28)"
        borderBottomColor="green.700"
        borderTopColor="green.700"
        w={96}
        // px={0}
        mt={4}
        // p={6}
        border={3}
        borderTopWidth={5}
        borderBottomWidth={5}
        borderRadius="lg">
        <VStack space={5}>
          <Box px={12} pt={8} pb={8}>
            <Text style={{fontSize: 22, color: 'wheat', textAlign: 'center'}}>
              BLOOD GROUP
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: 'wheat',
                textAlign: 'center',
              }}>
              TESTING
            </Text>
          </Box>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
