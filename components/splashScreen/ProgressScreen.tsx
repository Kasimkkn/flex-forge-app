import React, { useEffect, useState } from "react";
import { ImageBackground, Text, View } from "react-native";

export default function ProgressScreen() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((p) => (p < 100 ? p + 2 : 100));
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <ImageBackground
            source={require("../../assets/images/splash-4-bg.png")}
            className="flex-1 items-center justify-center"
            resizeMode="cover"
        >
            <View className="bg-black/60 w-full h-full items-center justify-center">
                <Text className="text-white text-5xl font-bold">
                    {progress}
                    <Text className="text-orange-500">%</Text>
                </Text>
            </View>
        </ImageBackground>
    );
}
