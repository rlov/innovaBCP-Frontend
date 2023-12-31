import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  label: string;
  component?: React.ReactNode;
}

export default function LabelWrapper({ label, component }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      {component && component}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    marginTop: 15,
  },
  label: {
    fontFamily: 'Figtree-Medium',
    fontSize: 16,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
});
