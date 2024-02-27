import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessageListScreen from './MessageListScreen';

const Stack = createNativeStackNavigator();

export default function MessageStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MessageList" component={MessageListScreen} />
      {/* <Stack.Screen name="Details" component={StudyDetailsScreen} /> */}
    </Stack.Navigator>
  );
}