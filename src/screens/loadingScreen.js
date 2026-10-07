import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import Bubbles from '../components/aquarium/Bubbles';
import FishSprite from '../components/aquarium/FishSprite';
import WaterBackground from '../components/aquarium/WaterBackground';
import { COLORS, FONTS } from '../constants/theme';

const QUOTES = [
  { text: 'Believe you can and you’re halfway there.', author: 'Theodore Roosevelt' },
  { text: 'The best way out is always through.', author: 'Robert Frost' },
  { text: 'Still water runs deep.', author: 'Proverb' },
];

/**
 * First screen a session sees: a sunlit shallow tank, a single clownfish
 * drifting past, and a quote while the next route is prepared.
 * Auto-advances after a short beat — this is a transition, not a dashboard.
 */
export default function LoadingScreen({ navigation }) {
  const quote = useRef(QUOTES[Math.floor(Math.random() * QUOTES.length)]).current;
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, { toValue: 1, duration: 900, easing: Easing.out(Easing.quad), useNativeDriver: true }).start();
    const t = setTimeout(() => navigation?.navigate?.('JoinSession'), 2600);
    return () => clearTimeout(t);
  }, [fade, navigation]);

  return (
    <WaterBackground depth="shallow" floor>
      <Bubbles count={10} />

      <FishSprite
        species="orangeClownfish"
        width={130}
        swim
        style={{ position: 'absolute', left: '14%', top: '46%' }}
      />
      <FishSprite
        species="clownfishDistant"
        width={70}
        swim
        facing="left"
        style={{ position: 'absolute', right: '10%', top: '58%', opacity: 0.6 }}
      />

      <Animated.View style={[styles.center, { opacity: fade }]}>
        <Text style={styles.quote}>“{quote.text}”</Text>
        <Text style={styles.author}>— {quote.author}</Text>

        <View style={styles.dots}>
          <PulsingDot delay={0} />
          <PulsingDot delay={180} />
          <PulsingDot delay={360} />
        </View>
      </Animated.View>
    </WaterBackground>
  );
}

function PulsingDot({ delay }) {
  const v = useRef(new Animated.Value(0.3)).current;
  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(v, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(v, { toValue: 0.3, duration: 500, useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [v, delay]);
  return <Animated.View style={[styles.dot, { opacity: v }]} />;
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 36,
  },
  quote: {
    fontFamily: FONTS.heading,
    fontSize: 22,
    lineHeight: 30,
    color: COLORS.ink,
    textAlign: 'center',
  },
  author: {
    fontFamily: FONTS.body,
    fontSize: 14,
    color: COLORS.inkSoft,
    marginTop: 10,
  },
  dots: { flexDirection: 'row', marginTop: 40, gap: 8 },
  dot: { width: 7, height: 7, borderRadius: 4, backgroundColor: COLORS.midWater, marginHorizontal: 4 },
});
