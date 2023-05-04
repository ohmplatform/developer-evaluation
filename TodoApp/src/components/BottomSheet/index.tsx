import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import {
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
  BottomSheetBackdrop,
  BottomSheetModalProvider,
  useBottomSheetInternal,
} from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { wp } from '../../utils/responsive';

interface SheetType<T> {
  [key: string]: T;
}

type Props = {
  sheetRef: any;
  views: SheetType<any>;
  initial: string;
  onCloseBottomSheet?: () => void;
};

const BottomSheet = ({ sheetRef, views, initial, onCloseBottomSheet }: Props) => {
  const { colors } = useTheme();

  const { bottom } = useSafeAreaInsets();

  const [currentView, setCurrentView] = React.useState(() => initial);

  useEffect(() => {
    setCurrentView(initial);
  }, [initial])

  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);


  const navigateToView = useCallback(
    (view: string) => {
      if (views[view]) {
        setCurrentView(view);
        sheetRef.current?.expand();
      }
    },
    [sheetRef, setCurrentView],
  );

  const getComponent = () => {
    const Component = views[currentView];
    return <Component navigateToView={navigateToView} />;
  };

  const onDismiss = useCallback(() => {
    setCurrentView(initial);
    if (onCloseBottomSheet) {
      onCloseBottomSheet();
    }
  }, [setCurrentView, initial, onCloseBottomSheet]);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={sheetRef}
        keyboardBehavior="interactive"
        enableContentPanningGesture={true}
        keyboardBlurBehavior="restore"
        snapPoints={animatedSnapPoints}
        style={{
          backgroundColor: colors.background,
          borderRadius: wp(20),
          overflow: 'hidden',
        }}
        handleStyle={{ backgroundColor: colors.background, }}
        handleIndicatorStyle={{ backgroundColor: colors.text, }}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        backgroundStyle={{ backgroundColor: colors.background }}
        onDismiss={onDismiss}
        backdropComponent={props => (
          <BottomSheetBackdrop
            appearsOnIndex={0}
            {...props}
            disappearsOnIndex={-1}
            opacity={0.5}
            onPress={onDismiss}
          />
        )}>
        <BottomSheetView
          onLayout={handleContentLayout}
          style={{ paddingBottom: bottom }}>
          {getComponent()}
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default BottomSheet;
