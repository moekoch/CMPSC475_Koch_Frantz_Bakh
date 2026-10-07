import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image } from 'react-native';
import { getFish } from '../../constants/fishAssets';

/**
 * Renders one fish asset. When `swim` is true it drifts gently left/right
 * and bobs vertically — enough to feel alive without being distracting.
 * `facing` flips the sprite ('left' | 'right').
 */
export default function FishSprite({
  species = 'orangeClownfish',
  width = 90,
  swim = false,
  facing = 'right',
  style,
}) {
  const fish = getFish(species);
  const height = width / fish.aspect;

  const bob = useRef(new Animated.Value(0)).current;
  const drift = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!swim) return undefined;
    const bobLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(bob, { toValue: 1, duration: 1600, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
        Animated.timing(bob, { toValue: 0, duration: 1600, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
      ])
    );
    const driftLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(drift, { toValue: 1, duration: 3200, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
        Animated.timing(drift, { toValue: 0, duration: 3200, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
      ])
    );
    bobLoop.start();
    driftLoop.start();
    return () => {
      bobLoop.stop();
      driftLoop.stop();
    };
  }, [swim, bob, drift]);

  const translateY = bob.interpolate({ inputRange: [0, 1], outputRange: [0, -6] });
  const translateX = drift.interpolate({ inputRange: [0, 1], outputRange: [0, 8] });
  const flip = facing === 'left' ? -1 : 1;

  return (
    <Animated.View style={[{ width, height, transform: [{ translateY }, { translateX }] }, style]}>
      <Image
        source={fish.source}
        style={{ width, height, transform: [{ scaleX: flip }] }}
        resizeMode="contain"
      />
    </Animated.View>
  );
}
