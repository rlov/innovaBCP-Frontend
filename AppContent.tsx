import React from 'react';
import { Text, View } from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_STACKS } from './src/constants/navigation';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

const MainStack = createStackNavigator();

export default function AppContent(): JSX.Element {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <MainStack.Screen
        name={NAVIGATION_STACKS.BOTTOM_TAB_NAVIGATOR}
        component={BottomTabNavigator}
      />
    </MainStack.Navigator>
  );
}
