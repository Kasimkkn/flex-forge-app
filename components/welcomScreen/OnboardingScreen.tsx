import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import ButtonWithIcon from '../ui/ButtonWithIcon';
import LeftRightButton from '../ui/LeftRightButton';

interface OnboardingData {
    id: number;
    backgroundImage: any;
    title: string;
    subtitle: string;
    primaryButton?: string;
    secondaryButton?: string;
    hasNavigation?: boolean;
}

const onboardingData: OnboardingData[] = [
    {
        id: 1,
        backgroundImage: require('@/assets/images/female-3.png'), // Adjust path as needed
        title: 'Welcome To\nsandOwl UI Kit!',
        subtitle: 'Your personal fitness AI Assistant 🔥',
        primaryButton: 'Get Started',
        secondaryButton: 'Already have account? Sign In',
        hasNavigation: false,
    },
    {
        id: 2,
        backgroundImage: require('@/assets/images/female-2.png'),
        title: 'Personalized\nFitness Plans',
        subtitle: 'Choose your own fitness journey with AI. ✨',
        hasNavigation: true,
    },
    {
        id: 3,
        backgroundImage: require('@/assets/images/fitness-machine-1.png'),
        title: 'Extensive Workout\nLibraries',
        subtitle: 'Explore ~100K exercises made for you! 💪',
        hasNavigation: true,
    },
    {
        id: 4,
        backgroundImage: require('@/assets/images/heart-beat.png'),
        title: 'Health Metrics &\nFitness Analytics',
        subtitle: 'Monitor your health profile with ease. 📱',
        hasNavigation: true,
    },
    {
        id: 5,
        backgroundImage: require('@/assets/images/green-veggeis.png'),
        title: 'Nutrition & Diet\nGuidance',
        subtitle: 'Lose weight and get fit with sandOwl 🥬',
        hasNavigation: true,
    },
    {
        id: 6,
        backgroundImage: require('@/assets/images/virtual-robot.png'),
        title: 'Virtual AI Coach\nMentoring',
        subtitle: 'Say goodbye to manual coaching! 🤖',
        hasNavigation: true,
    },
];

export default function OnboardingFlow() {
    const [currentScreen, setCurrentScreen] = useState(0);

    const handleNext = () => {
        if (currentScreen < onboardingData.length - 1) {
            setCurrentScreen(currentScreen + 1);
        } else {
            // Navigate to main app
            console.log('Complete onboarding');
        }
    };

    const handlePrevious = () => {
        if (currentScreen > 0) {
            setCurrentScreen(currentScreen - 1);
        }
    };

    const handleGetStarted = () => {
        setCurrentScreen(1);
    };

    const handleSignIn = () => {
        console.log('Navigate to Sign In');
    };

    const currentData = onboardingData[currentScreen];

    // Welcome Screen (First Screen)
    if (currentScreen === 0) {
        return (
            <SafeAreaView className="flex-1">
                <ImageBackground
                    source={currentData.backgroundImage}
                    className="flex-1"
                    resizeMode="cover"
                >
                    {/* Logo */}
                    <View className="absolute top-16 left-1/2 transform -translate-x-1/2">
                        <View className="w-8 h-8 bg-white rounded items-center justify-center">
                            <Text className="text-primary-500 text-xl font-bold">+</Text>
                        </View>
                    </View>

                    {/* Content */}
                    <View className="flex-1 justify-end pb-20 px-6">
                        <Text className="text-white text-4xl font-bold mb-4 text-center">
                            {currentData.title}
                        </Text>
                        <Text className="text-white text-lg mb-8 text-center opacity-90">
                            {currentData.subtitle}
                        </Text>

                        <ButtonWithIcon label={currentData.primaryButton} onPress={handleGetStarted} />

                        {/* Sign In Link */}
                        <TouchableOpacity onPress={handleSignIn} className="items-center">
                            <Text className="text-white text-base opacity-80">
                                {currentData.secondaryButton}
                            </Text>
                        </TouchableOpacity>

                        {/* Page Indicator */}
                        <View className="flex-row justify-center mt-8">
                            {onboardingData.map((_, index) => (
                                <View
                                    key={index}
                                    className={`w-2 h-2 rounded-full mx-1 ${index === 0 ? 'bg-white' : 'bg-white opacity-30'
                                        }`}
                                />
                            ))}
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }

    // Other Onboarding Screens
    return (
        <SafeAreaView className="flex-1">
            <ImageBackground
                source={currentData.backgroundImage}
                className="flex-1"
                resizeMode="cover"
            >
                {/* Content */}
                <View className="flex-1 justify-end pb-32 px-6">
                    <Text className="text-white text-4xl font-bold mb-4 text-center">
                        {currentData.title}
                    </Text>
                    <Text className="text-white text-lg mb-12 text-center opacity-90">
                        {currentData.subtitle}
                    </Text>
                </View>

                {/* Bottom Navigation */}
                <View className="absolute bottom-8 left-0 right-0 px-6">
                    {/* Navigation Buttons */}
                    <View className="flex-row justify-center items-center mb-6">
                        {/* Left Button */}
                        <LeftRightButton showLeft onLeftPress={handlePrevious} />
                        {/* Right Button */}
                        {currentData.hasNavigation && (
                            <LeftRightButton showRight onRightPress={handleNext} />
                        )}

                    </View>

                    {/* Page Indicator */}
                    <View className="flex-row justify-center">
                        {onboardingData.map((_, index) => (
                            <View
                                key={index}
                                className={`w-2 h-2 rounded-full mx-1 ${index === currentScreen ? 'bg-white' : 'bg-white opacity-30'
                                    }`}
                            />
                        ))}
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}