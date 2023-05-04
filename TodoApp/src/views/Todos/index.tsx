import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native'
import { CUSTOM_FONT_FAMILY, IAppTheme } from '../../constants/theme';
import ThemeToggler from '../../components/ThemeToggler';
import useUserThemeStore from '../../store/theme';
import { AddTodoBottomSheetContext } from '../../providers/AddTodoBottomSheet';
import useTodoFirebase from '../../hooks/useTodoFirebase';
import TodoItemListView from './components/TodoItem';
import { hp, wp } from '../../utils/responsive';
import AnimatedLottieView from 'lottie-react-native';
import { APP_ANIMATIONS } from '../../assets/animation';

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

    const renderEmptyList = useCallback(() => {
        return (
            <View >
                <AnimatedLottieView
                    source={APP_ANIMATIONS?.emptyListAnimation}
                    autoPlay
                    loop={false}
                    style={styles.lottieView}
                />
            </View>
        )
    }, [])

    return (
            <View style={[styles.mainContainer, { backgroundColor: colors.background }]}>
                <TouchableOpacity style={styles.addtodoButton} onPress={openBottomSheet}>
                    <Text style={{ color: colors.text }}>Add Todo +</Text>
                </TouchableOpacity>
                <View style={styles.todoContainer}>
                    <FlatList
                        data={todos}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}
                        ListEmptyComponent={renderEmptyList()}
                    />
                </View>
            </View>
    )
}

export default TodosScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: wp(4),
        justifyContent: 'center',
        alignItems: 'center'
    },
    addtodoButton: {
        position: 'absolute',
        zIndex: hp(10),
        top: hp(640),
        left: hp(250),
        borderColor: 'gray',
        borderWidth: hp(1),
        borderRadius: hp(5),
        width: hp(100),
        height: hp(30),
        alignItems: 'center',
        justifyContent: 'center',
    },
    lottieView: {
        height: hp(200)
    },
    todoContainer: {
        width: '100%',
        height: '100%'
    }
})