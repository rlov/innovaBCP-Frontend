/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NAVIGATION_STACKS } from '../constants/navigation';
import CustomBottomTabs from '../components/navigation/CustomBottomTabs';
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';

const MyBottomTabNavigator = createBottomTabNavigator();

const TestComponent = () => {
  return <View />;
};

export default function BottomTabNavigator(): JSX.Element {
  return (
    <MyBottomTabNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomBottomTabs {...props} />}>
      <MyBottomTabNavigator.Screen
        name={NAVIGATION_STACKS.HOME_STACK}
        component={HomeStack}
        options={{ title: 'Inicio' }}
      />
      <MyBottomTabNavigator.Screen
        name={NAVIGATION_STACKS.SEARCH_STACK}
        component={SearchStack}
        options={{ title: 'Explorar' }}
      />
      <MyBottomTabNavigator.Screen
        name={NAVIGATION_STACKS.MY_ACCOUNT_STACK}
        component={TestComponent}
        options={{ title: 'Perfil' }}
      />
    </MyBottomTabNavigator.Navigator>
  );
}
