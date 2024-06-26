import React, { useRef } from 'react'
import { View, TouchableOpacity, TextInput, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'
import {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetFooter,
  BottomSheetModal
} from '@gorhom/bottom-sheet'
import { ListItem } from '@rneui/themed'

import { PrimaryColor, SecondaryColor, TextColor } from '../utility/Style'

export default function SelectField ({
  placeholder,
  label,
  value,
  renderValue,
  onSelect,
  containerClass='w-5/12 flex flex-col',
  className='flex flex-row p-2 mt-1 items-center border-2 border-gray-100 rounded-md',
  multiple,
  options
}) {
  const sheet = useRef()
  const { bottom } = useSafeAreaInsets()

  const valueString = renderValue
    ? renderValue
    : value
    ? value
        .map(v => options.find(o => o.value === v)?.label)
        .filter(Boolean)
        .join(', ')
    : ''

  function presentOptions () {
    sheet.current?.present()
  }

  function dismissOptions () {
    sheet.current?.dismiss()
  }

  function without (array, value) {
    return array.filter(v => v !== value)
  }

  function updateValue (optionValue) {
    if (value.includes(optionValue)) {
      onSelect?.(multiple ? without(value, optionValue) : [])
    } else {
      onSelect?.(multiple ? [...value, optionValue] : [optionValue])
      if (!multiple) dismissOptions()
    }
  }

  return (
    <>
      <TouchableOpacity
        className={containerClass}
        onPress={presentOptions}
      >
        {label && <Text>{label}</Text>}
        <View
          pointerEvents='none'
          className={className}
        >
          <TextInput
            value={valueString}
            className='flex-1 text-text truncate'
            placeholder={placeholder}
          />
          <AntDesign name='right' size={24} color={SecondaryColor} />
        </View>
      </TouchableOpacity>
      <BottomSheetModal
        ref={sheet}
        snapPoints={['40%']}
        stackBehavior='replace'
        enableDismissOnClose
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
          />
        )}
      >
        <BottomSheetFlatList
          data={options}
          keyExtractor={o => o.value}
          renderItem={({ item, index }) => {
            return (
              <ListItem bottomDivider onPress={() => updateValue(item.value)}>
                <ListItem.Content>
                  <ListItem.Title>{item.label}</ListItem.Title>
                </ListItem.Content>
                {value.includes(item.value) && (
                  <AntDesign name='check' size={20} color={PrimaryColor} />
                )}
              </ListItem>
            )
          }}
        />
      </BottomSheetModal>
    </>
  )
}
