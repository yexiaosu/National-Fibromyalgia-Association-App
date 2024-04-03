import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { Provider, useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { rootReducer } from './data/Reducer'
import HomeStackScreen from './screens/HomeStackScreen'
import SettingsStackScreen from './screens/SettingsStackScreen'
import HistoryStackScreen from './screens/HistoryStackScreen'
import MessageStackScreen from './screens/MessageStackScreen'
import PolicyScreen from './screens/PolicyScreen'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import { PrimaryColor } from './utility/Style'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup' component={SignUpScreen} />
      <Stack.Screen name='Policy' component={PolicyScreen} />
    </Stack.Navigator>
  )
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: PrimaryColor
      }}
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
        name='Yours'
        component={SettingsStackScreen}
        options={{
          tabBarLabel: 'Yours',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='settings-outline' size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>

          <NavigationContainer>

            <Stack.Navigator initialRouteName="Auth">
              <Stack.Screen
                name="Auth"
                component={StackNavigator}
                options={{ headerShown: false, gestureEnabled: false }}
              />
              <Stack.Screen
                name="Main"
                component={TabNavigator}
                options={{ headerShown: false, gestureEnabled: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>

        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </Provider>
  )
}
