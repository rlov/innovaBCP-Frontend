import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import PithInResult from '../../interfaces/PithInResult';
import colors from '../../constants/colors';
import { Icon } from 'react-native-elements';
import iconsTypes from '../../constants/icons';

export default function ResultItem({
  total,
  duration,
  rating,
  quota,
  missingMembers,
  membersTotal,
  period,
  currency,
}: PithInResult) {
  const getCurrencySymbol = () => {
    return currency === 'PEN' ? 'S/' : '$';
  };

  return (
    <View style={styles.card}>
      <View style={[styles.row, { gap: 8, alignItems: 'flex-start' }]}>
        <View style={styles.leftContainer}>
          <View style={styles.block}>
            <Text style={styles.subtitle}>Total a recibir:</Text>
            <Text style={styles.total}>
              {getCurrencySymbol()} {total}
            </Text>
          </View>
          <View style={[styles.row, { marginTop: 10, justifyContent: 'flex-start' }]}>
            <Text style={styles.subtitle}>Calificación:</Text>
            <View
              style={[
                styles.row,
                styles.ratingContainer,
                { justifyContent: 'flex-start', marginBottom: 0 },
              ]}>
              <Text style={styles.rating}>{rating}</Text>
              <Icon
                type={iconsTypes.MATERIAL_COMMUNITY}
                name="star"
                color={'white'}
                size={16}
              />
            </View>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.block}>
            <Text style={styles.subtitle}>Duración:</Text>
            <Text style={styles.value}>{duration}</Text>
          </View>
          <View style={[styles.block, { marginTop: 25 }]}>
            <Text style={styles.subtitle}>Cuota a pagar:</Text>
            <Text style={styles.value}>
              {getCurrencySymbol()} {quota}/{period}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.missingMembersText}>
          {missingMembers > 1 ? 'Faltan' : 'Falta'}: {missingMembers} Integrantes
        </Text>
        <TouchableOpacity style={styles.button}>
          <View style={styles.row}>
            <Text style={styles.missingMembersText}>Ver participantes</Text>
            <Icon
              type={iconsTypes.MATERIAL_COMMUNITY}
              name="chevron-right"
              color={colors.MAIN}
              size={16}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  searchBar: {
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 5,
  },
  searchInput: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  ratingContainer: {
    backgroundColor: colors.MAIN,
    paddingHorizontal: 4,
    paddingLeft: 8,
    paddingVertical: 4,
    borderRadius: 10,
    marginLeft: 6,
  },
  rating: {
    fontFamily: 'Figtree-SemiBold',
    color: 'white',
    fontSize: 17,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'transparent',
    borderRadius: 5,
    alignItems: 'center',
  },
  block: {},
  subtitle: {
    fontFamily: 'Figtree-Medium',
    fontSize: 11,
    color: 'gray',
  },
  value: {
    fontFamily: 'Figtree-Bold',
    fontSize: 16,
  },
  total: {
    fontFamily: 'Figtree-Bold',
    fontSize: 32,
    color: 'black',
    marginTop: 4,
  },
  leftContainer: {
    flex: 0.55,
  },
  rightContainer: {
    flex: 0.45,
  },
  missingMembersText: {
    color: 'gray',
    fontFamily: 'Figtree-Bold',
    fontSize: 12,
  },
});
