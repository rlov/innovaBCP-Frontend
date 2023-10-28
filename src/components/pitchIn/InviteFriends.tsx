import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Icon } from 'react-native-elements';
import colors from '../../constants/colors';
import { TouchableRipple } from 'react-native-paper';
import MyAccount from '../../assets/icons/MyAccount';
import iconsTypes from '../../constants/icons';

interface Props {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

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
];

export default function InviteFriends({ setCurrentStep, currentStep }: Props) {
  const handlePress = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <Text style={[styles.message, styles.secondaryMessage]}>
          Invita a tus amigos o familia a unirse a tu grupo compartiendo el link o el
          código
        </Text>
        <Text style={[styles.message, styles.secondaryMessage, { textAlign: 'left' }]}>
          Invitar miembros:
        </Text>
        <View style={styles.list}>
          {membersList.map((item, index) => (
            <View style={styles.memberContainer} key={index}>
              <View style={styles.avatarContainer}>
                <Text style={styles.avatar}>{item?.name?.charAt(0).toUpperCase()}</Text>
              </View>
            </View>
          ))}
          <TouchableRipple>
            <View style={styles.iconContainer}>
              <MyAccount />
              <View style={styles.plusContainer}>
                <Icon
                  type={iconsTypes.MATERIAL_COMMUNITY}
                  color={colors.MAIN}
                  size={18}
                  name="plus"
                />
              </View>
            </View>
          </TouchableRipple>
        </View>
        <View style={[styles.row, { marginTop: 50 }]}>
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
      </KeyboardAwareScrollView>
      <View style={styles.footer}>
        <Button
          title={'Ve a escoger fecha de pago'}
          buttonStyle={[styles.button]}
          titleStyle={styles.buttonTitle}
          onPress={handlePress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 12,
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
  iconContainer: {
    position: 'relative',
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.MAIN,
    borderRadius: 60,
  },
  plusContainer: {
    position: 'absolute',
    top: 7,
    right: 7,
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
});
