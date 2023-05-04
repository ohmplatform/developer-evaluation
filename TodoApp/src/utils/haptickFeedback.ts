// Custom util to trigger haptic feedback in react native
import HapticFeedback, { HapticFeedbackTypes } from 'react-native-haptic-feedback';


const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
};


export const triggerHapticFeedback = (type: HapticFeedbackTypes) => {
    HapticFeedback.trigger(type, options);
}
