import BigPlus from "@/assets/images/icons/big-plus.svg";
import { Text, View } from "react-native";
import React = require("react");

export default function SplashScreen() {
    return (
        <View className="flex-1 bg-primary-500 items-center justify-center">
            {/* You can also use: bg-flexforge-teal or bg-background-accent */}
            <BigPlus width={96} height={96} style={{ marginBottom: 16 }} />
            <Text className="text-white font-extrabold text-5xl font-display">FlexForge</Text>
            <Text className="text-white text-2xl mt-2">Your personal AI fitness coach.</Text>
        </View>
    );
}