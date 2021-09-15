import React from 'react';
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from 'native-base';

export function WantTo() {
  let [language, setLanguage] = React.useState('');

  return (
    <NativeBaseProvider>
      <VStack alignItems="center" space={4}>
        <Select
          selectedValue={language}
          color="wheat"
          minWidth={400}
          accessibilityLabel="Want To ?"
          placeholder="Want To ?"
          onValueChange={itemValue => setLanguage(itemValue)}
          _selectedItem={{
            bg: 'red',
            endIcon: <CheckIcon size={4} />,
          }}>
          <Select.Item label="Donor" value="donor" />
          <Select.Item label="Seeker" value="seeker" />
        </Select>
      </VStack>
    </NativeBaseProvider>
  );
}
