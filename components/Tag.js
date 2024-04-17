import * as React from 'react'
import { Text, View } from 'react-native'


export default function Tag ({ title, background='bg-primary', text='text-text-dark', className='' }) {
  return (
    <View
      className={`px-2 py-1 mt-2 ${background} border-0 rounded-md items-center ${className}`}
    >
      <Text className={`${text} text-sm font-normal`}>
        {title}
      </Text>
    </View>
  )
}
