import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import colors from '../../constants/colors';

interface Props {
  currency: string;
  setCurrenct: React.Dispatch<React.SetStateAction<string>>;
}

export default function CurrencySelector({ currency, setCurrency }: Props) {
  const options = [
    {
      label: 'PEN',
      value: 'PEN',
    },
    {
      label: 'USD',
      value: 'USD',
    },
  ];

  const handlePress = (newValue: string) => {
    setCurrency(newValue);
  };

  return (
    <View style={styles.container}>
      {options.map((opt, index) => (
        <TouchableRipple
          onPress={() => handlePress(opt.value)}
          key={index}
          style={[
            styles.touchable,
            index == 0 && { marginRight: 10 },
            currency === opt.value && { backgroundColor: colors.MAIN },
          ]}>
          <View style={styles.currencyContainer}>
            <Text style={[styles.currency, currency === opt.value && { color: 'white' }]}>
              {opt.value}
            </Text>
          </View>
        </TouchableRipple>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable: {
    backgroundColor: '#cfcfcf',
    width: 120,
    borderRadius: 12,
  },
  currencyContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  currency: {
    fontFamily: 'Figtree-Medium',
    fontSize: 16,
  },
});
