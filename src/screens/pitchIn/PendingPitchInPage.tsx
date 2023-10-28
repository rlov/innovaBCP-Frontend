import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../context/store';
import { Button, Icon } from 'react-native-elements';
import colors from '../../constants/colors';

const WINDOW_WIDTH = Dimensions.get('screen').width;

const membersList = [
  {
    name: 'Adrián',
  },
  {
    name: 'Miguel',
  },
  {
    name: 'Diego',
  },
  {
    name: 'Ricardo',
  },
];

export default function PendingPitchInPage(): JSX.Element {
  const statusBarHeight = useSelector((state: RootState) => state.layout.statusBarHeight);
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.header, { paddingTop: statusBarHeight }]}>
        <Button
          type="clear"
          icon={<Icon type="material-community" name="arrow-left" color={'white'} />}
          onPress={goBack}
        />
        <Text style={styles.title}>Lucy</Text>
      </View>
      <ScrollView>
        <Text style={styles.message}>La junta no ha empezado todavía</Text>
        <Text style={[styles.message, styles.secondaryMessage]}>
          Esperando que el administrador le de inicio a la junta. Te notificaremos cuando
          comience
        </Text>
        <View style={styles.list}>
          {membersList.map((item, index) => (
            <View style={styles.memberContainer} key={index}>
              <View style={styles.avatarContainer}>
                <Text style={styles.avatar}>{item?.name?.charAt(0).toUpperCase()}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.row}>
          <Text style={styles.subtitle}>Monto a pagar por miembro:</Text>
          <Text style={styles.value}>3000</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.subtitle}>Periodicidad:</Text>
          <Text style={styles.value}>1 mes</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.subtitle}>Número actual de participantes:</Text>
          <Text style={styles.value}>3</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.subtitle}>
            Número de participantes para comenzar con la junta:
          </Text>
          <Text style={styles.value}>8</Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button
          title={'Abandonar el grupo'}
          buttonStyle={[styles.button]}
          titleStyle={styles.buttonTitle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
    backgroundColor: colors.MAIN,
    paddingBottom: 12,
    paddingHorizontal: 15,
  },
  message: {
    fontFamily: 'Figtree-Medium',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 14,
    paddingHorizontal: 80,
  },
  secondaryMessage: {
    fontSize: 15,
    fontFamily: 'Figtree-Regular',
    paddingHorizontal: 20,
  },
  title: {
    flex: 1,
    fontFamily: 'Figtree-Bold',
    fontSize: 20,
    paddingLeft: 10,
    color: 'white',
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  subtitle: {
    flex: 1,
    fontFamily: 'Figtree-Medium',
    maxWidth: WINDOW_WIDTH * 0.7,
    fontSize: 17,
  },
  value: {
    fontFamily: 'Figtree-Regular',
    textAlign: 'right',
    flex: 0.4,
    fontSize: 17,
  },
  memberContainer: {},
  avatarContainer: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.MAIN,
    borderRadius: 60,
  },
  avatar: {
    color: 'white',
    fontFamily: 'Figtree-Bold',
    fontSize: 20,
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
