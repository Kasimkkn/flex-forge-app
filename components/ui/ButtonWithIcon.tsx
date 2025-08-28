import RightIcon from '@/assets/images/icons/arrow-right.svg';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

interface ButtonWithIconProps {
    onPress: () => void;
    label?: string
    className?: string
    textSize?: string
}

export default function ButtonWithIcon({ onPress, label, className, textSize }: ButtonWithIconProps) {
    return (
        <Pressable onPress={onPress} className={`p-3 text-xl rounded-2xl items-center justify-center bg-primary-500 flex flex-row ${className}`}>
            <View className='flex flex-row gap-4 items-center'>
                <Text className={`text-white font-semibold ${textSize ? textSize : 'text-lg'}`}>{label}</Text>
                <RightIcon width={24} height={24} color="#FFFFFF" />
            </View>
        </Pressable>
    );
}