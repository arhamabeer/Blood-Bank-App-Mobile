import React from 'react';
import {Input, Center, NativeBaseProvider} from 'native-base';
export const City = () => {
  return (
    <NativeBaseProvider>
      <Input
        minWidth={400}
        mx={3}
        placeholder="Enter City Name"
        color="wheat"
        _light={{
          placeholderTextColor: 'blueGray.400',
        }}
        _dark={{
          placeholderTextColor: 'blueGray.50',
        }}
      />
    </NativeBaseProvider>
  );
};
