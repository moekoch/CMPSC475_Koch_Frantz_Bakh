// src/screens/joinSessionScreen.js
//
// Matches the "Join Session (Mobile)" Figma mockup: ocean background with
// fish swimming freely, floating settings + chat icons top-right, a
// centered card prompting the user to join, and the Worqarium bottom nav.

import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FishSprite from '../components/aquarium/FishSprite';
import WaterBackground from '../components/aquarium/WaterBackground';
import WorqariumNav from '../components/aquarium/WorqariumNav';
import { FISH_KEYS } from '../constants/fishAssets';
import { COLORS, FONTS, RADII } from '../constants/theme';

export default function JoinSessionScreen({ navigation }) {
  const keyAt = (i) => (FISH_KEYS.length ? FISH_KEYS[i % FISH_KEYS.length] : null);

  const handleDiveIn = () => navigation?.navigate('activeSession');

  return (
    <WaterBackground style={styles.root}>
      {/* swimming fish, scattered around the card */}
      <FishSprite fishKey={keyAt(0)} width={90} style={{ top: 90, left: 20 }} />
      <FishSprite fishKey={keyAt(1)} width={60} style={{ top: 64, left: -8 }} mirror />
      <FishSprite fishKey={keyAt(2)} width={56} style={{ top: 220, right: 12 }} />
      <FishSprite fishKey={keyAt(3)} width={72} style={{ bottom: 170, left: 8 }} />
      <FishSprite fishKey={keyAt(4)} width={92} style={{ bottom: 200, right: -6 }} mirror />
      <FishSprite fishKey={keyAt(5)} width={40} style={{ bottom: 110, left: 120 }} />

      {/* floating action icons */}
      <View style={styles.iconStack}>
        <Pressable style={styles.iconBtn} hitSlop={8}>
          <Ionicons name="settings-outline" size={22} color={COLORS.ink} />
        </Pressable>
        <Pressable style={styles.iconBtn} hitSlop={8}>
          <Ionicons name="chatbubble-outline" size={20} color={COLORS.ink} />
        </Pressable>
      </View>

      {/* central prompt card */}
      <View style={styles.cardWrap}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Ready to join{'\n'}a session?</Text>
          <Pressable style={styles.diveBtn} onPress={handleDiveIn}>
            <Text style={styles.diveBtnText}>Dive in!</Text>
          </Pressable>
        </View>
      </View>

      <WorqariumNav active="home" navigation={navigation} />
    </WaterBackground>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  iconStack: {
    position: 'absolute',
    top: 48,
    right: 20,
    gap: 12,
    alignItems: 'center',
  },
  iconBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.85)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  card: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: COLORS.pearl,
    ...RADII.organicA,
    paddingVertical: 36,
    paddingHorizontal: 28,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  cardTitle: {
    fontFamily: FONTS.heading,
    fontSize: 26,
    lineHeight: 32,
    textAlign: 'center',
    color: COLORS.ink,
    marginBottom: 20,
  },
  diveBtn: {
    backgroundColor: COLORS.deepWater,
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 8,
  },
  diveBtnText: {
    fontFamily: FONTS.bodyBold,
    fontSize: 18,
    color: COLORS.pearl,
  },
});