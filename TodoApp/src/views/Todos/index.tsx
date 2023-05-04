import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native'
import { IAppTheme } from '../../constants/theme';
import ThemeToggler from '../../components/ThemeToggler';
import useUserThemeStore from '../../store/theme';
import { AddTodoBottomSheetContext } from '../../providers/AddTodoBottomSheet';
import useTodoFirebase from '../../hooks/useTodoFirebase';
import TodoItemListView from './components/TodoItem';

const TodosScreen = () => {

    const { colors }: IAppTheme = useTheme();

    const navigation = useNavigation();

    const { todos, deleteTodo, toggleTodoDone } = useTodoFirebase();

    const { openBottomSheet } = useContext(AddTodoBottomSheetContext);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <ThemeToggler />,
        })
    }, [ThemeToggler]);


    const renderItem = useCallback(({ item, index }: any) => {
        return (
            <TodoItemListView
                id={item.id}
                done={item.done}
                title={item.title}
                toggleTodoDone={toggleTodoDone}
                deleteTodo={deleteTodo}
            />
        )
    }, [toggleTodoDone, deleteTodo]);


    return (
        <View style={[styles.mainContainer, { backgroundColor: colors.background }]}>
            <TouchableOpacity onPress={openBottomSheet}>
                <Text style={{ color: colors.text }}>Add Todo</Text>
            </TouchableOpacity>
            <FlatList
                data={todos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}

export default TodosScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    }
})