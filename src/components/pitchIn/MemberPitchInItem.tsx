import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../constants/colors';

export default function MemberPitchInItem({ total, date, index }) {
  return (
    <View style={styles.container}>
      <View style={styles.numberContainer}>
        <View style={styles.bar} />
        <Text style={styles.text}>#{index + 1}</Text>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.text}>S/ {total}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.text}>{date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#F9FAFF',
  },
  numberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.2,
  },
  bar: {
    backgroundColor: colors.MAIN,
    height: 24,
    width: 4,
    marginRight: 5,
  },
  totalContainer: {
    flex: 0.5,
    paddingLeft: 40,
  },
  dateContainer: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Figtree-Medium',
    fontSize: 13,
  },
});
