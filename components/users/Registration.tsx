import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'

import Button from '../forms/Button'
import constants from '../../constants'
import FullWidthImage from '../structural/FullWidthImage'
import TextInputField from '../forms/TextInputField'

type ButtonsProps = {
  handleSubmit: Function
  loading: boolean
}

type FormFieldsProps = {
  email: String
  errors: Object
  loading: boolean
  password: String
  setContainerState: Function
}

type RegistrationProps = {
  email: String
  errors: Object
  handleSubmit: Function
  loading: boolean
  password: String
  setContainerState: Function
}

const Header = () => (
  <View style={[styles.halfHeight, styles.headerImage]}>
    <FullWidthImage imageUrl={'https://nyc-tour-app.s3.us-east-2.amazonaws.com/pigeon.gif'} />
  </View>
)

const Body = ({
  email,
  errors,
  handleSubmit,
  loading,
  password,
  setContainerState
}: RegistrationProps) => (
  <View style={styles.bodyContainer}>
    <BodyText />
    <FormFields
      email={email}
      errors={errors}
      loading={loading}
      password={password}
      setContainerState={setContainerState}
    />
    <Buttons handleSubmit={handleSubmit} loading={loading} />
  </View>
)

const BodyText = () => (
  <View>
    <Text style={styles.headerOneText}>Real NYC Tours</Text>
    <Text style={styles.subHeaderText}>Register to get started.</Text>
  </View>
)

const Buttons = ({ handleSubmit, loading }: ButtonsProps) => (
  <View style={styles.buttonContainer}>
    <Button
      buttonStyles={{
        marginBottom: 24
      }}
      handlePress={handleSubmit}
      isLoading={loading}
      text={'Next'}
    />
    <Text style={styles.loginText}><Text>Returning user? </Text><Text style={styles.loginLinkText}>Login to your account.</Text></Text>
  </View>
)

const FormFields = ({
  email,
  errors,
  loading,
  password,
  setContainerState
}: FormFieldsProps) => {
  const handleEmailChange = (text) => {
    setContainerState({ email: text })
  }

  const handlePasswordChange = (text) => {
    setContainerState({ password: text })
  }

  return (
    <View>
      <TextInputField
        autoCapitalize='none'
        autoCompleteType='email'
        containerStyles={{marginBottom: 16}}
        editable={!loading}
        error={errors['email']}
        imageStyles={{
          width: 19
        }}
        imageUrl={'https://nyc-tour-app.s3.us-east-2.amazonaws.com/email-icon.png'}
        label={'Email'}
        onChangeText={handleEmailChange}
        value={email}
      />
      <TextInputField
        autoCapitalize='none'
        editable={!loading}
        error={errors['password']}
        imageStyles={{
          width: 17
        }}
        imageUrl={'https://nyc-tour-app.s3.us-east-2.amazonaws.com/lock-icon.png'}
        label={'Password'}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
        value={password}
      />
    </View>
  )
}

const Registration = ({
  email,
  errors,
  handleSubmit,
  loading,
  password,
  setContainerState
}: RegistrationProps) => {
  return (
    <KeyboardAvoidingView
      behavior='position'
      enabled
      style={styles.container}
    >
      <Header />
      <Body
        email={email}
        errors={errors}
        handleSubmit={handleSubmit}
        loading={loading}
        password={password}
        setContainerState={setContainerState}
      />
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
