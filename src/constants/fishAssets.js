// Central registry of the aquarium's inhabitants.
// Each species maps to its PNG (transparent) + swim metadata used by <FishSprite />.

export const FISH_SPECIES = {
  orangeClownfish: {
    label: 'Clownfish',
    source: require('../../assets/images/fish/orangeClownfish.png'),
    aspect: 1000 / 667,
    baseTint: '#ff7a3d',
  },
  blueTang: {
    label: 'Blue Tang',
    source: require('../../assets/images/fish/blueTang.png'),
    aspect: 1280 / 857,
    baseTint: '#2d8fd6',
  },
  blueTangDistant: {
    label: 'Blue Tang (distant)',
    source: require('../../assets/images/fish/blueTang(background).png'),
    aspect: 1919 / 1279,
    baseTint: '#2d8fd6',
  },
  linedButterflyfish: {
    label: 'Lined Butterflyfish',
    source: require('../../assets/images/fish/linedButterflyfish.png'),
    aspect: 2000 / 1333,
    baseTint: '#f5f1e6',
  },
  moorishIdol: {
    label: 'Moorish Idol',
    source: require('../../assets/images/fish/moorishIdol.png'),
    aspect: 1280 / 720,
    baseTint: '#f2d94e',
  },
  clownfishDistant: {
    label: 'Clownfish (distant)',
    source: require('../../assets/images/fish/ocellarisClownfish(distant).png'),
    aspect: 1623 / 1072,
    baseTint: '#ff7a3d',
  },
  schoolingBannerfish: {
    label: 'Schooling Bannerfish',
    source: require('../../assets/images/fish/schoolingBannerfish.png'),
    aspect: 1600 / 1067,
    baseTint: '#f5f1e6',
  },
  threadfinButterflyfish: {
    label: 'Threadfin Butterflyfish',
    source: require('../../assets/images/fish/threadfinButterflyfish.png'),
    aspect: 1800 / 1200,
    baseTint: '#f2e9c9',
  },
};

export const FISH_KEYS = Object.keys(FISH_SPECIES);

export const getFish = (key) => FISH_SPECIES[key] || FISH_SPECIES.orangeClownfish;
