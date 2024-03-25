import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header'
import SignUpScreen from './SignUpScreen'
import Button from '../components/Button';
import DashboardScreen from './DashboardScreen';

const Stack = createNativeStackNavigator();

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-background'>
      <Header title={'Login'} />
      <View
        contentInsetAdjustmentBehavior='automatic'
        className='flex-1 flex-col w-11/12'
        contentContainerStyle={{
          alignItems: 'center'
        }}
      >
        <Text
          className='text-text text-sm mt-40'>
          Email
        </Text>
        <TextInput
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
          placeholder='Enter your email'
          className='w-full py-2 mb-4 border-b-2 border-gray-100 text-xl'
        />

        <Text>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder='**********'
          secureTextEntry
          className='w-full py-2 mb-4 border-b-2 border-gray-100 text-xl'
        />

        <Button
          className='w-1/5'
          title="Login"
          onPress={() => navigation.navigate('Main')}
        >
        </Button>

        <View className='flex items-center'>
          <Text
            className='mt-4 underline font-semibold'
            onPress={() => navigation.navigate('Signup')}
          >
            New user? Sign up
          </Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

