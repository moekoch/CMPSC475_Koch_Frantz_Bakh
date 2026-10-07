import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, GRADIENTS } from '../../constants/theme';

/**
 * Full-bleed water environment used behind every screen.
 * `depth` picks a gradient; `rays` toggles soft underwater light shafts;
 * `floor` adds a sandy/reef band pinned to the bottom.
 */
export default function WaterBackground({ depth = 'mid', rays = true, floor = false, children, style }) {
  const colors =
    depth === 'shallow' ? GRADIENTS.shallowDive : depth === 'deep' ? GRADIENTS.deepDive : GRADIENTS.midDive;

  return (
    <View style={[StyleSheet.absoluteFill, style]}>
      <LinearGradient colors={colors} start={{ x: 0.2, y: 0 }} end={{ x: 0.8, y: 1 }} style={StyleSheet.absoluteFill} />

      {rays && (
        <View pointerEvents="none" style={StyleSheet.absoluteFill}>
          <View style={[styles.ray, { left: '8%', transform: [{ rotate: '14deg' }], height: 420 }]} />
          <View style={[styles.ray, { left: '42%', transform: [{ rotate: '9deg' }], height: 520, opacity: 0.1 }]} />
          <View style={[styles.ray, { left: '68%', transform: [{ rotate: '18deg' }], height: 380 }]} />
        </View>
      )}

      {floor && (
        <View pointerEvents="none" style={styles.floorWrap}>
          <View style={styles.floorCurve} />
          <View style={[styles.rock, { left: '6%', width: 70, height: 34 }]} />
          <View style={[styles.rock, { left: '28%', width: 110, height: 46, backgroundColor: COLORS.sandDeep }]} />
          <View style={[styles.rock, { left: '60%', width: 90, height: 38 }]} />
          <View style={[styles.rock, { left: '82%', width: 60, height: 28, backgroundColor: COLORS.sandDeep }]} />
        </View>
      )}

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  ray: {
    position: 'absolute',
    top: -60,
    width: 90,
    backgroundColor: 'rgba(255,255,255,0.16)',
  },
  floorWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 64,
  },
  floorCurve: {
    position: 'absolute',
    left: -20,
    right: -20,
    bottom: -30,
    height: 90,
    backgroundColor: COLORS.sand,
    borderTopLeftRadius: 140,
    borderTopRightRadius: 90,
  },
  rock: {
    position: 'absolute',
    bottom: 6,
    backgroundColor: COLORS.sand,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    opacity: 0.9,
  },
});
