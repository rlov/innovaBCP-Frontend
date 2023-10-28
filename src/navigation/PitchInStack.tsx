import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  CardStyleInterpolators,
  TransitionSpecs,
  createStackNavigator,
} from '@react-navigation/stack';
import { NAVIGATION_PAGES } from '../constants/navigation';
import NewPitchIn from '../screens/pitchIn/NewPitchIn';
import StepperPitch from '../screens/pitchIn/StepperPitch';

const MyPitchInStack = createStackNavigator();

export default function PitchInStack(): JSX.Element {
  return (
    <MyPitchInStack.Navigator>
      <MyPitchInStack.Screen
        name={NAVIGATION_PAGES.NEW_PITCH_IN_PAGE}
        component={NewPitchIn}
        options={{
          headerShown: false,
        }}
      />
      <MyPitchInStack.Screen
        name={NAVIGATION_PAGES.PITCH_IN_STEPPER_PAGE}
        component={StepperPitch}
        options={{
          headerShown: false,
        }}
      />
    </MyPitchInStack.Navigator>
  );
}

const styles = StyleSheet.create({});
