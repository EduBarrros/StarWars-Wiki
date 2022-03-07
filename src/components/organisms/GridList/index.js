import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '~/components/molecules'
import { SeparatorView } from './styles'

export const GridList = ({ data }) => {
    return (
        <FlatList
            numColumns={3}
            data={data}
            renderItem={({ item }) => <Card size='large' item={item} />}
            keyExtractor={(item) => String(item.id)}
            ItemSeparatorComponent={() => <SeparatorView />}
        />
    )
}