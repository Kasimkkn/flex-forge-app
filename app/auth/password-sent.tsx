import { useNavigation } from '@react-navigation/native'
import { CheckCircle, X } from 'lucide-react-native'
import React from 'react'
import {
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

// You'll need to import your background image
// import gymBg from '../assets/gym-bg.jpg'

export default function PasswordSentScreen() {
    const navigation = useNavigation()

    const handleResendPassword = () => {
        console.log('Resending password reset email')
        // Navigate back to reset password screen
        navigation.navigate('ResetPassword' as never)
    }

    const handleClose = () => {
        // Navigate back to sign in screen
        navigation.navigate('SignIn' as never)
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1"
        >
            <ImageBackground
                // source={gymBg} // Uncomment when you have the image
                className="flex-1 bg-black"
                resizeMode="cover"
            >
                <SafeAreaView className="flex-1">
                    {/* Close Button */}
                    <View className="absolute top-12 right-6 z-20">
                        <TouchableOpacity
                            onPress={handleClose}
                            className="w-10 h-10 items-center justify-center"
                            activeOpacity={0.7}
                        >
                            <X size={24} color="rgba(255,255,255,0.6)" />
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1 }}
                        keyboardShouldPersistTaps="handled"
                    >
                        <View className="flex-1 justify-center px-6 py-12">
                            <View className="w-full max-w-sm mx-auto space-y-8">

                                {/* Success Content */}
                                <View className="items-center space-y-4">
                                    {/* Success Icon */}
                                    <View className="w-24 h-24 bg-green-500 rounded-full items-center justify-center">
                                        <CheckCircle size={48} color="white" />
                                    </View>

                                    {/* Success Title */}
                                    <Text className="text-3xl font-bold text-white text-center">
                                        Password Sent!
                                    </Text>

                                    {/* Success Message */}
                                    <View className="max-w-sm">
                                        <Text className="text-white/70 text-center text-base leading-relaxed">
                                            We've sent the password to{' '}
                                            <Text className="font-semibold text-white">**221b@gmail.com</Text>
                                            . Resend if the password is not received! 🔥
                                        </Text>
                                    </View>
                                </View>

                                {/* Re-send Button */}
                                <TouchableOpacity
                                    onPress={handleResendPassword}
                                    className="w-full bg-orange-500 py-4 rounded-xl shadow-lg active:scale-95"
                                    style={{
                                        shadowColor: '#f97316',
                                        shadowOffset: { width: 0, height: 4 },
                                        shadowOpacity: 0.3,
                                        shadowRadius: 8,
                                    }}
                                >
                                    <Text className="text-white font-semibold text-center text-lg">
                                        Re-Send Password
                                    </Text>
                                </TouchableOpacity>

                                {/* Additional Actions */}
                                <View className="items-center space-y-4">
                                    <TouchableOpacity onPress={handleClose}>
                                        <Text className="text-white/70 text-center">
                                            Back to Sign In
                                        </Text>
                                    </TouchableOpacity>

                                    {/* Help Text */}
                                    <View className="max-w-xs">
                                        <Text className="text-white/50 text-center text-sm">
                                            Didn't receive an email? Check your spam folder or try again.
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}