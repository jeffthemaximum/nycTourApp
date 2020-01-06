import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'

import Button from '../forms/Button'
import constants from '../../constants'
import FullWidthImage from '../structural/FullWidthImage'
import TextInputField from '../forms/TextInputField'

type RegistrationProps = {
  createUser: Function
}

const Header = () => (
  <View style={[styles.halfHeight, styles.headerImage]}>
    <FullWidthImage imageUrl={'https://nyc-tour-app.s3.us-east-2.amazonaws.com/pigeon.gif'} />
  </View>
)

const Body = () => (
  <View style={styles.bodyContainer}>
    <BodyText />
    <FormFields />
    <Buttons />
  </View>
)

const BodyText = () => (
  <View>
    <Text style={styles.headerOneText}>Real NYC Tours</Text>
    <Text style={styles.subHeaderText}>Register to get started.</Text>
  </View>
)

const Buttons = () => (
  <View style={styles.buttonContainer}>
    <Button
      buttonStyles={{
        marginBottom: 24
      }}
      text={'Next'}
    />
    <Text style={styles.loginText}><Text>Returning user? </Text><Text style={styles.loginLinkText}>Login to your account.</Text></Text>
  </View>
)

const FormFields = () => (
  <View>
    <TextInputField label={'Email'} containerStyles={{marginBottom: 8}}/>
    <TextInputField label={'Password'} />
  </View>
)

const Registration = ({ createUser }: RegistrationProps) => {
  return (
    <KeyboardAvoidingView
      behavior='position'
      enabled
      style={styles.container}
    >
      <Header />
      <Body />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginLeft: 32,
    marginRight: 32
  },
  bodyContainer: {
    justifyContent: 'space-around',
    height: '50%'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  halfHeight: {
    height: '50%',
    backgroundColor: constants.BRAND_COLORS.lightGreen,
  },
  headerOneText: {
    fontFamily: constants.FONTS.bold,
    fontSize: 36,
    marginBottom: 8,
    textAlign: 'center'
  },
  headerImage: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginLinkText: {
    color: constants.BRAND_COLORS.greenGreen
  },
  loginText: {
    fontFamily: constants.FONTS.regular,
    fontSize: 14
  },
  subHeaderText: {
    fontFamily: constants.FONTS.regular,
    fontSize: 16,
    textAlign: 'center'
  }
})

export default Registration
