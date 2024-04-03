import * as React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import FullWidthImage from 'react-native-fullwidth-image'

import { TextColor } from '../utility/Style'

export default function StudyCard ({ navigation, study }) {
  const startDate = new Date(`${study.startDate}Z`).toLocaleDateString("en-US")
  const recruitEndDate = new Date(`${study.recruitEndDate}Z`).toLocaleDateString("en-US")
  return (
    <TouchableOpacity
      className='items-center w-11/12 border rounded-lg border-border px-0 py-4 mt-2'
      onPress={() =>
        navigation.navigate('Details', {
          studyId: study.key
        })
      }
    >
      <View className='w-11/12'>
        <FullWidthImage className='w-11/12' source={{ uri: study.logoUri }} />
      </View>
      <View className='flex-col justify-center items-begin w-11/12 mt-4'>
        <Text className='text-text text-base text-wrap'>{study.title}</Text>
        <View className='flex-row justify-between items-center mt-1'>
          <Text className='text-text text-sm'>{`${startDate} - ${recruitEndDate}`}</Text>
        </View>
        <View className='flex-row justify-between items-center mt-1'>
          <View className='flex-row items-center space-x-4'>
            {study.isOngoing ? (
              <MaterialCommunityIcons
                name='progress-clock'
                size={22}
                color={TextColor}
              />
            ) : (
              <Feather name='check-circle' size={20} color={TextColor} />
            )}
            <View className='flex-row items-center space-x-1'>
              <MaterialIcons name='groups' size={22} color={TextColor} />
              <Text className='text-text text-sm'>{study.participants}</Text>
            </View>
          </View>
          <View
            className={`px-4 py-2 ${
              study.isActive ? 'bg-secondary' : 'bg-disabled'
            } border-0 rounded-2xl`}
          >
            <Text className='text-text-dark'>
              {study.isActive ? 'Recruiting' : 'Recruit End'}
            </Text>
          </View>
        </View>
      </View>
      <View className='w-11/12 mt-2'>
        <Text className='text-text text-sm font-light'>
          {study.description}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
