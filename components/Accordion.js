import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Platform,
  UIManager,
  LayoutAnimation
} from 'react-native'
import { Divider } from '@rneui/themed'
import { FontAwesome } from '@expo/vector-icons'
import { PrimaryColor, TextColor } from '../Style'

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

export default function AccordionItem ({ children, title }) {
  const [expanded, setExpanded] = useState(false)

  function toggleItem () {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setExpanded(!expanded)
  }

  return (
    <View className='flex-col w-11/12 mt-4'>
      <TouchableOpacity
        className='flex-row justify-start items-center w-full'
        onPress={toggleItem}
      >
        {expanded ? (
          <>
            <FontAwesome name='minus-square-o' size={24} color={PrimaryColor} />
            <Text className='text-primary text-lg ml-2'>{title}</Text>
          </>
        ) : (
          <>
            <FontAwesome name='plus-square-o' size={24} color={TextColor} />
            <Text className='text-text text-lg ml-2'>{title}</Text>
          </>
        )}
      </TouchableOpacity>
      <Divider />
      {expanded && <View className='text-text text-sm mt-2'>{children}</View>}
    </View>
  )
}
