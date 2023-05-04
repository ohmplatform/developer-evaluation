import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useContext, useState } from 'react'
import { deviceHeight, hp, wp } from '../../../../utils/responsive'
import { useTheme } from '@react-navigation/native';
import { AddTodoBottomSheetContext, AddTodoBottomSheetViews } from '../..';
import BottomSheetHeader from '../../../../components/BottomSheetHeader';
import Input from '../../../../components/Input';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import Button from '../../../../components/Button';
import { addTodoToFirebase } from '../../../../service/Todo';

type AddTodoViewProps = {
    navigateToView: (view: AddTodoBottomSheetViews) => void
}

const AddTodoView = ({ navigateToView }: AddTodoViewProps) => {

    const { colors } = useTheme();

    const { closeBottomSheet } = useContext(AddTodoBottomSheetContext);

    const [todo, setTodo] = useState<string>('');

    const onPressSubmit = useCallback(async () => {
        await addTodoToFirebase(todo);
        navigateToView('TodoAddedSuccess')
    }, [todo])

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <BottomSheetHeader Title='Request Payment' backPress={closeBottomSheet} />
            <View style={styles.containerSetting}>
                <Input
                    InputComponent={BottomSheetTextInput}
                    placeholder='Add new todo'
                    value={todo}
                    onChangeValue={setTodo}
                    heading='Todo'
                />
                <Button
                    disabled={todo.length >= 2 ? false : true}
                    gradientColors={['#406BDF', '#5929DF']}
                    mainContainerStyle={styles.buttonStyle}
                    onPress={onPressSubmit}
                    text={'Submit'}
                    type={'large'}
                />
            </View>
        </View>
    )
}

export default AddTodoView

const styles = StyleSheet.create({
    container: {
        minHeight: hp(230),
    },
    containerSetting: {
        marginTop: hp(20),
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(15),
        paddingBottom: hp(10),
    },
    buttonStyle: {
        marginTop: hp(20),
    },
})