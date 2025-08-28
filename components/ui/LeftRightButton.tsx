import LeftIcon from '@/assets/images/icons/arrow-left.svg';
import RightIcon from '@/assets/images/icons/arrow-right.svg';
import { TouchableOpacity, View } from 'react-native';
import React = require('react');

interface LeftRightButtonProps {
    showLeft?: boolean;
    showRight?: boolean;
    onLeftPress?: () => void;
    onRightPress?: () => void;
    disabled?: boolean;
    className?: string;
}

export default function LeftRightButton({
    showLeft = true,
    showRight = false,
    onLeftPress,
    onRightPress,
    disabled = false,
    className,
}: LeftRightButtonProps) {
    console.log('LeftRightButton props:', { showLeft, showRight, disabled });

    return (
        <View className="flex-row items-center">
            {/* Left Button */}
            {showLeft && (
                <TouchableOpacity
                    onPress={() => {
                        console.log('Left button pressed');
                        onLeftPress?.();
                    }}
                    disabled={disabled}
                    className={`
                        w-44 h-24 rounded-3xl items-center justify-center bg-primary-500
                        ${className}
                    `}
                    activeOpacity={0.7}
                >
                    <LeftIcon
                        width={24}
                        height={24}
                        color={disabled ? '#9CA3AF' : '#FFFFFF'}
                    />
                </TouchableOpacity>
            )}

            {/* Right Button */}
            {showRight && (
                <TouchableOpacity
                    onPress={() => {
                        console.log('Right button pressed');
                        onRightPress?.();
                    }}
                    disabled={disabled}
                    className={`
                        w-44 h-24 rounded-3xl items-center justify-center bg-primary-500
                        ${className}
                    `}
                    activeOpacity={0.7}
                >
                    <RightIcon
                        width={24}
                        height={24}
                        color={disabled ? '#9CA3AF' : '#FFFFFF'}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
}