import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomBar } from '~/components';

import {
    Home,
    SplashScreen,
    Detail,
    SearchScreen,
    FavoritesScreen,
    WatchScreen
} from '../screens';


const BottomRoute = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            tabBar={props => <BottomBar {...props} />}
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen
                options={{ tabBarLabel: 'Pesquisar' }}
                name="Search"
                component={SearchScreen}
            />
            <Tab.Screen
                options={{ tabBarLabel: 'Favoritos' }}
                name="Favorites"
                component={FavoritesScreen}
            />
        </Tab.Navigator>
    )
}

export const Routes = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name='Splash'
                    component={SplashScreen}
                />
                <Stack.Screen
                    name='Home'
                    component={BottomRoute}
                />
                <Stack.Screen
                    name='Detail'
                    component={Detail}
                />
                <Stack.Screen
                    name='Watch'
                    component={WatchScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}