// Local mock data. No backend calls live here — screens import this to render
// UI while real endpoints are wired up. Replace with API/hooks when ready.

export const CURRENT_USER = {
  id: 'u_001',
  name: 'Mairead',
  fish: 'orangeClownfish',
  status: 'focusing',
  pearls: 240, // in-app currency, earned from focus sessions
};

export const MOCK_PARTICIPANTS = [
  { id: 'p1', name: 'Jonah', fish: 'blueTang', status: 'focusing', minutes: 42 },
  { id: 'p2', name: 'Riley', fish: 'moorishIdol', status: 'on a break', minutes: 12 },
  { id: 'p3', name: 'Theo', fish: 'threadfinButterflyfish', status: 'focusing', minutes: 65 },
  { id: 'p4', name: 'Sam', fish: 'linedButterflyfish', status: 'focusing', minutes: 8 },
];

export const MOCK_FRIENDS = [
  { id: 'f1', name: 'Jonah', fish: 'blueTang', online: true, activity: 'Coworking · 42m' },
  { id: 'f2', name: 'Riley', fish: 'moorishIdol', online: true, activity: 'Playing Go Fish' },
  { id: 'f3', name: 'Theo', fish: 'threadfinButterflyfish', online: false, activity: 'Last seen 3h ago' },
  { id: 'f4', name: 'Sam', fish: 'schoolingBannerfish', online: false, activity: 'Last seen yesterday' },
];

export const MOCK_GAMES = [
  {
    id: 'tictactoe',
    title: 'Tic Tac Toe',
    tagline: 'Clownfish vs. Starfish',
    route: 'TicTacToe',
    tint: '#ff7a59',
    fish: 'orangeClownfish',
  },
  {
    id: 'gofish',
    title: 'Go Fish',
    tagline: 'The classic, underwater',
    route: 'GoFish',
    tint: '#2f9fcf',
    fish: 'blueTang',
  },
  {
    id: 'hangman',
    title: 'Hangman',
    tagline: 'Coming up from the deep',
    route: 'Hangman',
    tint: '#1f9d75',
    fish: 'moorishIdol',
    comingSoon: true,
  },
];

export const MOCK_STORE_ITEMS = [
  { id: 's1', name: 'Globe Trinket', category: 'Decor', price: 60, icon: 'earth' },
  { id: 's2', name: 'Treasure Satchel', category: 'Decor', price: 45, icon: 'bag-personal' },
  { id: 's3', name: 'Kelp Frond', category: 'Plant', price: 30, icon: 'leaf' },
  { id: 's4', name: 'Tiny Spectacles', category: 'Accessory', price: 55, icon: 'glasses' },
  { id: 's5', name: 'Sunken Shell', category: 'Decor', price: 25, icon: 'shell' },
  { id: 's6', name: 'Pearl Strand', category: 'Accessory', price: 80, icon: 'circle-multiple' },
];

export const MOCK_FISH_OPTIONS = [
  'orangeClownfish',
  'blueTang',
  'moorishIdol',
  'linedButterflyfish',
  'threadfinButterflyfish',
  'schoolingBannerfish',
];

// Simulated assistant — swap for a real API call later.
export const MOCK_BOT_RESPONSES = [
  "I'm Pip — I live in the reef by the help desk. Ask me anything about Worqarium!",
  "You can invite friends to a coworking session from the Friends tab.",
  "Pearls are earned by completing focus sessions — spend them in the Store.",
  "Try Go Fish or Tic Tac Toe with a friend during a break!",
  "Your fish's mood changes with your focus streak. Keep swimming!",
];

export function mockBotReply(/* userText */) {
  // Deterministic-feeling mock: pick based on message length so it still
  // feels "responsive" without faking a real model call.
  return new Promise((resolve) => {
    setTimeout(() => {
      const idx = Math.floor(Math.random() * MOCK_BOT_RESPONSES.length);
      resolve(MOCK_BOT_RESPONSES[idx]);
    }, 700);
  });
}
