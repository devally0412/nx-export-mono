module.exports = {
  displayName: 'cats',
  resolver: '@nrwl/jest/plugins/resolver',
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons)/)'
  ],
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  moduleNameMapper: {
    '.svg': '@nrwl/expo/plugins/jest/svg-mock',
    uuid: require.resolve('uuid'),
  },
};
