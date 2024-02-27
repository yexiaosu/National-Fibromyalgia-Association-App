import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryScreen from './HistoryScreen';

const Stack = createNativeStackNavigator();

export default function HistoryStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HistoryDashboard" component={HistoryScreen} />
      {/* <Stack.Screen name="Details" component={StudyDetailsScreen} /> */}
    </Stack.Navigator>
  );
}