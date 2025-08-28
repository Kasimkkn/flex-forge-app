import React from "react";
import { Image, Text, View } from "react-native";

export default function SplashScreen() {
    return (
        <View className="flex-1 bg-orange-500 items-center justify-center">
            <Image source={require("../../assets/images/icons/big-plus.svg")} className="w-24 h-24 mb-4" />
            <Text className="text-white font-bold text-3xl">FlexForge</Text>
            <Text className="text-white mt-2">Your personal AI fitness coach.</Text>
        </View>
    );
}
