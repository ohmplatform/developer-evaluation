import { Platform } from "react-native";
import type { Theme } from '@react-navigation/native';
import {
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { APP_COLORS } from "../colors";


export type IAppTheme = Theme & {
    colors?: {
        grayHeading?: string;
        gray?: string;
        background_blue?: string;
        background_light_gray?: string;
    }
}

export const CUSTOM_DARK_THEME: IAppTheme = {
    ...NavigationDarkTheme,
    colors: {
        ...NavigationDarkTheme.colors,
        background: APP_COLORS.BACKGROUND_DARK,
        card: APP_COLORS.BACKGROUND_DARK,
        text: APP_COLORS.TEXT_DARK,
        grayHeading: APP_COLORS.TEXT_GRAY_DARK,
        gray: APP_COLORS.BACKGROUND_GRAY_DARK,
        background_blue: APP_COLORS.BACKGROUND_BLUE_DARK,
        background_light_gray: APP_COLORS.BACKGROUND_LIGHT_GRAY_DARK,
    }
}


export const CUSTOM_LIGHT_THEME: IAppTheme = {
    ...NavigationDefaultTheme,
    colors: {
        ...NavigationDefaultTheme.colors,
        background: APP_COLORS.BACKGROUND_LIGHT,
        card: APP_COLORS.BACKGROUND_LIGHT,
        text: APP_COLORS.TEXT_LIGHT,
        grayHeading: APP_COLORS.TEXT_GRAY_LIGHT,
        gray: APP_COLORS.BACKGROUND_GRAY_LIGHT,
        background_blue: APP_COLORS.BACKGROUND_LIGHT,
        background_light_gray: APP_COLORS.BACKGROUND_LIGHT,
    }
}