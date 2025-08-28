import RightIcon from '@/assets/images/icons/arrow-right.svg';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface ButtonWithIconProps {
    onPress: () => void;
    label?: string
}

export default function ButtonWithIcon({ onPress, label }: ButtonWithIconProps) {
    return (
        <TouchableOpacity onPress={onPress} className="w-14 h-14 rounded-full items-center justify-center bg-primary-500" activeOpacity={0.7}>
            <View>
                <Text className="text-white text-2xl font-semibold">{label}</Text>
                <RightIcon width={24} height={24} color="#FFFFFF" />
            </View>
        </TouchableOpacity>
    );
}