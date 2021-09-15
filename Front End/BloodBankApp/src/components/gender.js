import React from 'react';
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from 'native-base';

export function Gender() {
  let [gender, setGender] = React.useState('');

  return (
    <NativeBaseProvider>
      <VStack alignItems="center" space={4}>
        <Select
          selectedValue={gender}
          minWidth={400}
          accessibilityLabel="Select Gender"
          color="wheat"
          placeholder="Select Gender"
          onValueChange={itemValue => setGender(itemValue)}
          _selectedItem={{
            bg: 'red',
            endIcon: <CheckIcon size={4} />,
          }}>
          <Select.Item label="Male" value="Male" />
          <Select.Item label="Female" value="Female" />
        </Select>
      </VStack>
    </NativeBaseProvider>
  );
}
