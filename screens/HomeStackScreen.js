import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DashboardScreen from './DashboardScreen'
import StudyDetailsScreen from './StudyDetailScreen'

const Stack = createNativeStackNavigator()

export default function HomeStackScreen () {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Dashboard' component={DashboardScreen} />
      <Stack.Screen name='Details' component={StudyDetailsScreen} />
    </Stack.Navigator>
  )
}
