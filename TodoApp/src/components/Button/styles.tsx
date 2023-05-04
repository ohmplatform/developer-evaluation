import { Platform, StyleSheet } from 'react-native';
import { APP_COLORS } from '../../constants/colors';
import { hp, wp, fontResponsive } from '../../utils/responsive';

export const styles = StyleSheet.create({
    defaultBorderContent: {
    },
    defaultButtoContainer: {
        height: hp(42),
        borderRadius: wp(7),
        justifyContent: 'center',
        alignItems: 'center',
        // margin: widthResponsive(4),
    },
    smallButton: {
        height: hp(35),
        width: wp(136),
    },
    largeButton: {
        width: wp(346),
    },
    mediumButton: {
        width: wp(169),
    },
    defaultTextStyles: {
        color: '#fff',
        // fontFamily: CUSTOM_FONT_FAMILY?.GintoNormal?.Medium
    },
    txtSmall: {
        fontSize: fontResponsive(13),
        lineHeight: hp(17),
    },
    txtBig: {
        fontSize: fontResponsive(14),
        lineHeight: hp(19),
    },
    //BorderButton
    borderSmallButton: {
        backgroundColor: APP_COLORS.BACKGROUND_DARK,
        height: hp(33),
        width: wp(134),
    },
    borderLargeButton: {
        backgroundColor: APP_COLORS.BACKGROUND_DARK,
        height: hp(40),
        width: wp(344),
    },
    borderMediumButton: {
        backgroundColor: APP_COLORS.BACKGROUND_DARK,

        height: hp(40),
        width: wp(167),
    },
    backLayerContainer: {
        borderRadius: wp(7),
        margin: wp(4),
    }
});
