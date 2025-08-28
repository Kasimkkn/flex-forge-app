import ProgressScreen from "@/components/splashScreen/ProgressScreen";
import QuoteScreen from "@/components/splashScreen/QuoteScreen";
import SplashScreen from "@/components/splashScreen/SplashScreen";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import React = require("react");


export default function IndexScreen() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setStep(1), 2000), // show Splash 2s
            setTimeout(() => setStep(2), 5000), // show Quote 3s
        ];
        return () => timers.forEach(clearTimeout);
    }, []);
    return (
        <SafeAreaView className="flex-1">
            {step === 0 && <SplashScreen />}
            {step === 1 && <QuoteScreen />}
            {step === 2 && <ProgressScreen />}
        </SafeAreaView>
    );
}