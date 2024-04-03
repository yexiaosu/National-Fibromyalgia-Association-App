import React from 'react'
import { Text, TextInput } from 'react-native'

const InputField = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  multiline = false,
  required = false
}) => {
  return (
    <>
      <Text>{`${label}${required ? '*' : ''}`}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline={multiline}
        className={`w-full px-1 py-2 mt-1 mb-2 border-2 border-gray-100 rounded-md text-base ${
          multiline ? 'h-24' : ''
        } focus:outline-none focus:border-gray-300`}
      />
    </>
  )
}

export default InputField
