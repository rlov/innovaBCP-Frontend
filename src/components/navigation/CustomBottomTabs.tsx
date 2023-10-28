import {
  type BottomTabDescriptorMap,
  type BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
  type NavigationHelpers,
  type ParamListBase,
  type TabNavigationState,
} from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import Home from '../../assets/icons/Home';
import MyAccount from '../../assets/icons/MyAccount';
import colors from '../../constants/colors';
import { NAVIGATION_STACKS } from '../../constants/navigation';
import Search from '../../assets/icons/Search';
import BoldSearch from '../../assets/icons/BoldSearch';
import BoldMyAccount from '../../assets/icons/BoldMyAccount';
import HomeOutline from '../../assets/icons/HomeOutline';
import { type RootState } from '../../context/store';
import { useDispatch, useSelector } from 'react-redux';
import CustomTabItem from './CustomTabItem';

const WINDOW_WIDTH = Dimensions.get('screen').width;

interface Props {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

export default function CustomBottomTabs({
  state,
  descriptors,
  navigation,
}: Props): JSX.Element {
  const dispatch = useDispatch();

  const screenIcon = (routeName: string, isFocused: boolean): React.ReactNode => {
    const defaultColor = '#919192';
    const selectedColor = isFocused ? colors.MAIN_2 : defaultColor;
    switch (routeName) {
      case NAVIGATION_STACKS.HOME_STACK:
        return isFocused ? (
          <Home color={selectedColor} />
        ) : (
          <HomeOutline color={selectedColor} />
        );
      case NAVIGATION_STACKS.SEARCH_STACK:
        return isFocused ? <BoldSearch /> : <Search color={selectedColor} />;
      case NAVIGATION_STACKS.MY_ACCOUNT_STACK:
        return isFocused ? <BoldMyAccount /> : <MyAccount color={selectedColor} />;
      default:
        break;
    }
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.list]}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const isFocused = state.index === index;
          const iconComponent = screenIcon(route?.name, isFocused);

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
              data: undefined,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <CustomTabItem
              key={index}
              onPress={onPress}
              icon={iconComponent}
              isFocused={isFocused}
              label={label}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
    zIndex: 999,
    position: 'absolute',
    bottom: 0,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
});
