// src/app/join-session.tsx
// New route: /join-session — reached via router.push from LoadingScreen.

import JoinSessionScreen from '@/screens/joinSessionScreen';
import { useScreenNav } from '@/hooks/useScreenNav';

export default function JoinSession() {
  const navigation = useScreenNav();
  return <JoinSessionScreen navigation={navigation} />;
}
