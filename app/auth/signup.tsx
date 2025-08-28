import BgImage from '@/assets/images/chestpressdark.png'
import ButtonWithIcon from '@/components/ui/ButtonWithIcon'
import { useRouter } from 'expo-router'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react-native'
import React, { useState } from 'react'
import {
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'

// You'll need to import your background image
// import gymBg from '../assets/gym-bg.jpg'

interface FormData {
    email: string
    password: string
    confirmPassword: string
}

interface Errors {
    email?: string
    password?: string
    confirmPassword?: string
}

export default function SignUpScreen() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
        confirmPassword: ''
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
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters"
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
            newErrors.password = "Password must contain uppercase, lowercase, and number"
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password"
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "ERROR: Password Don't Match!"
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

    const handleSignUp = () => {
        if (validateForm()) {
            console.log("Sign up successful")
            // Navigate to assessment - adjust route name as needed
            router.push('/assesment');
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
                        Sign Up To FlexForge
                    </Text>
                    <Text className="text-white/70 text-center text-lg my-3">
                        Quickly Make Your Account in One Minute
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
                            placeholder="*************"
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

                {/* Confirm Password Input */}
                <View className="flex flex-col gap-3">
                    <Text className="text-white text-lg font-medium">Confirm Password</Text>
                    <View className="relative">
                        <View className="absolute left-4 top-4 z-10">
                            <Lock size={20} color="rgba(255,255,255,0.6)" />
                        </View>
                        <TextInput
                            placeholder="*************"
                            placeholderTextColor="rgba(255,255,255,0.5)"
                            value={formData.confirmPassword}
                            onChangeText={(text) => handleInputChange('confirmPassword', text)}
                            secureTextEntry={!showConfirmPassword}
                            autoCapitalize="none"
                            autoCorrect={false}
                            className={`pl-12 pr-4 py-4 bg-white/10 text-white rounded-2xl h-14 border border-gray-700
                                `}
                        />
                        <TouchableOpacity
                            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-4"
                        >
                            {showConfirmPassword ? (
                                <EyeOff size={20} color="rgba(255,255,255,0.6)" />
                            ) : (
                                <Eye size={20} color="rgba(255,255,255,0.6)" />
                            )}
                        </TouchableOpacity>
                    </View>
                    {errors.confirmPassword && <ValidationMessage message={errors.confirmPassword} />}
                </View>
            </View>

            <ButtonWithIcon onPress={handleSignUp} label="Sign Up" className='w-full py-4' textSize='text-xl' />


            {/* Footer Link */}
            <View className="my-16 flex-row">
                <Text className="text-white/70">Already have an account? </Text>
                <TouchableOpacity onPress={() => router.push('/auth/signin')}>
                    <Text className="text-primary-500 underline font-medium">Sign In.</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}