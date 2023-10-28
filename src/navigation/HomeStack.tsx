import React, { useCallback, useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';
import Home from '../screens/home/Home';
import { NAVIGATION_PAGES } from '../constants/navigation';
import colors from '../constants/colors';

const MyHomeStack = createStackNavigator();

export default function HomeStack(): JSX.Element {
  return (
    <MyHomeStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <MyHomeStack.Screen name={NAVIGATION_PAGES.HOME_PAGE} component={Home} />
    </MyHomeStack.Navigator>
  );
}

const styles = StyleSheet.create({});
