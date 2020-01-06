import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

import constants from '../../constants'

const TextInputField = ({ label, containerStyles = {} }) => (
  <View style={[styles.container, containerStyles]}>
    {label && <Text style={styles.labelText}>{label}</Text>}
    <TextInput style={styles.textInput} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginLeft: 32,
    marginRight: 32
  },
  labelText: {
    color: constants.BRAND_COLORS.blk,
    fontFamily: constants.FONTS.regular,
    fontSize: 14,
    marginBottom: 4
  },
  textInput: {
    borderColor: constants.BRAND_COLORS.darkGreen,
    borderRadius: 8,
    borderWidth: 1,
    height: 44
  }
})

export default TextInputField
