import * as React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { TextColor } from '../Style'

export default function Header ({ title, navigation }) {
  return (
    <View className='flex flex-row w-full items-center justify-between pb-2'>
      {navigation ? (
        <TouchableOpacity className='pl-4' onPress={() => navigation.goBack()}>
          <AntDesign name='left' size={24} color={TextColor} />
        </TouchableOpacity>
      ) : (
        // placeholder
        <View></View>
      )}
      <Text className='text-text text-3xl mr-4'>{title ? title : ' '}</Text>
    </View>
  )
}
