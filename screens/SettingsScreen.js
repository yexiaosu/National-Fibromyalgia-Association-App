import React, { useEffect } from 'react'
import {
  View,
  Text,
  ScrollView,
  SafeAreaView
} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { Avatar } from '@rneui/themed'

import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context';
import { signOut, getAuthUser } from '../AuthManager';
import { loadProfile } from '../data/Actions'
import { TextColor } from '../Style'
import Button from '../components/Button'

export default function SettingsScreen ({ navigation }) {
  const currentProfile = useSelector(state => state.currentProfile)

  const dispatch = useDispatch()
  useEffect(() => {
    const currentUid = getAuthUser().uid
    dispatch(loadProfile(currentUid))
  }, [])

  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-background'>
      <Header title={'Yours'} />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        className='flex-1 flex-col w-11/12'
      >
        <Button
          className='w-1/5'
          title="Logout"
          onPress={async () => {
            try {
              await signOut();
              navigation.navigate('Login')
            } catch (error) {
              Alert.alert("Sign In Error", error.message, [{ text: "OK" }])
            }
          }}
        >
        </Button>        <View className='items-center justify-center mt-8'>
          <Avatar
            size={128}
            rounded
            title={currentProfile.name[0]}
            containerStyle={{ backgroundColor: '#3d4db7' }}
          />
          <Text className='text-text text-3xl font-medium mt-4'>
            {currentProfile.name}
          </Text>
          <View>
            <View className='flex flex-row w-full items-center mt-2'>
              <Ionicons name='call-outline' size={22} color={TextColor} />
              <Text className='text-text underline text-base font-light ml-2'>
                {currentProfile.phoneNumber}
              </Text>
            </View>
            <View className='flex flex-row w-full items-center mt-2'>
              <Ionicons name='mail-outline' size={22} color={TextColor} />
              <Text className='text-text underline text-base font-light ml-2'>
                {currentProfile.email}
              </Text>
            </View>
          </View>
        </View>
        <View className='w-11/12 mt-2'>
          <Text className='text-text text-xl font-medium'>Information</Text>
          <View className='flex flex-row w-full items-center justify-between mt-2'>
            <Text className='text-text text-lg font-normal'>Gender</Text>
            <Text className='text-text text-base font-light'>
              {currentProfile.gender}
            </Text>
          </View>
          <View className='flex flex-row w-full items-center justify-between mt-2'>
            <Text className='text-text text-lg font-normal'>Birthday</Text>
            <Text className='text-text text-base font-light'>
              {currentProfile.birthday}
            </Text>
          </View>
          <View className='flex flex-row w-full items-center justify-between mt-2'>
            <Text className='text-text text-lg font-normal'>
              Diagnosed as fibromyalgia
            </Text>
            <Text className='text-text text-base font-light'>
              {currentProfile.isDiagnosed ? currentProfile.isDiagnosed : '-'}
            </Text>
          </View>
          <View className='flex w-full items-start justify-center mt-2'>
            <Text className='text-text text-lg font-normal'>
              Past phsical conditions
            </Text>
            <Text className='text-text text-base font-light'>
              {currentProfile.pastCondition
                ? currentProfile.pastCondition
                : '-'}
            </Text>
          </View>
          <View className='flex w-full items-start justify-center mt-2'>
            <Text className='text-text text-lg font-normal'>
              Current phsical conditions
            </Text>
            <Text className='text-text text-base font-light'>
              {currentProfile.curCondition ? currentProfile.curCondition : '-'}
            </Text>
          </View>
        </View>
        <View className='w-11/12 mt-2'>
          <Text className='text-text text-xl font-medium'>Settings</Text>
          <View className='flex w-full items-start justify-center mt-2'>
            <Text className='text-text text-lg font-normal'>
              Current phsical conditions
            </Text>
            <Text className='text-text text-base font-light'>
              {currentProfile.visibility == 'AllStudyTeam'
                ? 'All study teams'
                : 'Only the study teams I show interest in'}
            </Text>
          </View>
        </View>
        <View className='pb-8'>
          <Button
            title='Edit profile & settings'
            onPress={() =>
              navigation.navigate('SettingEdit', {
                uid: currentProfile.uid
              })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}