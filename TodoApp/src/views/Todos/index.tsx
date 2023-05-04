import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
import { APP_IMAGES } from '../../assets/images';
import { UserTheme } from '../../store/theme';
import LinearGradient from 'react-native-linear-gradient';
import { APP_COLORS } from '../../constants/colors';

const FOCUSED_BORDER = [APP_COLORS.FOCUSED_PINK, APP_COLORS.FOCUSED_PURPLE];

const TodosScreen = () => {

    const { colors }: IAppTheme = useTheme();

    const navigation = useNavigation();

    const theme = useUserThemeStore(state => state.theme);

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
            <View style={styles.lottieContainer} >
                <AnimatedLottieView
                    source={APP_ANIMATIONS?.emptyListAnimation}
                    autoPlay
                    loop={false}
                    style={styles.lottieView}
                />
                <Text style={[styles.nothingText, { color: colors.text }]}>
                    Nothing to Do
                </Text>
            </View>
        )
    }, [colors])

    return (
        <View style={[styles.mainContainer, { backgroundColor: colors.background }]}>
            <TouchableOpacity style={styles.addtodoButtonContainer} onPress={openBottomSheet}>
                <LinearGradient
                    start={{ x: 0.0, y: 1.0 }}
                    end={{ x: 1.0, y: 1.0 }}
                    colors={FOCUSED_BORDER}
                    style={styles.addToDoButtonGradient}
                >
                    <Image source={APP_IMAGES.plusIcon} style={[styles.image, { tintColor: theme == UserTheme.DARK ? 'white' : 'black' }]} />
                </LinearGradient>
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
    addtodoButtonContainer: {
        position: 'absolute',
        zIndex: hp(10),
        top: hp(620),
        left: hp(290),
        borderRadius: hp(25),
        width: hp(50),
        height: hp(50),
    },
    addToDoButtonGradient: {
        height: hp(50),
        width: wp(50),
        borderRadius: hp(25),
        alignItems: 'center',
        justifyContent: 'center'
    },
    lottieContainer: {
        alignItems: 'center',
    },
    lottieView: {
        height: hp(200)
    },
    todoContainer: {
        width: '100%',
        height: '100%',
        marginTop: hp(25)
    },
    image: {
        resizeMode: 'contain',
    },
    nothingText: {
        fontFamily: CUSTOM_FONT_FAMILY.Ginto?.BlackItalic
    }
})