import React, {useState} from 'react';
import { Button, View, Text, Switch } from 'react-native';
import { useColorScheme } from "nativewind";

import StudyCard from '../components/StudyCard';

export default function DashboardScreen ({ navigation }) {
  // dark mode test
  // const [isEnabled, setIsEnabled] = useState(false);
  // const { colorScheme, setColorScheme } = useColorScheme();
  // const toggleSwitch = () => {
  //   setIsEnabled(previousState => !previousState)
  //   setColorScheme(colorScheme === "light" ? "dark" : "light")
  // };

  // studies mock data
  const studies = [{
    id: 1,
    title: 'NFA 2007- PATIENT SURVEY',
    logoUri: 'https://www.fmaware.org/wp-content/uploads/2020/02/ACR_CMYK.png',
    participants: 2596,
    isActive: false,
    isOngoing: true,
    description: '(Presented at the American College of Rheumatology) An internet survey of 2,596 people with fibromyalgia'
  }]

  return (
    <View className='flex-1 items-center justify-center bg-background'>
      {/* <Text>Home Screen</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}
      {studies.map((study, idx) => <StudyCard key={idx} navigation={navigation} study={study}></StudyCard>)}
    </View>
  )
}
