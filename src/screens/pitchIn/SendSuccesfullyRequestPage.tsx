import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckCircle from '../../assets/icons/CheckCircle';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_STACKS } from '../../constants/navigation';
import { useDispatch } from 'react-redux';
import { setHasPitchIn } from '../../context/reducers/layout';

export default function SendSuccesfullyRequestPage() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setHasPitchIn({
        hasPitchIn: true,
      })
    );
    setTimeout(() => {
      navigation.navigate(NAVIGATION_STACKS.HOME_STACK);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        Tu solicitud para unirte a la junta ha sido enviada con éxito
      </Text>
      <View style={styles.iconContainer}>
        <CheckCircle />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    paddingHorizontal: 50,
    textAlign: 'center',
    fontFamily: 'Figtree-Medium',
    fontSize: 20,
    marginBottom: 20,
  },
  iconContainer: {},
});
