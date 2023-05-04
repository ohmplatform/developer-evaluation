import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { APP_ROUTES, AppStackParamList } from '../../Routes';
import TodosScreen from '../../../views/Todos';


const AppStackNavigator = createStackNavigator<AppStackParamList>();

interface IAppStackScreen {
    name: string;
    component: React.FC;
}

const AppStackScreens: IAppStackScreen[] = [
    {
        name: APP_ROUTES.USER.TODOS,
        component: TodosScreen,
    }
]


const AppStack = () => {
    return (
        <AppStackNavigator.Navigator
            initialRouteName={APP_ROUTES.USER.TODOS as keyof AppStackParamList | undefined}
        // screenOptions={{
        //     headerShown: false,
        // }}
        >
            {AppStackScreens.map(({ name, component }) => {
                return (
                    <AppStackNavigator.Screen
                        key={name}
                        name={name as keyof AppStackParamList}
                        component={component}
                    />
                )
            })}
        </AppStackNavigator.Navigator>
    )
}

export default AppStack
