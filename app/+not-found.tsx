import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NotFoundScreen() {
  return (
    <SafeAreaView className="flex-1 bg-primary-800">
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-white text-4xl font-bold mb-4 text-center">
          404 - Page Not Found! ❌
        </Text>
        <Text className="text-white text-lg mb-8 text-center">
          The page you're looking for doesn't exist.
        </Text>

        {/* Debug info */}
        <View className="bg-primary-700 bg-opacity-20 p-4 rounded-lg mb-8">
          <Text className="text-white text-sm text-center">
            Debug: This means the route you're trying to navigate to doesn't exist in your app directory.
          </Text>
        </View>

        <Link href="/" className="bg-white px-6 py-3 rounded-full">
          <Text className="text-red-500 font-semibold text-lg">
            Go to Home Screen
          </Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}