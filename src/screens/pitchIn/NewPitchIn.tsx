import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import colors from '../../constants/colors';
import { RootState } from '../../context/store';
import { useSelector } from 'react-redux';
import LabelWrapper from '../../components/newPitchIn/LabelWrapper';
import CurrencySelector from '../../components/newPitchIn/CurrencySelector';
import PeriodSelector from '../../components/newPitchIn/PeriodSelector';
import CustomInput from '../../components/newPitchIn/CustomInput';

export default function NewPitchIn() {
  const statusBarHeight = useSelector((state: RootState) => state.layout.statusBarHeight);
  const navigation = useNavigation();
  const [name, setName] = useState<string>('');
  const [numberOfPeople, setNumberOfPeople] = useState<null | number>(null);
  const [quantityPerPerson, setQuantityPerPerson] = useState<null | number>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<string>('15 días');
  const [currency, setCurrency] = useState<string>('PEN');

  const goBack = () => {
    navigation.goBack();
  };

  const handleInputChange = () => {};

  return (
    <View style={styles.container}>
      <View style={[styles.header, { marginTop: statusBarHeight }]}>
        <Button
          type="clear"
          icon={<Icon type="material-community" name="arrow-left" color={colors.MAIN} />}
          onPress={goBack}
        />
        <Text style={styles.title}>Crear junta</Text>
      </View>
      <KeyboardAwareScrollView>
        <LabelWrapper
          label="Nombre de la junta"
          component={
            <CustomInput
              type="text"
              handleInputChange={handleInputChange}
              input={name}
              setInput={setName}
              placeholder="Escribe aquí"
            />
          }
        />
        <LabelWrapper
          label="Hacer pagos cada"
          component={
            <PeriodSelector
              selectedPeriod={selectedPeriod}
              setSelectedPeriod={setSelectedPeriod}
            />
          }
        />
        <LabelWrapper
          label="Número de participantes"
          component={
            <CustomInput
              type="number"
              handleInputChange={handleInputChange}
              input={numberOfPeople}
              setInput={setNumberOfPeople}
              placeholder="Escribe aquí"
            />
          }
        />
        <LabelWrapper
          label="Cantidad a pagar por turno"
          component={
            <CustomInput
              type="number"
              handleInputChange={handleInputChange}
              input={quantityPerPerson}
              setInput={setQuantityPerPerson}
              placeholder="Escribe aquí"
            />
          }
        />
        <LabelWrapper
          label="Moneda"
          component={<CurrencySelector currency={currency} setCurrency={setCurrency} />}
        />
      </KeyboardAwareScrollView>
      <View style={styles.footer}>
        <Button
          title={'Crear junta'}
          buttonStyle={[styles.button]}
          titleStyle={styles.buttonTitle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    flex: 1,
    fontFamily: 'Figtree-Bold',
    fontSize: 20,
    paddingLeft: 10,
  },
  footer: {
    paddingBottom: 30,
    paddingHorizontal: 10,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 13,
    backgroundColor: colors.MAIN,
  },
  buttonTitle: {
    fontFamily: 'Figtree-Regular',
    fontSize: 16,
  },
});
