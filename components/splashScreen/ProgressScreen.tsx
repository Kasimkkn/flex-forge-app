import React, { useEffect, useState } from "react";
import { ImageBackground, Text, View } from "react-native";

export default function ProgressScreen() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((p) => (p < 100 ? p + 2 : 100));
        }, 10);
        return () => clearInterval(interval);
    }, []);

    return (
        <ImageBackground
            source={require("../../assets/images/splash-4-bg.png")}
            className="flex-1 items-center justify-center"
            resizeMode="cover"
        >
            <View className="w-full h-full items-center justify-center">
                <Text className="text-white text-7xl font-extrabold font-display">
                    {progress}
                    <Text className="text-orange-500 text-5xl">%</Text>
                </Text>
            </View>
        </ImageBackground>
    );
}
