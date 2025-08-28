import BigPlus from "@/assets/images/icons/big-plus.svg";
import React from "react";
import { Text, View } from "react-native";


export default function SplashScreen() {
    return (
        <View className="flex-1 bg-orange-500 items-center justify-center">
            <BigPlus width={96} height={96} style={{ marginBottom: 16 }} />
            <Text className="text-white font-bold text-3xl">FlexForge</Text>
            <Text className="text-white mt-2">Your personal AI fitness coach.</Text>
        </View>
    );
}
