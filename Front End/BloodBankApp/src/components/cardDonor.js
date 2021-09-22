import React from 'react';
import {VStack, Box, Divider, NativeBaseProvider} from 'native-base';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function CardDonor({purpose, clr, item, navigation}) {
  const changeLocation = () => {
    navigation.navigate('UserProfile', {item: item, clr: clr});
  };
  return (
    <NativeBaseProvider>
      <Box
        bgColor="rgba(247, 91, 84,0.28)"
        borderBottomColor={clr}
        borderTopColor={clr}
        w={96}
        px={12}
        mb={4}
        p={6}
        border={3}
        borderTopWidth={7}
        borderBottomWidth={7}
        borderRadius={25}>
        <VStack space={5}>
          <Box px={12} pt={0}>
            <Text
              style={{
                fontSize: 28,
                color: 'wheat',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {item.fname}
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
              Blood {purpose}
            </Text>
            <Box px={8}>
              <TouchableOpacity
                onPress={() => changeLocation()}
                style={styles.click}>
                <Text style={{fontSize: 16, color: 'wheat'}}>
                  click for more info
                </Text>
              </TouchableOpacity>
            </Box>
          </Box>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  click: {
    borderWidth: 1,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    borderColor: 'grey',
    borderRadius: 25,
  },
});
