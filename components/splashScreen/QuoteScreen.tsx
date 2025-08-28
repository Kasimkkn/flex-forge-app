import React = require("react");
import Qoutes from "@/assets/images/icons/quotes.svg";
import { ImageBackground, Text, View } from "react-native";

export default function QuoteScreen() {
    return (
        <ImageBackground
            source={require("../../assets/images/male-2.png")}
            className="flex-1 justify-end items-center px-6 pb-40 bg-black"
            resizeMode="cover"
        >
            <View className="bg-primary-500 rounded-3xl p-5 items-center justify-center mb-4">
                {/* Changed from bg-orange-500 to bg-primary-500 (your teal color) */}
                <Qoutes width={30} height={30} />
            </View>
            <Text className="text-white text-3xl font-roboto font-medium">
                "Remember, physical fitness can neither be acquired by wishful
                thinking nor by outright purchase."
            </Text>
            <Text className="text-white text-end font-semibold mt-10">— JOSEPH PILATES</Text>
        </ImageBackground>
    );
}