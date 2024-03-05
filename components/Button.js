import * as React from 'react'
import { Text, TouchableOpacity } from 'react-native'


export default function Button ({ title, onPress }) {
  return (
    <TouchableOpacity
      className='p-4 mt-4 bg-primary border-0 rounded-2xl'
      onPress={onPress}
    >
      <Text className='text-text-dark text-base font-medium'>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
