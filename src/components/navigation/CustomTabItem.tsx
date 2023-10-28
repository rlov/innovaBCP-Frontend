import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import { useSelector } from 'react-redux';
import colors from '../../constants/colors';
import { type RootState } from '../../context/store';

interface Props {
  onPress: () => void;
  icon: React.ReactNode;
  isFocused: boolean;
  label: string;
}

export default function CustomTabItem({
  onPress,
  icon,
  isFocused,
  label,
}: Props): JSX.Element {
  return (
    <TouchableRipple onPress={onPress} style={styles.touchable} rippleColor="#c1c1c1">
      <View style={styles.container}>
        {icon}
        <Text
          style={[
            styles.label,
            Platform.OS === 'ios' && { fontWeight: '600' },
            isFocused && styles.selectedLabel,
          ]}>
          {label}
        </Text>
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    paddingVertical: 15,
    paddingBottom: Platform.OS === 'ios' ? 27 : 5,
  },
  container: {
    alignItems: 'center',
  },
  label: {
    /*     fontFamily: 'Figtree-SemiBold', */
    marginTop: 5,
    color: '#919192',
    fontSize: 13,
  },
  selectedLabel: {
    color: colors.MAIN,
    fontWeight: '600',
  },
});
