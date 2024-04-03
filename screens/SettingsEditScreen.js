import React, { useState } from 'react'
import { SafeAreaView, View, Text, ScrollView, Alert } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
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

export default function SettingsEditScreen ({ route, navigation }) {
  const currentProfile = useSelector(state => state.currentProfile)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState(currentProfile.firstName)
  const [lastName, setLastName] = useState(currentProfile.lastName)
  const [phoneNumber, setPhoneNumber] = useState(currentProfile.phoneNumber)
  const [zipCode, setZipCode] = useState(currentProfile.zipCode)
  const [birthday, setBirthday] = useState(currentProfile.birthday)
  const [gender, setGender] = useState(currentProfile.gender)
  const [curCondition, setCurCondition] = useState(currentProfile.curCondition)
  const [pastCondition, setPastCondition] = useState(
    currentProfile.pastCondition
  )
  const [isDiagnosed, setIsDiagnosed] = useState(currentProfile.isDiagnosed)
  const [visibility, setVisibility] = useState(currentProfile.visibility)
  const today = new Date()
  const dates = currentProfile.birthday.split('/')
  const [date, setDate] = useState(new Date(dates[2], dates[0] - 1, dates[1]))
  
  const [selectedDiagnosed, setSelectedDiagnosed] = useState([currentProfile.isDiagnosed])
  const [selectedGender, setSelectedGender] = useState([currentProfile.gender])

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate
    setDate(currentDate)
    setBirthday(date.toLocaleDateString('en-US'))
  }

  const dispatch = useDispatch()
  const handleEditProfile = async () => {
    let emptyFields = localValidate(firstName, lastName, phoneNumber, zipCode, birthday, gender)

    if (emptyFields.length > 0) {
      const emptyFieldsString = emptyFields.join(', ')
      Alert.alert(
        'Empty Fields',
        `Please fill in the following fields: ${emptyFieldsString}`
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
      <Header navigation={navigation} title={'Edit Profile & Settings'} />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        className='flex-1 flex-col w-11/12'
      >
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

        <View className='flex items-center'>
          <Button
            className='w-1/5'
            title='Sign Up'
            onPress={async () => {
              const signUpSuccess = await handleEditProfile()
              if (signUpSuccess) {
                navigation.navigate('Main')
              }
            }}
          ></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
