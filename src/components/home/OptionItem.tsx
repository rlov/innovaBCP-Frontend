import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import HomeOptionItem from '../../interfaces/HomeOptionItem';

export default function OptionItem({ title, subtitle, bgColor, image }: HomeOptionItem) {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 19,
    paddingHorizontal: 20,
    marginVertical: 14,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  leftContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'Figtree-Bold',
    fontSize: 17,
    marginBottom: 6,
  },
  subtitle: {
    fontFamily: 'Figtree-Regular',
    fontSize: 15,
    marginBottom: 6,
  },
  imageContainer: {
    position: 'relative',
    height: 80,
    width: 80,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
