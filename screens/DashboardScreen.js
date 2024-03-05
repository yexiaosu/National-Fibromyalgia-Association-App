import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import StudyCard from '../components/StudyCard'
import Header from '../components/Header'

export default function DashboardScreen ({ navigation }) {
  // dark mode test
  // const [isEnabled, setIsEnabled] = useState(false);
  // const { colorScheme, setColorScheme } = useColorScheme();
  // const toggleSwitch = () => {
  //   setIsEnabled(previousState => !previousState)
  //   setColorScheme(colorScheme === "light" ? "dark" : "light")
  // };

  // studies mock data
  const studies = [
    {
      id: 1,
      title:
        'The Effect of Non-pharmacological Intervention in Fibromyalgia Syndrome',
      logoUri:
        'https://www.fmaware.org/wp-content/uploads/2020/02/st-scholastic.jpg',
      participants: 172,
      isActive: true,
      isOngoing: true,
      description:
        'The European League Against Rheumatism (EULAR) continues to support a multidisciplinary approach, combining non-medicinal and medicinal treatments, to manage fibromyalgia. Master of Health Informatics student, Linda M. Feshami, BS, RHIT, CRC, CHC, CDIP of the College of St. Scholastica, with the collaboration of the NFA, is conducting research to determine if there is a significant difference in pain levels when a non-medicinal treatment is combined with an existing medicinal treatment.'
    },
    {
      id: 2,
      title: 'NFA 2007- PATIENT SURVEY',
      logoUri:
        'https://www.fmaware.org/wp-content/uploads/2020/02/ACR_CMYK.png',
      participants: 2596,
      isActive: false,
      isOngoing: false,
      description:
        '(Presented at the American College of Rheumatology) An internet survey of 2,596 people with fibromyalgia'
    }
  ]

  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-background'>
      {/* <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}
      <Header title={'Dashboard'} />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        className='flex-1 flex-col w-11/12'
        contentContainerStyle={{
          alignItems: 'center'
        }}
      >
        {studies.map((study, idx) => (
          <StudyCard
            key={idx}
            navigation={navigation}
            study={study}
          ></StudyCard>
        ))}
        <Text className='text-text font-extralight mt-4 mb-8'>
          No more studies...
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}
