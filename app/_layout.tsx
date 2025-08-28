import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./global.css";
import React = require("react");

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        "Roboto-regular": require("../assets/fonts/Roboto-regular.ttf"),
        "Display-Bold": require("../assets/fonts/Display-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading fonts...</Text>
            </View>
        );
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <Slot />
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}