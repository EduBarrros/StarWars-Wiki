import React from 'react'
import { Hero, ScreenScrollContainer, GoBack } from '../../components'
import { useDataStore } from '~/services/stores'

export const Detail = () => {

    const { selectedData } = useDataStore();

    return (
        <ScreenScrollContainer>
            <Hero item={selectedData} onDetail/>
            <GoBack />
        </ScreenScrollContainer>
    )
}