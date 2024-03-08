import * as React from 'react'
import { Button, View, Text } from 'react-native'

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>By signing up, I accept the</Text>
      <Button
        title="private policy"
        onPress={() => navigation.navigate('Policy')}
      />
    </View>
  )
}
