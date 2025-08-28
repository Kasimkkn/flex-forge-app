import { useFonts } from 'expo-font';
import { Slot } from "expo-router";
import React from "react";
import { Text } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import './global.css';

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        'Roboto-regular': require('../assets/fonts/Roboto-regular.ttf'),
        'Display-Bold': require('../assets/fonts/Display-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return <Text>Loading fonts...</Text>;
    }

    return (
        <SafeAreaProvider>
            <Slot />
        </SafeAreaProvider>
    );
}