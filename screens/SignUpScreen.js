import React, { useState } from 'react'
import { SafeAreaView, View, Text, ScrollView, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RadioButton, Checkbox } from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker'

import { PrimaryColor } from '../utility/Style'
import Header from '../components/Header'
import Button from '../components/Button'
import InputField from '../components/InputField'
import { signUp } from '../AuthManager'
import { addUser } from '../data/Actions'
import SelectField from '../components/SelectField'
import { diagnosedOptions, genderOptions } from '../utility/ConstVariables'
import { localValidate } from '../utility/LocalValidate'

const Stack = createNativeStackNavigator()

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [birthday, setBirthday] = useState('')
  const [gender, setGender] = useState('')
  const [curCondition, setCurCondition] = useState('')
  const [pastCondition, setPastCondition] = useState('')
  const [isDiagnosed, setIsDiagnosed] = useState('')
  const [visibility, setVisibility] = useState('AllStudyTeam')
  const [privacy, setPrivacy] = useState(false)
  const [consent, setConsent] = useState(false)
  const today = new Date()
  const [date, setDate] = useState(today)
  const [selectedDiagnosed, setSelectedDiagnosed] = useState([])
  const [selectedGender, setSelectedGender] = useState([])

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate
    setDate(currentDate)
    setBirthday(date.toLocaleDateString('en-US'))
  }

  const dispatch = useDispatch()
  const handleCreateAuth = async () => {
    let emptyFields = localValidate(
      firstName,
      lastName,
      phoneNumber,
      zipCode,
      birthday,
      gender
    )

    if (!email) {
      emptyFields.push('email')
    }

    if (!password) {
      emptyFields.push('password')
    }

    if (emptyFields.length > 0) {
      const emptyFieldsString = emptyFields.join(', ')
      Alert.alert(
        'Empty Fields',
        `Please fill in the following fields: ${emptyFieldsString}`
      )
      return false // Return false indicating sign-up failure
    }

    if (!privacy || !consent) {
      Alert.alert(
        'Privacy Policy',
        'Please accept the privacy policy and consent to continue'
      )
      return false // Return false indicating sign-up failure
    }

    try {
      const newUser = await signUp(`${firstName} ${lastName}`, email, password)
      dispatch(
        addUser({
          ...newUser,
          phoneNumber,
          zipCode,
          birthday,
          firstName,
          lastName,
          gender,
          curCondition,
          pastCondition,
          isDiagnosed,
          visibility
        })
      )
      setPassword('')
      return true // Return true indicating sign-up success
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-email':
          Alert.alert('Sign Up Error', 'Invalid email', [{ text: 'OK' }])
          break
        case 'auth/weak-password':
          Alert.alert(
            'Sign Up Error',
            'Password should be at least 6 characters',
            [{ text: 'OK' }]
          )
          break
        default:
          Alert.alert('Sign Up Error', error.message, [{ text: 'OK' }])
      }
      return false // Return false indicating sign-up failure
    }
  }

  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-background'>
      <Header title={'Sign Up'} />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        className='flex-1 flex-col w-11/12'
      >
        {/* Account Information */}
        <Text className='text-text text-xl font-semibold mt-10 mb-3'>
          Account Information
        </Text>

        <InputField
          label='Email'
          value={email}
          onChangeText={setEmail}
          placeholder='Enter your email'
          keyboardType='email-address'
          required
        />

        <InputField
          label='Password'
          value={password}
          onChangeText={setPassword}
          placeholder='**********'
          secureTextEntry
          required
        />

        {/* Basic Information */}
        <Text className='text-text text-xl font-semibold my-3'>
          Basic Information
        </Text>

        <InputField
          label='First Name'
          value={firstName}
          onChangeText={setFirstName}
          placeholder='First Name'
          required
        />

        <InputField
          label='Last Name'
          value={lastName}
          onChangeText={setLastName}
          placeholder='Last Name'
          required
        />

        <InputField
          label='Phone Number'
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder='Phone Number'
          keyboardType='phone-pad'
          required
        />

        <InputField
          label='Zip Code'
          value={zipCode}
          onChangeText={setZipCode}
          placeholder='Zip Code'
          keyboardType='number-pad'
          required
        />

        <>
          <Text>Birthday*</Text>
          <View className='self-start pl-0 -ml-3 my-1'>
            <DateTimePicker
              testID='dateTimePicker'
              value={date}
              mode={'date'}
              is24Hour={true}
              onChange={onChange}
              maximumDate={today}
            />
          </View>
        </>

        <>
          <Text>Gender*</Text>
          <SelectField
            placeholder='Gender'
            value={selectedGender}
            onSelect={value => {
              setSelectedGender(value)
              setGender(value[0])
            }}
            options={genderOptions}
            multiple={false}
            containerClass='flex flex-col'
            className='flex flex-row p-2 mt-1 items-center border border-secondary rounded-md'
          />
        </>

        {/* Medical Information */}
        <Text className='text-text text-xl font-semibold my-3'>
          Medical Information
        </Text>

        <InputField
          label='Currently, I have the following conditions:'
          value={curCondition}
          onChangeText={setCurCondition}
          placeholder='Type to add'
          multiline
        />

        <InputField
          label='In the past, I have had the following conditions:'
          value={pastCondition}
          onChangeText={setPastCondition}
          placeholder='Type to add'
          multiline
        />

        <>
          <Text>
            Were you diagnosed as fibromyalgia by any medical therapist?
          </Text>
          <SelectField
            placeholder='Yes or No'
            value={selectedDiagnosed}
            onSelect={value => {
              setSelectedDiagnosed(value)
              setIsDiagnosed(value[0])
            }}
            options={diagnosedOptions}
            multiple={false}
            containerClass='flex flex-col'
            className='flex flex-row p-2 mt-1 items-center border border-secondary rounded-md'
          />
        </>

        {/* Profile visibility */}
        <Text className='text-text text-xl font-semibold my-3'>
          My profile is visible to:
        </Text>

        <View className='flex flex-row'>
          <RadioButton.Group
            onValueChange={value => setVisibility(value)}
            value={visibility}
          >
            <View className='flex flex-row items-center'>
              <RadioButton value='AllStudyTeam' color='#ac1e52' />
              <Text>All study teams</Text>
            </View>
            <View className='flex flex-row items-center'>
              <RadioButton value='OnlyInterested' color='#ac1e52' />
              <Text>Only the study teams I show interest in</Text>
            </View>
          </RadioButton.Group>
        </View>

        {/* Privacy policy */}
        <Text className='text-text text-xl font-semibold my-3'>
          Privacy Policy
        </Text>

        <View>
          <View className='flex flex-row items-center'>
            <Checkbox
              status={privacy ? 'checked' : 'unchecked'}
              onPress={() => {
                setPrivacy(!privacy)
              }}
              color={PrimaryColor}
            />
            <Text className='inline-block'>
              I have read & accepted{' '}
              <Text
                onPress={() => navigation.navigate('Policy')}
                className='underline'
              >
                Terms & Privacy Policy
              </Text>
              *
            </Text>
          </View>

          <View className='flex flex-row items-center'>
            <Checkbox
              status={consent ? 'checked' : 'unchecked'}
              onPress={() => {
                setConsent(!consent)
              }}
              color={PrimaryColor}
            />
            <Text className='inline-block'>
              I give consent to NFA to email and text me*
            </Text>
          </View>
        </View>

        <View className='flex items-center'>
          <Button
            className='w-1/5'
            title='Sign Up'
            onPress={async () => {
              const signUpSuccess = await handleCreateAuth()
              if (signUpSuccess) {
                navigation.navigate('Main')
              }
            }}
          ></Button>

          <Text
            className='mt-6 underline font-semibold'
            onPress={() => navigation.navigate('Login')}
          >
            Have Account? Log in
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
