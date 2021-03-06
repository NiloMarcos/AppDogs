import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../screens/Dashboard';
import Details from '../screens/Details';

const Stack = createNativeStackNavigator();

export default function AppRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
      <Stack.Screen name="Details" component={Details} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};