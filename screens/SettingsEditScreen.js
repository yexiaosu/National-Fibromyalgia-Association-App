import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'

import Header from '../components/Header'

export default function SettingsEditScreen ({ route, navigation }) {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-background'>
      <Header navigation={navigation} title={'Settings'} />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        className='flex-1 flex-col w-11/12'
        contentContainerStyle={{
          alignItems: 'center'
        }}
      >

      </ScrollView>
    </SafeAreaView>
  )
}
