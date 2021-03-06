import React from 'react'
import { ButtonContainer } from './styles'
import { Text } from '~/components/atoms';
import { theme } from '~/styles';
import { Ionicons } from '@expo/vector-icons';

export const PlayButton = ({ onPress }) => {
    return (
        <ButtonContainer onPress={onPress}>
            <Ionicons name={'play'} size={theme.metrics.px(14)} color={theme.colors.black} />
            <Text fontFamily='bold' size={14} color='black' ml={4} mt={2}>
                Assistir
            </Text>
        </ButtonContainer>
    )
}