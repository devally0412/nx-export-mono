/**
 * Old custom configuration for React Native v0.71.
 * From @react-native/metro-config 0.72.1, it is no longer necessary to use a config function to access the complete default config.
 * Please port your custom configuration to metro.config.js.
 * Please see https://docs.expo.dev/guides/customizing-metro/ to learn about configuration.
 */
const { withNxMetro } = require('@nx/expo');
const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = (async () => {
  defaultConfig.transformer.babelTransformerPath = require.resolve(
    'react-native-svg-transformer'
  );
  defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(
    (ext) => ext !== 'svg'
  );
  defaultConfig.resolver.sourceExts.push('svg');
  return withNxMetro(defaultConfig, {
    // Change this to true to see debugging info.
    // Useful if you have issues resolving modules
    debug: true,
    // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx'
    extensions: [],
    // the project root to start the metro server
    projectRoot: __dirname,
    // Specify any additional (to projectRoot) watch folders, this is used to know which files to watch
    watchFolders: [],
  });
})();
