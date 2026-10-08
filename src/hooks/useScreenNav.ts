// src/hooks/useScreenNav.ts
//
// Adapter so the existing screens/*.js files (which expect a
// `navigation={{ navigate, goBack }}` prop, written before expo-router
// was wired in) can run unmodified on top of expo-router.
//
// Add new entries to ROUTES as you create route files in src/app/.

import { useRouter } from 'expo-router';

const ROUTES: Record<string, string> = {
  loading: '/',
  joinSession: '/join-session',
  activeSession: '/active-session',
  games: '/games',
  goFish: '/go-fish',
  tictactoe: '/tictactoe',
  avatar: '/avatar',
  store: '/store',
  botQuery: '/bot-query',
};

export function useScreenNav() {
  const router = useRouter();

  return {
    navigate: (screenName: string, params?: Record<string, string>) => {
      const path = ROUTES[screenName];
      if (!path) {
        console.warn(`useScreenNav: no route mapped for "${screenName}"`);
        return;
      }
      router.push(params ? { pathname: path, params } : path);
    },
    goBack: () => router.back(),
  };
}
