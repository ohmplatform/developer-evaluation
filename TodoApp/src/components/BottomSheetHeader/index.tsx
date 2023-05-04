import { Image, TouchableOpacity, View, Text, TextStyle } from 'react-native'
import React from 'react'
import styles from './styles';
import { useTheme } from '@react-navigation/native';
import { APP_IMAGES } from '../../assets/images';

interface BottomSheetHeaderProps {
  backPress: () => void;
  Title?: string;
  customTitleStyles?: TextStyle;
  RightContent?: React.ComponentType<any>;
  subTitle?: string;
}

const RightContentDefault = () => {
  return (
    <View style={styles.extraStyleContainer}>
    </View>
  )
}


const BottomSheetHeader = ({
  backPress = () => { },
  Title = "",
  customTitleStyles = {},
  RightContent = RightContentDefault,
  subTitle = ""
}: BottomSheetHeaderProps) => {

  const { colors } = useTheme()

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => backPress()} style={styles.backButtonContainer} >
        <Image source={APP_IMAGES.backButtonIcon} style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text numberOfLines={1} style={[styles.titleText, { color: colors.text }, customTitleStyles]}>{Title}</Text>
        {
          subTitle && (
            <Text style={styles.subTitleText}>{subTitle}</Text>
          )
        }
      </View>
      <RightContent />
    </View>
  )
}

export default BottomSheetHeader
