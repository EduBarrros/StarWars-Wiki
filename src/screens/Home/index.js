import React, { useEffect, useState } from 'react'
import { HomeList, Hero, ScreenScrollContainer, Loader } from '../../components'
import { useGetData } from '~/services/hooks'


export const Home = () => {

    const [loading, setLoading] = useState(true)
    const [films, setFilms] = useState([])
    const [characters, setCharacters] = useState([])

    const { getFilms, getCharacters } = useGetData()

    const callGetData = async () => {
        const filmsResponse = await getFilms()
        const charactersResponse = await getCharacters()

        if (!filmsResponse.error && !charactersResponse.error) {
            setFilms(filmsResponse),
                setCharacters(charactersResponse),
                setLoading(false)
        }

    }

    useEffect(() => {
        callGetData()
    }, [])

    if (loading) {
        return (
            <ScreenScrollContainer>
                <Loader mt={300}/>
            </ScreenScrollContainer>
        )
    }

    return (
        <ScreenScrollContainer>
            <Hero item={{
                ...films[0],
                type: 'Filme'
            }} />
            <HomeList title='Personagens' data={films} type='Filme'/>
            <HomeList title='Filmes' data={characters} type='Personagem'/>
        </ScreenScrollContainer>
    )
}