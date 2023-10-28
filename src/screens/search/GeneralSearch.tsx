import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { RootState } from '../../context/store';
import { Button, Icon, Input } from 'react-native-elements';
import colors from '../../constants/colors';
import AppIcon from '../../assets/icons/AppIcon';
import { NAVIGATION_PAGES, NAVIGATION_STACKS } from '../../constants/navigation';
import iconsTypes from '../../constants/icons';
import ResultItem from '../../components/search/ResultItem';
import type PithInResult from '../../interfaces/PithInResult';

export default function GeneralSearch(): JSX.Element {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const inputRef = useRef(null);
  const statusBarHeight = useSelector((state: RootState) => state.layout.statusBarHeight);
  const navigation = useNavigation();
  const offset = useSharedValue(-50);
  const opacity = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
    opacity: opacity.value,
  }));

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      offset.value = withTiming(0, { duration: 200 });
      opacity.value = withTiming(1, { duration: 120 });
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      offset.value = withTiming(10, { duration: 200 });
      opacity.value = withTiming(0.85, { duration: 120 });
    });

    return unsubscribe;
  }, [navigation]);

  const onChange = (t: string) => {
    setSearchInput(t);
  };

  const dummyData: PithInResult[] = [
    {
      currency: 'PEN',
      total: 3000,
      duration: '3 meses',
      membersTotal: 10,
      missingMembers: 5,
      period: '1 mes',
      quota: 1000,
      rating: 4.6,
    },
    {
      total: 4000,
      currency: 'PEN',
      duration: '3 meses',
      membersTotal: 10,
      missingMembers: 5,
      period: '1 mes',
      quota: 1000,
      rating: 3.5,
    },
    {
      total: 3000,
      currency: 'PEN',
      duration: '3 meses',
      membersTotal: 10,
      missingMembers: 5,
      period: '1 mes',
      quota: 1000,
      rating: 4.6,
    },
  ];

  const renderItem = ({ item, index }) => {
    return <ResultItem {...item} />;
  };

  const keyExtractor = useCallback(
    (item: any, index: number) => `${item.id}_${index}`,
    []
  );

  return (
    <Animated.View
      style={[styles.container, animatedStyles, { paddingTop: statusBarHeight }]}>
      <Input
        autoCapitalize="none"
        ref={inputRef}
        value={searchInput}
        onChangeText={onChange}
        onFocus={() => {
          setIsInputFocused(true);
        }}
        onBlur={() => {
          setIsInputFocused(false);
        }}
        placeholder={'Buscar'}
        leftIcon={
          <Icon
            type={iconsTypes.FONTISTO}
            name="search"
            size={18}
            color={isInputFocused ? colors.MAIN : '#c1c1c1'}
          />
        }
        inputStyle={[
          styles.input,
          Platform.OS === 'ios' && { fontWeight: '400' },
          { fontSize: 15 },
        ]}
        containerStyle={styles.externalInputContainer}
        inputContainerStyle={styles.inputContainer}
      />
      <Text style={styles.title}>Juntas que te recomendamos:</Text>
      <FlatList
        style={{ marginTop: 10 }}
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 25,
    marginBottom: 25,
  },
  welcome: {
    fontFamily: 'Figtree-Bold',
    fontSize: 32,
    flex: 1,
  },
  text: {
    fontFamily: 'Figtree-Regular',
    fontSize: 16,
  },
  centeredText: {
    textAlign: 'center',
  },
  button: {
    borderRadius: 12,
    paddingVertical: 13,
  },
  buttonTitle: {
    fontFamily: 'Figtree-Regular',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderColor: colors.MAIN,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  input: {
    fontFamily: 'Figtree-Regular',
    height: '100%',
    backgroundColor: 'transparent',
    color: colors.MAIN_2,
    borderRadius: 10,
    paddingLeft: 8,
    paddingRight: 15,
  },
  externalInputContainer: {
    backgroundColor: 'white',
    height: 36,
    borderRadius: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#c1c1c1',
    paddingLeft: 15,
    borderRadius: 10,
  },
  title: {
    fontFamily: 'Figtree-Bold',
    marginTop: 30,
    fontSize: 16,
    marginHorizontal: 10,
  },
});
