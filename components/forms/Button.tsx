import React from 'react'
import { StyleSheet } from 'react-native'
import Button from 'apsl-react-native-button'

import constants from '../../constants'

const CustomButton = ({
  buttonStyles = {},
  isLoading = false,
  handlePress = null,
  text = '',
  textStyles = {}
}) => {
  return (
    <Button
      isLoading={isLoading}
      onPress={handlePress}
      style={[styles.buttonStyles, buttonStyles]}
      textStyle={[styles.buttonText, textStyles]}
    >
      {text}
    </Button>
  )
}

const styles = StyleSheet.create({
  buttonStyles: {
    backgroundColor: constants.BRAND_COLORS.greenGreen,
    borderColor: constants.BRAND_COLORS.greenGreen
  },
  buttonText: {
    color: constants.BRAND_COLORS.white,
    fontFamily: constants.FONTS.bold,
    fontSize: 18
  }
})

export default CustomButton
