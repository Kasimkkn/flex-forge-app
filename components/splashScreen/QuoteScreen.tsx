import React from "react";
import { ImageBackground, Text, View } from "react-native";

export default function QuoteScreen() {
    return (
        <ImageBackground
            source={require("../../assets/images/male-2.png")}
            className="flex-1 justify-end px-6 pb-12 bg-black"
            resizeMode="cover"
        >
            <View className="bg-orange-500 w-10 h-10 rounded-full items-center justify-center mb-4">
                <Text className="text-white text-lg">“</Text>
            </View>
            <Text className="text-white text-lg font-medium leading-6">
                "Remember, physical fitness can neither be acquired by wishful
                thinking nor by outright purchase."
            </Text>
            <Text className="text-white mt-3 font-semibold">— JOSEPH PILATES</Text>
        </ImageBackground>
    );
}
