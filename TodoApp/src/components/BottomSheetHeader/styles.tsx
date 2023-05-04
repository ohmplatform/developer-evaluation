import { StyleSheet } from "react-native"
import { APP_COLORS } from "../../constants/colors"
import { hp, wp, fontResponsive } from "../../utils/responsive"


const styles = StyleSheet.create({
    backIcon: {
        height: hp(32),
        width: wp(32),
        resizeMode: 'contain'
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
    },
    backButtonContainer: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: wp(10)
    },
    titleText: {
        // fontFamily: CUSTOM_FONT_FAMILY?.GintoNormal?.Black,
        fontSize: fontResponsive(20),
        textAlign: 'center',
    },
    extraStyleContainer: {
        height: 50,
        width: 50,
        zIndex: 10,
        marginRight: wp(5)
    },
    titleContainer: {
        alignItems: 'center'
    },
    subTitleText: {
        // fontFamily: CUSTOM_FONT_FAMILY?.GintoNormal?.Black,
        color: APP_COLORS?.UNFOCUSED_LIGHT_GRAY,
        fontSize: fontResponsive(12),
        marginTop: hp(2),
        textAlign: 'center',
    }

})

export default styles 
