import {
    heightPercentageToDP,
    widthPercentageToDP,
} from 'react-native-responsive-screen';

import { Dimensions } from 'react-native';



const WIDTH = 375;
const HEIGHT = 812;

export function fontResponsive(size: number) {
    return widthPercentageToDP((size) / ((WIDTH) / 100));
}

export function wp(size: number) {
    return widthPercentageToDP(size / (WIDTH / 100));
}

export function hp(size: number) {
    return heightPercentageToDP(size / (HEIGHT / 100));
}

export const deviceHeight = Dimensions.get('window').height

export const deviceWidth = Dimensions.get('window').width;

