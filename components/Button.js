import * as React from 'react'
import { Text, TouchableOpacity } from 'react-native'


export default function Button ({ title, onPress, background='bg-primary', text='text-text-dark' }) {
  return (
    <TouchableOpacity
      className={`p-4 mt-4 ${background} border-0 rounded-2xl items-center`}
      onPress={onPress}
    >
      <Text className={`${text} text-base font-medium`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
