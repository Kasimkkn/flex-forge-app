import { useNavigation } from '@react-navigation/native'
import { Lock, Mail } from 'lucide-react-native'
import React, { useState } from 'react'
import {
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

// You'll need to import your background image
// import gymBg from '../assets/gym-bg.jpg'

type ResetMethod = 'email' | '2fa' | 'google'

export default function ResetPasswordScreen() {
    const [selectedMethod, setSelectedMethod] = useState<ResetMethod>('email')
    const navigation = useNavigation()

    const handleResetPassword = () => {
        console.log(`Resetting password via ${selectedMethod}`)
        // Navigate to password sent confirmation - adjust route name as needed
        navigation.navigate('PasswordSent' as never)
    }

    const resetOptions = [
        {
            id: 'email' as ResetMethod,
            title: 'Send via Email',
            description: 'Seamlessly reset your password via email address.',
            icon: <Mail size={24} color="white" />,
            bgColor: 'bg-orange-500'
        },
        {
            id: '2fa' as ResetMethod,
            title: 'Send via 2FA',
            description: 'Seamlessly reset your password via 2 Factors.',
            icon: <Lock size={24} color="white" />,
            bgColor: 'bg-blue-500'
        },
        {
            id: 'google' as ResetMethod,
            title: 'Send via Google Auth',
            description: 'Seamlessly reset your password via gAuth.',
            icon: <View className="w-6 h-6 rounded-full bg-white" />,
            bgColor: 'bg-purple-500'
        }
    ]

    const ResetOptionCard = ({
        option,
        isSelected,
        onPress
    }: {
        option: typeof resetOptions[0]
        isSelected: boolean
        onPress: () => void
    }) => (
        <TouchableOpacity
            onPress={onPress}
            className={`bg-gray-800 rounded-xl p-4 flex-row items-center space-x-4 ${isSelected ? 'bg-gray-700 border-2 border-orange-500' : 'border-2 border-transparent'
                }`}
            activeOpacity={0.7}
        >
            <View className={`w-12 h-12 ${option.bgColor} rounded-xl items-center justify-center`}>
                {option.icon}
            </View>
            <View className="flex-1">
                <Text className="text-white font-semibold text-base">{option.title}</Text>
                <Text className="text-white/60 text-sm mt-1">{option.description}</Text>
            </View>
            {/* Selection Indicator */}
            {isSelected && (
                <View className="w-5 h-5 bg-orange-500 rounded-full items-center justify-center">
                    <View className="w-2 h-2 bg-white rounded-full" />
                </View>
            )}
        </TouchableOpacity>
    )

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1"
        >
            <ImageBackground
                // source={gymBg} // Uncomment when you have the image
                className="flex-1"
                resizeMode="cover"
            >
                {/* Overlay */}
                <View className="absolute inset-0 bg-gray-900/90" />

                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View className="flex-1 justify-center px-6 py-12">
                        <View className="w-full max-w-sm mx-auto space-y-6">

                            {/* Header */}
                            <View className="items-center space-y-2">
                                <Text className="text-3xl font-bold text-white text-center">
                                    Reset Password
                                </Text>
                                <Text className="text-white/70 text-center">
                                    Select what method you'd like to reset.
                                </Text>
                            </View>

                            {/* Reset Options */}
                            <View className="space-y-4">
                                {resetOptions.map((option) => (
                                    <ResetOptionCard
                                        key={option.id}
                                        option={option}
                                        isSelected={selectedMethod === option.id}
                                        onPress={() => setSelectedMethod(option.id)}
                                    />
                                ))}
                            </View>

                            {/* Reset Button */}
                            <TouchableOpacity
                                onPress={handleResetPassword}
                                className="w-full bg-orange-500 py-4 rounded-xl shadow-lg active:scale-95"
                                style={{
                                    shadowColor: '#f97316',
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 8,
                                }}
                            >
                                <Text className="text-white font-semibold text-center text-lg">
                                    Reset Password
                                </Text>
                            </TouchableOpacity>

                            {/* Back to Sign In */}
                            <View className="items-center">
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <Text className="text-orange-500 font-medium">
                                        Back to Sign In
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}