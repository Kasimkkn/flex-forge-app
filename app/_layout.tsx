import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Expo Router stack navigation */}
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#f8fafc" },
          headerTitleStyle: { fontWeight: "bold" },
          headerTintColor: "#0f172a",
        }}
      />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
