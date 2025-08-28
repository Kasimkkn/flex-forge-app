import BgImage from '@/assets/images/chestpressdark.png'
import ButtonWithIcon from '@/components/ui/ButtonWithIcon'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRouter } from 'expo-router'
import { Eye, EyeOff, Facebook, Instagram, Linkedin, Lock, Mail } from 'lucide-react-native'
import React, { useState } from 'react'
import {
    Alert,
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'

interface FormData {
    email: string
    password: string
}

interface Errors {
    email?: string
    password?: string
}

export default function SignInScreen() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState<Errors>({})
    const router = useRouter();
    const validateForm = (): boolean => {
        const newErrors: Errors = {}

        if (!formData.email) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address"
        }

        if (!formData.password) {
            newErrors.password = "Password is required"
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }))
        }
    }

    const handleSignIn = async () => {
        if (validateForm()) {
            try {
                await AsyncStorage.setItem('isLoggedIn', 'true')
                console.log("Sign in successful")
                // Navigate to dashboard - adjust route name as needed
                // router.push('/')
            } catch (error) {
                Alert.alert('Error', 'Failed to sign in. Please try again.')
            }
        }
    }

    const ValidationMessage = ({ message }: { message: string }) => (
        <View className='w-full border border-red-500 rounded-xl p-2'>
            <Text className="text-red-500 text-sm mt-1">{message}</Text>
        </View>
    )
    const IconButton = ({
        children,
        onPress,
        className
    }: {
        children: React.ReactNode
        onPress: () => void
        className?: string
    }) => (
        <TouchableOpacity onPress={onPress} className={className}>
            {children}
        </TouchableOpacity>
    )

    return (
        <View className="flex-1 px-4 bg-black flex flex-col justify-start items-center">
            {/* Header */}
            <ImageBackground
                source={BgImage} // Uncomment when you have the image
                className="h-72 w-full flex justify-end items-center"
                resizeMode="cover"
            >
                <View className="absolute bottom-0 left-0 w-full h-full bg-black opacity-50" />
                <View className="items-center space-y-2">
                    <Text className="text-4xl font-bold text-white text-center">
                        Sign In To FlexForge
                    </Text>
                    <Text className="text-white/70 text-center text-xl my-3">
                        Let's personalize your fitness with AI
                    </Text>
                </View>
            </ImageBackground>

            {/* Form */}
            <View className="flex flex-col gap-4 w-full my-6">
                {/* Email Input */}
                <View className="flex flex-col gap-3">
                    <Text className="text-white text-lg font-medium">Email Address</Text>
                    <View className="relative">
                        <View className="absolute left-4 top-4 z-10">
                            <Mail size={20} color="rgba(255,255,255,0.6)" />
                        </View>
                        <TextInput
                            placeholder="elementary221b@gmail.com"
                            placeholderTextColor="rgba(255,255,255,0.5)"
                            value={formData.email}
                            onChangeText={(text) => handleInputChange('email', text)}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            className={`pl-12 pr-4 py-4 bg-white/10 text-white rounded-2xl h-14 border border-gray-700
                                `}
                        />
                    </View>
                    {errors.email && <ValidationMessage message={errors.email} />}
                </View>

                {/* Password Input */}
                <View className="flex flex-col gap-3">
                    <Text className="text-white text-lg font-medium">Password</Text>
                    <View className="relative">
                        <View className="absolute left-4 top-4 z-10">
                            <Lock size={20} color="rgba(255,255,255,0.6)" />
                        </View>
                        <TextInput
                            placeholder="************"
                            placeholderTextColor="rgba(255,255,255,0.5)"
                            value={formData.password}
                            onChangeText={(text) => handleInputChange('password', text)}
                            secureTextEntry={!showPassword}
                            autoCapitalize="none"
                            autoCorrect={false}
                            className={`pl-12 pr-4 py-4 bg-white/10 text-white rounded-2xl h-14 border border-gray-700
                                `}
                        />
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-4"
                        >
                            {showPassword ? (
                                <EyeOff size={20} color="rgba(255,255,255,0.6)" />
                            ) : (
                                <Eye size={20} color="rgba(255,255,255,0.6)" />
                            )}
                        </TouchableOpacity>
                    </View>
                    {errors.password && <ValidationMessage message={errors.password} />}
                </View>
            </View>

            <ButtonWithIcon onPress={handleSignIn} label="Sign In" className='w-full py-4' textSize='text-xl' />

            {/* Social Icons */}
            <View className="flex-row justify-center items-center gap-4 my-16">
                <IconButton
                    onPress={() => console.log('Instagram')}
                    className="p-3 border border-white/30 rounded-2xl"
                >
                    <Instagram size={28} color="rgba(255,255,255,0.6)" />
                </IconButton>
                <IconButton
                    onPress={() => console.log('Facebook')}
                    className="p-3 border border-white/30 rounded-2xl"
                >
                    <Facebook size={28} color="rgba(255,255,255,0.6)" />
                </IconButton>
                <IconButton
                    onPress={() => console.log('LinkedIn')}
                    className="p-3 border border-white/30 rounded-2xl"
                >
                    <Linkedin size={28} color="rgba(255,255,255,0.6)" />
                </IconButton>
            </View>

            {/* Footer Links */}
            <View className="items-center space-y-2">
                <View className="flex-row">
                    <Text className="text-white/70">Don't have an account? </Text>
                    <TouchableOpacity onPress={() => router.push('/auth/signup')}>
                        <Text className="text-primary-500 underline font-medium">Sign Up.</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity className='my-4' onPress={() => router.push('/auth/reset-password')}>
                    <Text className="text-primary-500 underline font-medium">Forgot Password</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}