// src/components/aquarium/WaterBackground.js
//
// Reproduces the exact "Custom" linear gradient supplied from Figma:
//   stop 1: #ffffff at 16%
//   stop 2: #80C0E0 at 100%
// (white held flat until 16% down, then blends to the blue) — no other
// colors mixed in.
//
// Swap in the real ocean photo later by uncommenting the <Image> line below
// and removing the <LinearGradient>.

import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
import { GRADIENTS } from '../../constants/theme';

export default function WaterBackground({ children, style }) {
  return (
    <View style={[StyleSheet.absoluteFill, style]}>
      <LinearGradient
        colors={GRADIENTS.loader.colors}
        locations={GRADIENTS.loader.locations}
        style={StyleSheet.absoluteFill}
      />
      {/*
        Later: replace the gradient above with
        <Image
          source={require('@/assets/images/ocean.jpg')}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
        />
      */}
      {children}
    </View>
  );
}
