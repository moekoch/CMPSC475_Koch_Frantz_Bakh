import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

/**
 * A framed "aquarium glass" surface — not a generic rounded card.
 * Corners are intentionally asymmetric by default ('organicA' | 'organicB' | 'tag' | 'sharp'),
 * and a thin diagonal highlight suggests glass without full glassmorphism/blur.
 */
export default function GlassPanel({ children, style, corner = 'organicA', tint }) {
  const radiusStyle = CORNER_STYLES[corner] || CORNER_STYLES.organicA;
  return (
    <View style={[styles.base, radiusStyle, tint && { backgroundColor: tint }, style]}>
      <View style={[styles.highlight, radiusStyle]} pointerEvents="none" />
      {children}
    </View>
  );
}

const CORNER_STYLES = {
  organicA: { borderTopLeftRadius: 30, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 30 },
  organicB: { borderTopLeftRadius: 10, borderTopRightRadius: 26, borderBottomLeftRadius: 26, borderBottomRightRadius: 10 },
  tag: { borderTopLeftRadius: 6, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 6 },
  sharp: { borderRadius: 4 },
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: COLORS.glassFill,
    borderWidth: 1,
    borderColor: COLORS.glassEdge,
    overflow: 'hidden',
  },
  highlight: {
    position: 'absolute',
    top: -10,
    left: -40,
    width: '70%',
    height: 18,
    backgroundColor: 'rgba(255,255,255,0.3)',
    transform: [{ rotate: '-8deg' }],
  },
});
