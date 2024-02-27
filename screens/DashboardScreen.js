import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function DashboardScreen ({ navigation }) {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text>Home Screen</Text>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}
