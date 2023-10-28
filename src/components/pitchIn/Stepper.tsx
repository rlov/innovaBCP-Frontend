import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../constants/colors';

interface Props {
  currrentStep: number;
}

export default function Stepper({ currentStep }: Props) {
  const numbers = new Array(4).fill(0);

  return (
    <View style={styles.externalContainer}>
      {numbers.map((number, index) => (
        <View style={styles.container} key={index}>
          <View
            style={[
              styles.numberContainer,
              currentStep === index + 1 && { backgroundColor: colors.MAIN },
            ]}>
            <Text
              style={[styles.number, currentStep === index + 1 && { color: 'white' }]}>
              {index + 1}
            </Text>
          </View>
          {index < numbers.length - 1 && <View style={styles.lineContainer} />}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  externalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberContainer: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.MAIN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {},
  lineContainer: {
    width: 50,
    height: 2,
    backgroundColor: colors.MAIN,
  },
});
