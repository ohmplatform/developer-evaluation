import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import { IAppTheme } from '../../../../constants/theme';
import { hp } from '../../../../utils/responsive';
import AnimatedLottieView from 'lottie-react-native';
import { APP_ANIMATIONS } from '../../../../assets/animation';

const AddTodoSuccess = () => {

    const { colors }: IAppTheme = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <AnimatedLottieView
                source={APP_ANIMATIONS?.PaymentSuccessAnimation}
                autoPlay
                loop={false}
                style={styles.lottieView}
            />
            <Text style={[styles.todoText, { color: colors.text }]}>Todo Added Successfully</Text>
        </View>
    )
}

export default AddTodoSuccess

const styles = StyleSheet.create({
    container: {
        minHeight: hp(150),
        alignItems: 'center',
        justifyContent: 'center',
    },
    todoText: {
        fontSize: 20,
        marginBottom: hp(20)
    },
    lottieView: {
        height: hp(160)
    }
})