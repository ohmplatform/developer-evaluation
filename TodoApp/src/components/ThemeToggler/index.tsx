import { Image, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import React, { useCallback } from 'react'
import { useTheme } from '@react-navigation/native'
import { IAppTheme } from '../../constants/theme';
import useUserThemeStore, { UserTheme } from '../../store/theme';
import { APP_IMAGES } from '../../assets/images';
import { APP_COLORS } from '../../constants/colors';
import { hp, wp } from '../../utils/responsive';

const ThemeToggler = ({ }: any) => {

    const theme = useUserThemeStore(state => state.theme);

    const setUserTheme = useUserThemeStore(state => state.setTheme);

    const handleOnPressToggle = useCallback(() => {
        setUserTheme(theme === UserTheme.DARK ? UserTheme.LIGHT : UserTheme.DARK);
    }, [theme, setUserTheme]);

    return (
        <TouchableOpacity onPress={handleOnPressToggle} style={styles.container}>
            <Image source={theme === UserTheme.DARK ? APP_IMAGES.lightModeIcon : APP_IMAGES.darkModeIcon} style={styles.image} />
        </TouchableOpacity>
    )
}

export default ThemeToggler

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    container: {
        marginRight: hp(15),
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: wp(8),
        borderColor: APP_COLORS.TEXT_GRAY_LIGHT,
        width: wp(36),
        height: hp(36),
        padding: wp(2),
    }
})