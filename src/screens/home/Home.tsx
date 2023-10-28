import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { RootState } from '../../context/store';
import { Button } from 'react-native-elements';
import colors from '../../constants/colors';
import AppIcon from '../../assets/icons/AppIcon';
import { NAVIGATION_PAGES, NAVIGATION_STACKS } from '../../constants/navigation';
import OptionItem from '../../components/home/OptionItem';
import HomeOptionItem from '../../interfaces/HomeOptionItem';

const optionsList: HomeOptionItem[] = [
  {
    title: 'Revisa tu historial crediticio',
    bgColor: '#A7F4A0',
    subtitle:
      'Recuerda que ser buen pagador de tus juntas te permitirá acceder a crédito a menores tasas',
    image: require('../../assets/icons/historial.png'),
  },
  {
    title: 'Invita a tus amigos y familiares',
    bgColor: '#B3D6FE',
    subtitle: 'También puedes iniciar una junta con ellos',
    image: require('../../assets/icons/friends.png'),
  },
  {
    title: '¿Qué hago con mi junta?',
    bgColor: '#FDF5C4',
    subtitle:
      'Aprende cómo rentabilizar el dinero de tu junta, para darle una mejor vida a los que más amas',
    image: require('../../assets/icons/pig.png'),
  },
];

export default function Home(): JSX.Element {
  const statusBarHeight = useSelector((state: RootState) => state.layout.statusBarHeight);
  const hasPitchIn = useSelector((state: RootState) => state.layout.hasPitchIn);
  const navigation = useNavigation();
  const offset = useSharedValue(-50);
  const opacity = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
    opacity: opacity.value,
  }));

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      offset.value = withTiming(0, { duration: 200 });
      opacity.value = withTiming(1, { duration: 120 });
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      offset.value = withTiming(10, { duration: 200 });
      opacity.value = withTiming(0.85, { duration: 120 });
    });

    return unsubscribe;
  }, [navigation]);

  const navigateToNewPitchIn = () => {
    navigation.navigate(NAVIGATION_STACKS.PITCH_IN_STACK, {
      screenName: NAVIGATION_PAGES.NEW_PITCH_IN_PAGE,
    });
  };

  return (
    <Animated.View
      style={[styles.container, animatedStyles, { paddingTop: statusBarHeight }]}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>Hola, Adrian</Text>
          <AppIcon color={colors.MAIN} />
        </View>
        {!hasPitchIn && (
          <>
            <Text style={styles.text}>Aún no cuentas con una junta. Te invitamos a:</Text>
            <Button
              title={'Crear una junta'}
              buttonStyle={[styles.button, { backgroundColor: colors.MAIN }]}
              titleStyle={styles.buttonTitle}
              containerStyle={{ marginTop: 25 }}
              onPress={navigateToNewPitchIn}
            />
            <Text style={[styles.text, styles.centeredText, { marginVertical: 5 }]}>
              O
            </Text>
            <Button
              title={'Unirte a una junta'}
              buttonStyle={[styles.button, styles.secondaryButton]}
              titleStyle={[styles.buttonTitle, { color: 'black' }]}
            />
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require('../../assets/images/homePig.png')}
              />
            </View>
          </>
        )}
        {hasPitchIn && (
          <>
            <Text style={styles.text}>Otras opciones:</Text>
            {optionsList.map((option, index) => (
              <OptionItem {...option} key={index} />
            ))}
          </>
        )}
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 25,
    marginBottom: 25,
  },
  welcome: {
    fontFamily: 'Figtree-Bold',
    fontSize: 32,
    flex: 1,
  },
  text: {
    fontFamily: 'Figtree-Regular',
    fontSize: 16,
  },
  centeredText: {
    textAlign: 'center',
  },
  button: {
    borderRadius: 12,
    paddingVertical: 13,
  },
  buttonTitle: {
    fontFamily: 'Figtree-Regular',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderColor: colors.MAIN,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120,
  },
  image: {
    height: 150,
    width: 150,
  },
});
