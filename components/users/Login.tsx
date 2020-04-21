import React, { Component } from 'react'

import { Text, View } from 'react-native'

import {
  ButtonsProps,
  BodyText,
  BodyWrapper,
  FormFields,
  RegistrationWrapper,
  styles
} from './Registration'
import Button from '../forms/Button'
import constants from '../../constants'
import navigationService from '../../services/navigationService'

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
    <Text style={styles.loginText}>
      <Text>New user? </Text>
      <Text
        onPress={() => navigationService.navigate(constants.NAVIGATION_NAMES.home, {})}
        style={styles.loginLinkText}
      >
        Sign up to get started.
      </Text>
    </Text>
  </View>
)

const Login = ({
  email,
  errors,
  handleSubmit,
  loading,
  password,
  setContainerState
}) => (
  <RegistrationWrapper>
    <BodyWrapper>
      <BodyText secondaryText='Welcome back! Enter your creds.' />
      <FormFields
        email={email}
        errors={errors}
        loading={loading}
        password={password}
        setContainerState={setContainerState}
      />
      <Buttons
        handleSubmit={handleSubmit}
        loading={false}
      />
    </BodyWrapper>
  </RegistrationWrapper>
)

export default Login
