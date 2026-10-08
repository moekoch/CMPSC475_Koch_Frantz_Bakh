// src/app/index.tsx
// This file is the "/" route — the first screen Expo Router loads on launch.
// We render the Worqarium loader here instead of the stock template screen.

import { useScreenNav } from '@/hooks/useScreenNav';
import LoadingScreen from '@/screens/loadingScreen';

export default function Index() {
  const navigation = useScreenNav();
  return <LoadingScreen navigation={navigation} />;
}
