import * as React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
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
        <Image className='ml-4' source={require('../assets/NFALogo 9.17.png')} style={{
          width: 187.5,
          height: 40.75,
          resizeMode: 'contain',
        }} />
      )}
      <Text className='text-text text-3xl mr-4'>{title ? title : ' '}</Text>
    </View>
  )
}
