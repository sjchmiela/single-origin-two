const OFFICIAL_PROJECT_ID = '323a16ae-570a-46b1-926e-fb4ff5563f02';

export default ({ config } = {}) => ({
  ...config,
  extra: {
    eas: {
      projectId: process.env.EAS_PROJECT_ID ?? OFFICIAL_PROJECT_ID,
    },
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
