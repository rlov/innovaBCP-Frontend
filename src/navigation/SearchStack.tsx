import React, { useCallback, useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';
import Home from '../screens/home/Home';
import { NAVIGATION_PAGES } from '../constants/navigation';
import colors from '../constants/colors';
import GeneralSearch from '../screens/search/GeneralSearch';
import JoinToPitchInPage from '../screens/pitchIn/JoinToPitchInPage';

const MySearchStack = createStackNavigator();

export default function SearchStack() {
  return (
    <MySearchStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <MySearchStack.Screen
        name={NAVIGATION_PAGES.GENERAL_SEARCH_PAGE}
        component={GeneralSearch}
      />
    </MySearchStack.Navigator>
  );
}

const styles = StyleSheet.create({});
