import RightIcon from '@/assets/images/icons/arrow-right.svg';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface ButtonWithIconProps {
    onPress: () => void;
    label?: string
    className?: string
}

export default function ButtonWithIcon({ onPress, label, className }: ButtonWithIconProps) {
    return (
        <TouchableOpacity onPress={onPress} className={`p-3 rounded-2xl items-center justify-center bg-primary-500 flex flex-row ${className}`} activeOpacity={0.7}>
            <View className='flex flex-row gap-4 items-center'>
                <Text className="text-white text-2xl font-semibold">{label}</Text>
                <RightIcon width={24} height={24} color="#FFFFFF" />
            </View>
        </TouchableOpacity>
    );
}