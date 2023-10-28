import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import colors from '../../constants/colors';
import { RootState } from '../../context/store';
import { useSelector } from 'react-redux';
import LabelWrapper from '../../components/newPitchIn/LabelWrapper';
import CurrencySelector from '../../components/newPitchIn/CurrencySelector';

export default function NewPitchIn() {
  const statusBarHeight = useSelector((state: RootState) => state.layout.statusBarHeight);
  const navigation = useNavigation();
  const [currency, setCurrency] = useState<string>('PEN');

  const goBack = () => {
    navigation.goBack();
  };

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
      <LabelWrapper label="Nombre de la junta" />
      <LabelWrapper label="Hacer pagos cada" />
      <LabelWrapper label="Número de participantes" />
      <LabelWrapper label="Cantidad a pagar por turno" />
      <LabelWrapper
        label="Moneda"
        component={<CurrencySelector currency={currency} setCurrency={setCurrency} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
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
});
