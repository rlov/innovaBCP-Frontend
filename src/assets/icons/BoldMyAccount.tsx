import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type Icon from '../../interfaces/Icon';
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg';

export default function BoldMyAccount({ width = 20, height = 20 }: Icon): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <G clip-path="url(#clip0_738_7648)">
        <Path
          d="M17.0711 2.92895C15.1823 1.0402 12.6711 0 10 0C7.32891 0 4.8177 1.0402 2.92891 2.92895C1.0402 4.8177 0 7.32891 0 10C0 12.6711 1.0402 15.1823 2.92891 17.0711C4.8177 18.9598 7.32891 20 10 20C12.6711 20 15.1823 18.9598 17.0711 17.0711C18.9598 15.1823 20 12.6711 20 10C20 7.32891 18.9598 4.8177 17.0711 2.92895ZM10 18.8281C7.38793 18.8281 5.03762 17.6874 3.41984 15.8785C4.42277 13.2196 6.99016 11.3281 10 11.3281C8.05836 11.3281 6.48438 9.75414 6.48438 7.8125C6.48438 5.87086 8.05836 4.29688 10 4.29688C11.9416 4.29688 13.5156 5.87086 13.5156 7.8125C13.5156 9.75414 11.9416 11.3281 10 11.3281C13.0098 11.3281 15.5772 13.2196 16.5802 15.8785C14.9624 17.6874 12.6121 18.8281 10 18.8281Z"
          fill="#183582"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_738_7648">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const styles = StyleSheet.create({});
