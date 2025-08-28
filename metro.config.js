const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const defaultConfig = getDefaultConfig(__dirname);

const { resolver: { sourceExts, assetExts }, transformer } = defaultConfig;

const config = {
    transformer: {
        ...transformer,
        babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
        assetExts: assetExts.filter(ext => ext !== "svg"),
        sourceExts: [...sourceExts, "svg"],
    },
};

module.exports = withNativeWind(config, { input: './global.css' });
