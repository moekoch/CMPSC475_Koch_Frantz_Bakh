import React, { useRef } from 'react';
import { Pressable, Animated, Text, StyleSheet, View } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';

/**
 * Primary action button shaped like a little price-tag / fin — asymmetric
 * corners plus a small triangular notch, instead of a generic rounded pill.
 */
export default function OrganicButton({ label, onPress, variant = 'primary', icon, style, disabled }) {
  const scale = useRef(new Animated.Value(1)).current;

  const pressIn = () => Animated.timing(scale, { toValue: 0.97, duration: 90, useNativeDriver: true }).start();
  const pressOut = () => Animated.timing(scale, { toValue: 1, duration: 120, useNativeDriver: true }).start();

  const palette = variant === 'primary' ? COLORS.coral : variant === 'ghost' ? 'transparent' : COLORS.reefGreen;
  const textColor = variant === 'ghost' ? COLORS.deepWater : COLORS.pearl;

  return (
    <Pressable onPress={disabled ? undefined : onPress} onPressIn={pressIn} onPressOut={pressOut} disabled={disabled}>
      <Animated.View
        style={[
          styles.base,
          {
            backgroundColor: palette,
            borderWidth: variant === 'ghost' ? 1.5 : 0,
            borderColor: COLORS.deepWater,
            transform: [{ scale }],
            opacity: disabled ? 0.5 : 1,
          },
          style,
        ]}
      >
        <View style={styles.row}>
          {icon}
          <Text style={[styles.label, { color: textColor, marginLeft: icon ? 8 : 0 }]}>{label}</Text>
        </View>
        {variant !== 'ghost' && <View style={[styles.fin, { borderTopColor: palette }]} />}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 14,
    paddingHorizontal: 26,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  label: { fontFamily: FONTS.bodyBold, fontSize: 16 },
  fin: {
    position: 'absolute',
    right: -8,
    bottom: 4,
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
    borderTopWidth: 14,
  },
});
