import { router } from "expo-router"; // Change this
import React, { useEffect, useState } from "react";
import { ImageBackground, Text, View } from "react-native";

export default function ProgressScreen() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((p) => (p < 100 ? p + 2 : 100));
        }, 50); // Increased to 50ms for slower progress
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            router.push("/welcome/index");
        }
    }, [progress]);

    return (
        <ImageBackground
            source={require("../../assets/images/splash-4-bg.png")}
            className="flex-1 items-center justify-center"
            resizeMode="cover"
        >
            <View className="w-full flex flex-row h-full items-center justify-center">
                <Text className="text-white text-7xl font-extrabold ">
                    {progress}
                </Text>
                <Text className="mx-2 text-primary-500 text-5xl">%</Text>
            </View>
        </ImageBackground>
    );
}