import { router } from 'expo-router';
import { ImageBackground, Pressable, Text, View } from 'react-native';
import ButtonWithIcon from '../ui/ButtonWithIcon';
import LeftRightButton from '../ui/LeftRightButton';
import React = require('react');

interface OnboardingData {
    id: number;
    backgroundImage: any;
    title: string;
    subtitle: string;
    primaryButton?: string;
    secondaryButton?: string;
    hasNavigation?: boolean;
    redirectTo?: string;
    redirectLabel?: string;
}

const onboardingData: OnboardingData[] = [
    {
        id: 1,
        backgroundImage: require('@/assets/images/female-3.png'),
        title: 'Welcome To\n FlexForge Fitness',
        subtitle: 'Your personal fitness AI Assistant 🔥',
        primaryButton: 'Get Started',
        secondaryButton: 'Already have account?',
        redirectLabel: 'Sign In',
        redirectTo: '/signin',
        hasNavigation: false,
    },
    {
        id: 2,
        backgroundImage: require('@/assets/images/female-2.png'),
        title: 'Personalized\nFitness Plans',
        subtitle: 'Choose your own fitness journey with AI. 🏋️‍♀️',
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
        subtitle: 'Monitor your health profile with ease. 📈',
        hasNavigation: true,
    },
    {
        id: 5,
        backgroundImage: require('@/assets/images/green-veggeis.png'),
        title: 'Nutrition & Diet\nGuidance',
        subtitle: 'Lose weight and get fit with sandOwl 🥒',
        hasNavigation: true,
    },
    {
        id: 6,
        backgroundImage: require('@/assets/images/virtual-robot.png'),
        title: 'Virtual AI Coach\nMentoring',
        subtitle: 'Say goodbye to manual coaching! 👋',
        hasNavigation: true,
    },
];

export default function OnboardingFlow() {
    const [currentScreen, setCurrentScreen] = React.useState(0);

    const handleNext = () => {
        console.log('Next button pressed, current screen:', currentScreen);
        if (currentScreen < onboardingData.length - 1) {
            setCurrentScreen(currentScreen + 1);
        } else {
            console.log('Complete onboarding - navigating to home');
            router.replace('/');
        }
    };

    const handlePrevious = () => {
        console.log('Previous button pressed, current screen:', currentScreen);
        if (currentScreen > 0) {
            setCurrentScreen(currentScreen - 1);
        }
    };

    const handleGetStarted = () => {
        console.log('Get Started pressed - moving to screen 1');
        setCurrentScreen(1);
    };

    const handleSignIn = () => {
        console.log('Sign In pressed - navigating to signin');
        // Use router.push instead of Link for programmatic navigation
        router.push('/signin');
    };

    console.log("🔄 Current Screen:", currentScreen);
    const currentData = onboardingData[currentScreen];

    // Welcome Screen (First Screen)
    if (currentScreen === 0) {
        return (
            <ImageBackground
                source={currentData.backgroundImage}
                style={{ flex: 1 }}
                resizeMode="cover"
            >
                <View className="flex-1 justify-end items-center pb-20 px-6">
                    <Text style={{ fontWeight: '900' }} className="text-white text-4xl mb-4 text-center tracking-widest">
                        {currentData.title}
                    </Text>
                    <Text className="text-white text-lg mb-8 text-center opacity-90">
                        {currentData.subtitle}
                    </Text>

                    <ButtonWithIcon
                        label={currentData.primaryButton}
                        onPress={handleGetStarted}
                        className='w-56 px-10 py-4'
                    />

                    {/* Sign In Link - Using TouchableOpacity instead of Link */}
                    <Pressable onPress={handleSignIn} className="mt-6">
                        <View className="flex flex-row gap-2">
                            <Text className="text-white text-base opacity-80">
                                {currentData.secondaryButton}
                            </Text>
                            <Text className="text-primary-500 underline font-bold text-base opacity-80">
                                {currentData.redirectLabel}
                            </Text>
                        </View>
                    </Pressable>
                </View>
            </ImageBackground>
        );
    }

    // Other Onboarding Screens
    return (
        <ImageBackground
            source={currentData.backgroundImage}
            style={{ flex: 1 }}
            resizeMode="cover"
        >
            {/* Content */}
            <View className='absolute inset-0 bg-black opacity-35' />
            <View className="flex-1 justify-end pb-32 px-6">
                <Text className="text-white text-4xl font-extrabold mb-4 text-center">
                    {currentData.title}
                </Text>
                <Text className="text-white text-xl mb-12 text-center font-medium">
                    {currentData.subtitle}
                </Text>
            </View>

            {/* Bottom Navigation */}
            <View className="absolute bottom-8 left-0 right-0 px-6">
                {/* Navigation Buttons */}
                <View className="flex flex-row items-center justify-center gap-2 mb-6 ">
                    {/* Left Button */}
                    <LeftRightButton
                        showLeft
                        showRight={false}
                        onLeftPress={handlePrevious}
                        className='col-span-1'
                    />

                    {/* Right Button */}
                    {currentData.hasNavigation && (
                        <LeftRightButton
                            showLeft={false}
                            showRight
                            onRightPress={handleNext}
                        />
                    )}
                </View>
            </View>
        </ImageBackground>
    );
}