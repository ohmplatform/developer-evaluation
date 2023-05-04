import React, { useCallback, useState } from 'react'
import { ActivityIndicator, Image, KeyboardType, Platform, Text, TextInput, TextInputProps, TouchableOpacity, View, ViewStyle } from 'react-native'
import { useTheme } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'


import { APP_COLORS } from '../../constants/colors';
import styles from './styles';
import { hp, wp } from '../../utils/responsive';
import { APP_IMAGES } from '../../assets/images';
import { TextInputAndroidProps } from 'react-native';

const FOCUSED_BORDER = [APP_COLORS.FOCUSED_PINK, APP_COLORS.FOCUSED_PURPLE];
const UNFOCUSED_BORDER = [APP_COLORS.UNFOCUSED_DARK, APP_COLORS.UNFOCUSED_GRAY];
const DISABLED_BORDER = [APP_COLORS.BACKGROUND_DARK, APP_COLORS.BACKGROUND_DARK];

type InputProps = {
    editable?: boolean;
    heading?: string;
    showRightContent?: boolean;
    showSuccessIcon?: boolean;
    loading?: boolean;
    onFocused?: () => void;
    onBlurred?: () => void;
    placeholder?: string;
    value: string;
    keyboardType?: KeyboardType;
    onSubmitEditing?: () => void;
    autoFocus?: boolean;
    errorMessage?: string;
    onChangeValue: (text: string) => void;
    InputComponent?: React.ComponentType<TextInputProps | TextInputAndroidProps>;
    hideHeading?: boolean;
    containerStyles?: ViewStyle;
    maxLength?: TextInputProps["maxLength"];
    renderTextCount?: boolean;
    textInputProps?: TextInputProps
    textInputStyle?: TextInputProps["style"]
    rightIconContainerStyles?: ViewStyle;
    gradientContainer?: ViewStyle;
    showSearchIcon?: boolean;
    showClearIcon?: boolean;
    onClearText?: () => void;
    strictSpecialCharacters?: boolean
}

const Input = ({
    editable = true,
    heading = "Heading",
    showRightContent = true,
    showSuccessIcon = false,
    loading = false,
    onFocused = () => { },
    onBlurred = () => { },
    placeholder = "",
    value = "",
    autoFocus = false,
    keyboardType = "default",
    onSubmitEditing = () => { },
    errorMessage = "",
    onChangeValue = (text: string) => { },
    InputComponent = TextInput,
    hideHeading = false,
    containerStyles = {},
    maxLength,
    renderTextCount = false,
    textInputProps = {},
    textInputStyle = {},
    rightIconContainerStyles = {},
    gradientContainer = {},
    showSearchIcon = false,
    showClearIcon = false,
    onClearText = () => { },
    strictSpecialCharacters = false
}: InputProps) => {

    const { colors }: any = useTheme();

    const [focused, setFocused] = React.useState(false);


    const onFocusInput = useCallback(() => {
        if (onFocused) {
            onFocused();
        }
        setFocused(true);
    }, [onFocused]);

    const onBlurInput = useCallback(() => {
        if (onBlurred) {
            onBlurred();
        }
        setFocused(false);
    }, [onBlurred]);

    const onChangeText = useCallback((text: string) => {
        if (onChangeValue) {
            if (strictSpecialCharacters) {
                onChangeValue(text.replace(/[`~0-9!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''))
            }
            else {
                onChangeValue(text)
            }
        }
    }, [onChangeValue])

    return (
        <View style={containerStyles}>
            <LinearGradient
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
                colors={editable ? focused ? FOCUSED_BORDER : UNFOCUSED_BORDER : DISABLED_BORDER}
                style={styles.gradientContainer}
            >
                <View style={[styles.container, { backgroundColor: colors.background, }, gradientContainer]}>
                    {
                        hideHeading ? null : (
                            <View>
                                <Text style={[styles.heading, { color: colors.grayHeading }]}>{heading}</Text>
                            </View>
                        )
                    }
                    <View style={styles.textInputIconContainer}>

                        <InputComponent
                            style={[styles.textInputContainer, textInputStyle, { color: colors?.text, marginVertical: Platform.OS == 'ios' ? hp(5) : 0 }]}
                            editable={editable}
                            onFocus={onFocusInput}
                            onBlur={onBlurInput}
                            allowFontScaling={true}
                            placeholder={placeholder}
                            placeholderTextColor={colors.grayHeading}
                            value={value.toString()}
                            autoFocus={autoFocus}
                            keyboardType={keyboardType}
                            onSubmitEditing={onSubmitEditing}
                            onChangeText={onChangeText}
                            maxLength={maxLength}
                            {...textInputProps}
                        />
                        {
                            showRightContent ? (
                                <View style={[styles.rightIconContainer, rightIconContainerStyles]}>
                                    {loading && (
                                        <ActivityIndicator color={APP_COLORS.BLUE} size={"small"} />
                                    )}
                                    {
                                        renderTextCount && (
                                            <Text style={[styles.textCount, { color: colors.grayHeading }]}>{value.length}/{maxLength}</Text>
                                        )
                                    }
                                </View>

                            ) : null
                        }
                    </View>
                </View>
            </LinearGradient>
            {
                errorMessage ?
                    <Text style={styles.errorText}>{errorMessage}</Text>
                    : <></>
            }
        </View>
    )
}

export default React.memo(Input);

