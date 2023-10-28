import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import colors from '../../constants/colors';
import { NAVIGATION_PAGES } from '../../constants/navigation';

export default function CurrentPitchIn() {
  const [currentStatus, setCurrentStatus] = useState('pending');
  const navigation = useNavigation();

  const handlPress = () => {
    if (currentStatus === 'in-progress') {
      navigation.navigate(NAVIGATION_PAGES.JOIN_TO_PITCH_IN_PAGE, {
        type: 'DETAILS',
      });
    } else {
      navigation.navigate(NAVIGATION_PAGES.PENDING_PITCH_IN_DETAILS_PAGE);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tu junta actual:</Text>
      <TouchableRipple style={styles.touchable} onPress={handlPress}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={[styles.text, styles.status]}>
              {currentStatus === 'in-progress' ? 'On going' : 'Pendiente'}
            </Text>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>Lucy</Text>
            </View>
          </View>
          <Text style={styles.total}>S/ 6000</Text>
          {currentStatus === 'in-progress' && (
            <View style={styles.footer}>
              <Text style={styles.text}>Fecha de recepción</Text>
              <Text style={[styles.text, { marginTop: 6 }]}>31/12/2023</Text>
            </View>
          )}
        </View>
      </TouchableRipple>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  label: {},
  touchable: {
    backgroundColor: colors.MAIN,
    paddingVertical: 16,
    paddingLeft: 15,
    borderRadius: 15,
    marginTop: 14,
    marginBottom: 15,
  },
  card: {},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  status: {},
  nameContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  name: {
    fontFamily: 'Figtree-Regular',
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
  text: {
    color: 'white',
  },
  total: {
    fontFamily: 'Figtree-Bold',
    color: 'white',
    fontSize: 32,
    marginTop: 12,
  },
  footer: {
    fontFamily: 'Figtree-Regular',
    marginTop: 15,
    fontSize: 14,
  },
});
