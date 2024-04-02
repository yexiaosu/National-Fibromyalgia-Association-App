import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from './SettingsScreen';
import Button from '../components/Button';

const Stack = createNativeStackNavigator();

export default function SettingsStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Setting" component={SettingsScreen} />
      {/* <Stack.Screen name="SettingEdit" component={StudyDetailsScreen} /> */}
    </Stack.Navigator>
  );
}