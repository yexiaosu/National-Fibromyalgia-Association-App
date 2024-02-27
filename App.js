import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

import HomeStackScreen from './screens/HomeStackScreen'
import SettingsStackScreen from './screens/SettingsStackScreen'
import HistoryStackScreen from './screens/HistoryStackScreen'
import MessageStackScreen from './screens/MessageStackScreen'
import { PrimaryColor } from './Style'

const Tab = createBottomTabNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarActiveTintColor: PrimaryColor }}
        initialRouteName='Home'
      >
        <Tab.Screen
          name='Home'
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name='home' size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name='History'
          component={HistoryStackScreen}
          options={{
            tabBarLabel: 'History',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name='clockcircleo' size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name='Messages'
          component={MessageStackScreen}
          options={{
            tabBarLabel: 'Messages',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name='message1' size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name='Settings'
          component={SettingsStackScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='settings-outline' size={size} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
