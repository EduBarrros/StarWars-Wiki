import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules'
import { Text } from '../../atoms'
import { ListContainer } from './styles'
import { theme } from '~/styles'

export const HomeList = ({ data, title, type }) => {
    return (
        <ListContainer>
            <Text fontFamily='black' size={18} ml={24}>
                {title}
            </Text>
            <FlatList
                horizontal
                data={data}
                renderItem={({ item }) => <Card item={{...item, type}} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{
                    paddingLeft: theme.metrics.px(24),
                    paddingTop: theme.metrics.px(12),
                    paddingBottom: theme.metrics.px(24),
                }}
            />
        </ListContainer>
    )
}