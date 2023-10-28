import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import iconsTypes from '../../constants/icons';
import { TouchableRipple } from 'react-native-paper';
import colors from '../../constants/colors';
import MemberPitchInItem from './MemberPitchInItem';

export default function MemberDetails({ name, pitchInQuantity, rating, pitchInList }) {
  const [isVisible, setIsVisible] = useState(false);

  const handlePress = () => setIsVisible(!isVisible);

  return (
    <View style={styles.container}>
      <TouchableRipple onPress={handlePress} style={styles.touchable}>
        <View style={styles.header}>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.quantity}>Juntas exitosas: {pitchInQuantity}</Text>
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.imageContainer}>
              <Text style={styles.avatar}>{name.charAt(0).toUpperCase()}</Text>
              <View style={[styles.row, styles.ratingContainer]}>
                <Text style={styles.rating}>{rating}</Text>
                <Icon
                  type={iconsTypes.MATERIAL_COMMUNITY}
                  name="star"
                  color={'white'}
                  size={16}
                />
              </View>
            </View>
            <Icon
              type={iconsTypes.MATERIAL_COMMUNITY}
              color={'gray'}
              size={28}
              name={isVisible ? 'chevron-up' : 'chevron-down'}
            />
          </View>
        </View>
      </TouchableRipple>
      {isVisible && (
        <>
          <View style={[styles.row, { marginTop: 20 }]}>
            <Text style={[styles.columnName, styles.numberContainer]}>Hola</Text>
            <Text style={[styles.columnName, styles.totalContainer]}>Monto total</Text>
            <Text style={[styles.columnName, styles.dateContainer]}>Fecha</Text>
          </View>
          {pitchInList.map((item, index) => (
            <MemberPitchInItem {...item} key={index} index={index} />
          ))}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: 'gray',
    borderTopWidth: 1,
  },
  touchable: {
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontFamily: 'Figtree-SemiBold',
    fontSize: 24,
    marginBottom: 8,
  },
  quantity: {
    fontFamily: 'Figtree-SemiBold',
    fontSize: 15,
    marginBottom: 8,
    color: 'gray',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  columnName: {
    fontFamily: 'Figtree-Medium',
    fontSize: 13,
    color: 'gray',
  },
  imageContainer: {
    height: 70,
    width: 70,
    borderRadius: 70,
    backgroundColor: '#0173ec',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Figtree-SemiBold',
  },
  ratingContainer: {
    position: 'absolute',
    bottom: -16,
    backgroundColor: colors.MAIN,
    paddingHorizontal: 10,
    paddingLeft: 8,
    paddingVertical: 4,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
  },
  rating: {
    fontFamily: 'Figtree-SemiBold',
    color: 'white',
    fontSize: 17,
  },
  numberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.2,
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
});
