import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  CardStyleInterpolators,
  TransitionSpecs,
  createStackNavigator,
} from '@react-navigation/stack';
import { NAVIGATION_PAGES } from '../constants/navigation';
import NewPitchIn from '../screens/pitchIn/NewPitchIn';

const MyPitchInStack = createStackNavigator();

export default function PitchInStack(): JSX.Element {
  return (
    <MyPitchInStack.Navigator>
      <MyPitchInStack.Screen
        name={NAVIGATION_PAGES.NEW_PITCH_IN_PAGE}
        component={NewPitchIn}
      />
    </MyPitchInStack.Navigator>
  );
}

const styles = StyleSheet.create({});
