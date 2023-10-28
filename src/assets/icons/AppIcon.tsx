import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Icon from '../../interfaces/Icon';

export default function AppIcon({ width = 36, height = 34, color = 'black' }: Icon) {
  return (
    <Svg width={width} height={height} viewBox="0 0 36 34" fill="none">
      <Circle cx="13.627" cy="20.373" r="13.127" stroke={color} />
      <Circle cx="22.2619" cy="20.373" r="13.127" stroke={color} />
      <Circle cx="17.6746" cy="13.627" r="13.127" stroke={color} />
    </Svg>
  );
}
