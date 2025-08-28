import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignInScreen() {
    return (
        <SafeAreaView className="flex-1 bg-primary-500">
            <View className="flex-1 items-center justify-center px-6">
                <Text className="text-white text-4xl font-bold mb-4 text-center">
                    Sign In Screen
                </Text>
                <Text className="text-white text-lg text-center">
                    This is where your sign-in form would go
                </Text>
            </View>
        </SafeAreaView>
    );
}