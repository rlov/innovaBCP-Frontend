import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import colors from '../../constants/colors';

interface Props {
  selectedPeriod: string;
  setSelectedPeriod: React.Dispatch<React.SetStateAction<string>>;
}

export default function PeriodSelector({ selectedPeriod, setSelectedPeriod }: Props) {
  const options = [
    {
      label: '15 días',
      value: '15 días',
    },
    {
      label: '1 mes',
      value: '1 mes',
    },
    {
      label: '2 meses',
      value: '2 meses',
    },
  ];

  const handlePress = (newValue: string) => {
    setSelectedPeriod(newValue);
  };

  return (
    <View style={styles.container}>
      {options.map((opt, index) => (
        <TouchableRipple
          onPress={() => handlePress(opt.value)}
          key={index}
          style={[
            styles.touchable,
            /*    index == 0 && { marginRight: 10 }, */
            selectedPeriod === opt.value && { backgroundColor: colors.MAIN },
          ]}>
          <View style={styles.currencyContainer}>
            <Text
              style={[
                styles.currency,
                selectedPeriod === opt.value && { color: 'white' },
              ]}>
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
    flexWrap: 'wrap',
    gap: 10,
  },
  touchable: {
    backgroundColor: '#cfcfcf',
    paddingHorizontal: 25,
    borderRadius: 12,
  },
  currencyContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  currency: {
    fontFamily: 'Figtree-Medium',
    fontSize: 14,
  },
});
