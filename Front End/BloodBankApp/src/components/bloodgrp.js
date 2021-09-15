import React from 'react';
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from 'native-base';

export function BloodGroup() {
  let [bldgrp, setBldgrp] = React.useState('');

  return (
    <NativeBaseProvider>
      <VStack alignItems="center" space={4}>
        <Select
          color="wheat"
          selectedValue={bldgrp}
          minWidth={400}
          accessibilityLabel="Select Blood Group"
          placeholder="Select Blood Group"
          onValueChange={itemValue => setBldgrp(itemValue)}
          _selectedItem={{
            bg: 'red',
            endIcon: <CheckIcon size={4} />,
          }}>
          <Select.Item label="A+" value="A+" />
          <Select.Item label="A-" value="A-" />
          <Select.Item label="B+" value="B+" />
          <Select.Item label="B-" value="B-" />
          <Select.Item label="O+" value="O+" />
          <Select.Item label="O-" value="O-" />
          <Select.Item label="AB+" value="AB+" />
          <Select.Item label="AB-" value="AB-" />
        </Select>
      </VStack>
    </NativeBaseProvider>
  );
}
