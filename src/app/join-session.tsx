// src/app/join-session.tsx
// New route: /join-session — reached via router.push from LoadingScreen.

import { useScreenNav } from '@/hooks/useScreenNav';
import JoinSessionScreen from '@/screens/joinSessionScreen';

export default function JoinSession() {
  const navigation = useScreenNav();
  return <JoinSessionScreen navigation={navigation} />;
}
