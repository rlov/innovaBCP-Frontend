import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import RNBootSplash from 'react-native-bootsplash';
import { NAVIGATION_PAGES, NAVIGATION_STACKS } from './src/constants/navigation';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { RootState } from './src/context/store';
import { setStatusBarHeight } from './src/context/reducers/layout';
import PitchInStack from './src/navigation/PitchInStack';
import JoinToPitchInPage from './src/screens/pitchIn/JoinToPitchInPage';
import SendSuccesfullyRequestPage from './src/screens/pitchIn/SendSuccesfullyRequestPage';

const MainStack = createStackNavigator();

export default function AppContent(): JSX.Element {
  const statusBarHeight = useSelector((state: RootState) => state.layout.statusBarHeight);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await RNBootSplash.hide({ fade: true });
    })();
  }, []);

  useEffect(() => {
    if (statusBarHeight <= 0) {
      dispatch(
        setStatusBarHeight({
          statusBarHeight: getStatusBarHeight(),
        })
      );
    }
  }, [statusBarHeight]);

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
      <MainStack.Screen
        name={NAVIGATION_STACKS.PITCH_IN_STACK}
        component={PitchInStack}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <MainStack.Screen
        name={NAVIGATION_PAGES.JOIN_TO_PITCH_IN_PAGE}
        component={JoinToPitchInPage}
      />
      <MainStack.Screen
        name={NAVIGATION_PAGES.SEND_SUCCESFULLY_REQUEST_PAGE}
        component={SendSuccesfullyRequestPage}
      />
    </MainStack.Navigator>
  );
}
