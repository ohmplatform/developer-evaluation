import { StyleSheet } from "react-native";
import { APP_COLORS } from "../../constants/colors";
import { hp, wp, fontResponsive } from "../../utils/responsive";

const styles = StyleSheet.create({
    gradientContainer: {
        borderRadius: wp(10),
        padding: wp(2),
        width: "100%",
    },
    container: {
        width: '100%',
        height: 'auto',
        borderRadius: wp(9),
        paddingVertical: wp(9),
        paddingHorizontal: wp(12),
        backgroundColor: "blue"
    },
    heading: {
        // fontFamily: CUSTOM_FONT_FAMILY?.GintoNormal?.Bold,
        fontSize: fontResponsive(11),
        lineHeight: wp(11),
    },
    textInputIconContainer: {
        position: 'relative',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    textInputContainer: {
        padding: 0,
        margin: 0,
        flex: 1,
        // fontFamily: CUSTOM_FONT_FAMILY?.GintoNormal?.Bold,
        fontSize: fontResponsive(15),
    },
    rightIconContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    successIcon: {
        width: wp(22),
        height: wp(22),
        resizeMode: 'contain'
    },
    errorText: {
        textAlign: 'center',
        color: APP_COLORS.TEXT_ERROR,
        // fontFamily: CUSTOM_FONT_FAMILY.GintoNormal?.Light,
        fontSize: fontResponsive(13),
        lineHeight: wp(13),
        marginTop: wp(10),
        marginBottom: hp(3)
    },
    textCount: {
        // fontFamily: CUSTOM_FONT_FAMILY?.GintoNormal?.Regular,
        color: 'white'
    },
    searchIcon: {
        marginRight: 6,
        width: wp(20),
        height: hp(20),
    },
    crossIcon: {
        width: wp(20),
        height: hp(20),
    }
})

export default styles;