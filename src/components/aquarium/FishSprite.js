// src/components/aquarium/FishSprite.js
//
// Renders one fish from constants/fishAssets.js. Pass either:
//   - fishKey="blueTang"           (looked up via getFish)
//   - fish={getFish('blueTang')}   (entry object you already resolved)
//
// Size: give `width` (height is derived from the fish's real aspect ratio
// so nothing looks stretched) OR give both `width` and `height` to force it.
// `style` can add position (top/left/right/bottom) and transforms.

import { Image, StyleSheet } from 'react-native';
import { getFish } from '../../constants/fishAssets';

export default function FishSprite({
  fishKey,
  fish,
  width = 80,
  height,
  style,
  mirror = false,
}) {
  const entry = fish || (fishKey ? getFish(fishKey) : null);
  if (!entry?.source) return null;

  const resolvedHeight = height ?? width / entry.aspect;

  return (
    <Image
      source={entry.source}
      resizeMode="contain"
      style={[
        styles.base,
        { width, height: resolvedHeight },
        mirror && styles.mirrored,
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    position: 'absolute',
  },
  mirrored: {
    transform: [{ scaleX: -1 }],
  },
});