import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { TouchableRipple } from 'react-native-paper';
import colors from '../../constants/colors';

interface Props {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function PayQuote({ currentStep, setCurrentStep }: Props) {
  const [selectedOption, setSelectedOption] = useState('pago-efectivo');

  const options = [
    {
      name: 'Pago efectivo',
      value: 'pago-efectivo',
    },
    {
      name: 'BCP o Yape',
      value: 'bcp-or-yape',
    },
    {
      name: 'Otros bancos',
      value: 'bankcs',
    },
  ];

  const handlePress = (value: string) => {
    setSelectedOption(value);
  };

  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {options.map((item, index) => (
          <TouchableRipple
            onPress={() => handlePress(item.value)}
            style={styles.touchable}>
            <View style={styles.row}>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.circleContainer}>
                <View
                  style={[
                    styles.circle,
                    selectedOption === item.value && { backgroundColor: '#5FBDF2' },
                  ]}
                />
              </View>
            </View>
          </TouchableRipple>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Button
          title={'Siguiente'}
          buttonStyle={[styles.button]}
          titleStyle={styles.buttonTitle}
          onPress={goToNextStep}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchable: {
    marginHorizontal: 18,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 12,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 17,
    flex: 1,
  },
  circleContainer: {
    height: 40,
    width: 40,
    backgroundColor: '#EFEFEF',
    borderRadius: 40,
  },
  circle: {
    height: 38,
    width: 38,
    borderRadius: 38,
  },
  footer: {
    paddingBottom: 30,
    paddingHorizontal: 10,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 13,
    backgroundColor: 'transparent',
    borderColor: colors.MAIN,
    borderWidth: 1,
  },
  buttonTitle: {
    fontFamily: 'Figtree-Regular',
    fontSize: 16,
    color: colors.MAIN,
  },
});
