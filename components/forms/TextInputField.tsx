import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

import constants from '../../constants'

const TextInputField = (props) => {
  const { containerStyles, error, label, imageStyles = {}, imageUrl } = props

  const getSectionStyles = () => {
    if (error) {
      return [styles.sectionStyle, styles.sectionErrorStyle]
    } else {
      return styles.sectionStyle
    }
  }

  return (
    <View style={[styles.container, containerStyles]}>
      {label && <Text style={styles.labelText}>{label}</Text>}
      <View style={getSectionStyles()}>
        <Image
          source={{ uri: imageUrl }}
          style={[styles.imageStyle, imageStyles]}
        />
        <TextInput
          style={[styles.textInputStyle]}
          {...props}
          underlineColorAndroid="transparent"
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 32,
    marginRight: 32
  },
  errorText: {
    alignSelf: 'flex-start',
    color: constants.BRAND_COLORS.red,
    fontSize: 12
  },
  imageStyle: {
    marginLeft: 8,
    marginRight: 16,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center'
  },
  labelText: {
    alignSelf: 'flex-start',
    color: constants.BRAND_COLORS.blk,
    fontFamily: constants.FONTS.regular,
    fontSize: 14,
    marginBottom: 4
  },
  sectionErrorStyle: {
    borderColor: constants.BRAND_COLORS.red
  },
  sectionStyle: {
    alignItems: 'center',
    borderColor: constants.BRAND_COLORS.darkGreen,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    height: 44,
    justifyContent: 'center',
    margin: 0
  },
  textInputStyle: {
    fontSize: 16,
    flex: 1
  }
})

export default TextInputField
