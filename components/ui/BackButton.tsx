import RightIcon from '@/assets/images/icons/arrow-back.svg';
import React from 'react';
import { Pressable } from 'react-native';

interface BackButtonProps {
    onPress: () => void;
    className?: string
}

export default function BackButton({ onPress, className }: BackButtonProps) {
    return (
        <Pressable onPress={onPress} className={`p-3 rounded-2xl items-center justify-center bg-white/10 flex flex-row ${className}`}>
            <RightIcon width={24} height={24} color="#FFFFFF" />
        </Pressable>
    );
}