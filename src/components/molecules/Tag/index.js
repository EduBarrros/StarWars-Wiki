import React from 'react'
import { TagContainer } from './style'
import { Text } from '~/components/atoms'

export const Tag = ({ children, ...props }) => {
    return (
        <TagContainer {...props}>
            <Text fontFamily='bold' size={14}>
                {children}
            </Text>
        </TagContainer>
    )
}

