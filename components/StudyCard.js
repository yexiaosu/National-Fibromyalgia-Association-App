import * as React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

export default function StudyCard ({ navigation, study }) {
  return (
    <TouchableOpacity
      className='items-center w-11/12 border rounded-lg border-border px-0 py-4'
      onPress={() =>
        navigation.navigate('Details', {
          studyId: study.id
        })
      }
    >
      <Image
        className='w-11/12 h-16'
        resizeMode='contain'
        source={{
          uri: study.logoUri
        }}
      />
      <View className='flex-row justify-between items-center w-11/12 mt-4'>
        <View>
          <Text className='text-text text-base text-wrap'>{study.title}</Text>
          <View className='flex-row items-center space-x-4'>
            <MaterialCommunityIcons
              name='progress-clock'
              size={22}
              color='black'
            />
            <View className='flex-row items-center space-x-2'>
              <MaterialIcons name='groups' size={22} color='black' />
              <Text className='text-text text-sm'>{study.participants}</Text>
            </View>
          </View>
        </View>
        <View className='px-4 py-2 bg-primary border-0 rounded-2xl'>
          <Text className='text-text-dark'>
            {study.isActive ? 'Active' : 'Inactive'}
          </Text>
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
