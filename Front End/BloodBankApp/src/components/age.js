import React from 'react';
import {Input, Center, NativeBaseProvider} from 'native-base';
export const Age = () => {
  return (
    <NativeBaseProvider>
      <Input
        minWidth={400}
        color="wheat"
        mx={3}
        placeholder="Enter Age"
        keyboardType="number-pad"
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

// import React from 'react';
// import {
//   NumberInput,
//   NumberInputField,
//   NumberInputStepper,
//   NumberIncrementStepper,
//   NumberDecrementStepper,
//   NativeBaseProvider,
//   Center,
// } from 'native-base';
// export function Age() {
//   return (
//     <NativeBaseProvider>
//       <NumberInput
//         padding={5}
//         placeholder="Enter Age"
//         min={5}
//         max={100}
//         step={1}>
//         <NumberInputField />
//         <NumberInputStepper>
//           <NumberIncrementStepper />
//           <NumberDecrementStepper />
//         </NumberInputStepper>
//       </NumberInput>
//     </NativeBaseProvider>
//   );
// }
