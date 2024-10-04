const OFFICIAL_PROJECT_ID = '675cb1f0-fa3c-11e8-ac99-6374d9643cb2';
const PREVIEW_PROJECT_ID = 'e7f3dda2-c182-4f86-bae0-9c389b4add3f';
const PROJECT_ID = process.env.EAS_PROJECT_ID ?? PREVIEW_PROJECT_ID;

export default ({ config } = {}) => ({
  ...config,
  extra: {
    eas: {
      projectId: PROJECT_ID,
    },
  },
  updates: {
    enabled: true,
    fallbackToCacheTimeout: 3000,
    url: `https://u.expo.dev/${PROJECT_ID}`,
  },
  plugins: [
    [
      'expo-build-properties',
      {
        android: {
          minSdkVersion: 25,
        },
      },
    ],
    '@logrocket/react-native',
    'expo-font',
  ],
});
