import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Bubbles from '../components/aquarium/Bubbles';
import FishSprite from '../components/aquarium/FishSprite';
import GlassPanel from '../components/aquarium/GlassPanel';
import OrganicButton from '../components/aquarium/OrganicButton';
import WaterBackground from '../components/aquarium/WaterBackground';
import { COLORS, FONTS } from '../constants/theme';

const SCHOOL = [
  { species: 'blueTang', width: 70, top: '18%', left: '8%' },
  { species: 'moorishIdol', width: 56, top: '12%', left: '62%' },
  { species: 'threadfinButterflyfish', width: 64, top: '30%', left: '40%' },
  { species: 'schoolingBannerfish', width: 60, top: '24%', left: '78%' },
  { species: 'linedButterflyfish', width: 58, top: '40%', left: '18%' },
];

/**
 * A quiet moment before diving in: the tank is already alive with other
 * fish swimming by, and one panel invites the user into a session. This is
 * intentionally sparse — the water itself is the content here.
 */
export default function JoinSessionScreen({ navigation }) {
  return (
    <WaterBackground depth="mid">
      <Bubbles count={9} />

      <View style={styles.topBar}>
        <Pressable onPress={() => navigation?.goBack?.()} hitSlop={10}>
          <Ionicons name="chevron-back" size={24} color={COLORS.pearl} />
        </Pressable>
        <Pressable hitSlop={10}>
          <Ionicons name="notifications-outline" size={22} color={COLORS.pearl} />
        </Pressable>
      </View>

      {SCHOOL.map((f, i) => (
        <FishSprite key={i} species={f.species} width={f.width} swim style={{ position: 'absolute', top: f.top, left: f.left }} />
      ))}

      <View style={styles.bottomArea}>
        <GlassPanel corner="organicA" style={styles.panel}>
          <Text style={styles.heading}>Ready to join a session?</Text>
          <Text style={styles.sub}>Four friends are already coworking in the reef.</Text>
          <OrganicButton
            label="Dive In"
            icon={<Ionicons name="arrow-down-circle" size={18} color={COLORS.pearl} />}
            onPress={() => navigation?.navigate?.('ActiveSession')}
            style={{ marginTop: 16, alignSelf: 'flex-start' }}
          />
        </GlassPanel>
      </View>
    </WaterBackground>
  );
}

const styles = StyleSheet.create({
  topBar: {
    position: 'absolute',
    top: 56,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomArea: { flex: 1, justifyContent: 'flex-end', padding: 20, paddingBottom: 48 },
  panel: { padding: 20 },
  heading: { fontFamily: FONTS.heading, fontSize: 20, color: COLORS.ink },
  sub: { fontFamily: FONTS.body, fontSize: 14, color: COLORS.inkSoft, marginTop: 6 },
});
