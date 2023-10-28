import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../context/store';
import { Button, Icon } from 'react-native-elements';
import { NAVIGATION_PAGES } from '../../constants/navigation';
import colors from '../../constants/colors';
import Stepper from '../../components/pitchIn/Stepper';
import InviteFriends from '../../components/pitchIn/InviteFriends';
import DateSelector from '../../components/pitchIn/DateSelector';
import PayQuote from '../../components/pitchIn/PayQuote';

export default function StepperPitch() {
  const statusBarHeight = useSelector((state: RootState) => state.layout.statusBarHeight);
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState<number>(1);

  const goBack = () => {
    navigation.navigate(NAVIGATION_PAGES.HOME_PAGE);
  };

  console.log({ currentStep });

  return (
    <View style={styles.container}>
      <View style={[styles.header, { marginTop: statusBarHeight }]}>
        <Button
          type="clear"
          icon={<Icon type="material-community" name="arrow-left" color={colors.MAIN} />}
          onPress={goBack}
        />
        <Text style={styles.title}>Lucy</Text>
      </View>
      <Stepper currentStep={currentStep} />
      {currentStep === 1 ? (
        <InviteFriends setCurrentStep={setCurrentStep} currentStep={currentStep} />
      ) : currentStep === 2 ? (
        <DateSelector setCurrentStep={setCurrentStep} currentStep={currentStep} />
      ) : (
        <PayQuote setCurrentStep={setCurrentStep} currentStep={currentStep} />
      )}
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
});
