import React from 'react'
import { View, StatusBar} from 'react-native'
import { Text, Logo } from '../../components'
import { styles } from './styles'


export const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Logo />
            <Text>
                StarWars - Wiki
            </Text>
            <StatusBar style="auto" />
        </View>
    )
}