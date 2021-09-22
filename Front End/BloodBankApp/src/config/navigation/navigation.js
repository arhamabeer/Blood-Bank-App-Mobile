import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/login';
import SignUp from '../../screens/signup';
import Register from '../../screens/register';
import Home from '../../screens/home';
import Donor from '../../screens/donor';
import Seeker from '../../screens/seeker';
import UserProfile from '../../screens/userProf';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Donor" component={Donor} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="Seeker" component={Seeker} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
