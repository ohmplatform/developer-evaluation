import { useTheme } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { wp } from '../../utils/responsive';
import { styles } from './styles';

type ButtonType = {
    small: string,
    large: string,
}

type ButtonProps = {
    border?: boolean,
    type?: keyof ButtonType,
    text: string,
    gradientColors?: string[],
    disabled?: boolean,
    onPress?: () => void,
    textColor?: string,
    loading?: boolean,
    customStyle?: ViewStyle | ViewStyle[],
    customTextStyle?: TextStyle,
    useAngle?: boolean,
    mainContainerStyle?: ViewStyle,
    angleCenter?: any,
    angle?: number,
    start?: { x: number, y: number },
    end?: { x: number, y: number },
}

function Button({
    border = false,
    type,
    text = 'Enter text',
    gradientColors = ['#30BEFD', '#3088EF'],
    disabled = false,
    start = { x: 0, y: 1 },
    end = { x: 1, y: 0 },
    onPress = () => { },
    textColor = '#fff',
    loading = false,
    customStyle = {},
    customTextStyle = {},
    useAngle = true,
    mainContainerStyle = {},
    angleCenter,
    angle,
    ...props
}: ButtonProps) {

    const { colors } = useTheme()

    const typeStyle = (type: keyof ButtonType | undefined) => {
        switch (type) {
            case 'small':
                return styles.smallButton;
            case 'large':
                return styles.largeButton;
            default:
                return styles.mediumButton;
        }
    };

    const borderTypeStyle = (type: keyof ButtonType | undefined, border: any) => {
        if (!border) return {}
        switch (type) {
            case 'small':
                return styles.borderSmallButton;
            case 'large':
                return styles.borderLargeButton;
            default:
                return styles.borderMediumButton;
        }
    };

    const txtStyle = (type: keyof ButtonType | undefined) => {
        switch (type) {
            case 'large':
                return styles.txtBig;
            default:
                return styles.txtSmall;
        }
    };
    return (
        <TouchableOpacity onPress={onPress} disabled={loading || disabled} {...props}>
            <View style={[typeStyle(type), customStyle, mainContainerStyle, styles.backLayerContainer, { backgroundColor: colors.background }]} >
                <LinearGradient
                    colors={gradientColors}
                    start={start}
                    end={end}
                    style={[styles.defaultButtoContainer, typeStyle(type), customStyle, mainContainerStyle, { opacity: (disabled || loading) ? 0.5 : 1 }]}
                    useAngle={useAngle}
                    angle={angle}
                    angleCenter={angleCenter}
                >
                    <View
                        style={[styles.defaultButtoContainer, typeStyle(type),
                        borderTypeStyle(type, border),
                            , customStyle]}
                    >
                        {loading ? (
                            <ActivityIndicator size={"small"} color={"white"} />
                        ) : (
                            <Text
                                style={[
                                    styles.defaultTextStyles,
                                    txtStyle(type),
                                    { color: textColor },
                                    disabled ? { color: '#000' } : {},
                                    customTextStyle,
                                ]}
                            >
                                {text}
                            </Text>
                        )}
                    </View>
                </LinearGradient>
            </View>
        </TouchableOpacity>
    );
}

export default React.memo(Button);
