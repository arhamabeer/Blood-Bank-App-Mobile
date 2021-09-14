import React from 'react';
import {Input, Stack, FormControl} from 'native-base';
export const Register = () => {
  return (
    <FormControl>
      <Stack space={5}>
        <Stack>
          <FormControl.Label>Username</FormControl.Label>
          <Input variant="underlined" p={2} placeholder="Username" />
        </Stack>
        <Stack>
          <FormControl.Label>Password</FormControl.Label>
          <Input variant="underlined" p={2} placeholder="Password" />
        </Stack>
      </Stack>
    </FormControl>
  );
};
