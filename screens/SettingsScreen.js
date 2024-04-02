import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from '../components/Button';
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-background'>
      <Header title={'Settings'} />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        className='flex-1 flex-col w-11/12'
      >
        <Button
          className='w-1/5'
          title="Logout"
        // onPress={navigation.navigate('Login')}
        >
        </Button>
      </ScrollView>
    </SafeAreaView>
  )
}