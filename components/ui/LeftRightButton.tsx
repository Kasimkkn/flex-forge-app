import LeftIcon from '@/assets/images/icons/arrow-left.svg';
import RightIcon from '@/assets/images/icons/arrow-right.svg';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

interface LeftRightButtonProps {
    showLeft?: boolean;
    showRight?: boolean;
    onLeftPress?: () => void;
    onRightPress?: () => void;
    disabled?: boolean;
}

export default function LeftRightButton({
    showLeft = true,
    showRight = false,
    onLeftPress,
    onRightPress,
    disabled = false
}: LeftRightButtonProps) {
    return (
        <View className="flex-row items-center space-x-4">
            {/* Left Button */}
            <TouchableOpacity
                onPress={onLeftPress}
                disabled={disabled || !showLeft}
                className={`
                    w-14 h-14 rounded-full items-center justify-center
                    ${showLeft
                        ? disabled
                            ? 'bg-gray-400'
                            : 'bg-primary-500'
                        : 'bg-transparent'
                    }
                `}
                activeOpacity={0.7}
            >
                {showLeft && (
                    <LeftIcon
                        width={24}
                        height={24}
                        color={disabled ? '#9CA3AF' : '#FFFFFF'}
                    />
                )}
            </TouchableOpacity>

            {/* Right Button */}
            <TouchableOpacity
                onPress={onRightPress}
                disabled={disabled || !showRight}
                className={`
                    w-14 h-14 rounded-full items-center justify-center
                    ${showRight
                        ? disabled
                            ? 'bg-gray-400'
                            : 'bg-primary-500'
                        : 'bg-transparent'
                    }
                `}
                activeOpacity={0.7}
            >
                {showRight && (
                    <RightIcon
                        width={24}
                        height={24}
                        color={disabled ? '#9CA3AF' : '#FFFFFF'}
                    />
                )}
            </TouchableOpacity>
        </View>
    );
}