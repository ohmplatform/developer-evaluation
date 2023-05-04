import React, { MutableRefObject, useCallback } from 'react'
import {
    BottomSheetModal
} from '@gorhom/bottom-sheet';
import { triggerHapticFeedback } from '../utils/haptickFeedback';
import { Keyboard } from 'react-native';

const useBottomSheetActions = (ref: MutableRefObject<BottomSheetModal | undefined>, onCloseBottomSheet?: () => void) => {
    const openBottomSheet = useCallback(() => {
        Keyboard.dismiss()
        ref?.current?.present();
        triggerHapticFeedback('impactLight' as any);
    }, [])


    const closeBottomSheet = useCallback(() => {
        if (onCloseBottomSheet) {
            onCloseBottomSheet()
        }
        ref?.current?.close();
        triggerHapticFeedback('impactLight' as any);
    }, [onCloseBottomSheet])

    return {
        openBottomSheet,
        closeBottomSheet
    }
}

export default useBottomSheetActions
