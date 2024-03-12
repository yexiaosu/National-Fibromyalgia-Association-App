import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import StudyCard from '../components/StudyCard'
import Header from '../components/Header'
import Button from '../components/Button'
import { TextColor } from '../Style'
import { loadAllStudies } from '../data/Actions'

export default function DashboardScreen ({ navigation }) {
  const allStudies = useSelector((state) => state.allStudies);
  const [studies, setStudies] = useState([])

  // dark mode test
  // const [isEnabled, setIsEnabled] = useState(false);
  // const { colorScheme, setColorScheme } = useColorScheme();
  // const toggleSwitch = () => {
  //   setIsEnabled(previousState => !previousState)
  //   setColorScheme(colorScheme === "light" ? "dark" : "light")
  // };

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadAllStudies())
  }, [])
  useEffect(() => {
    setStudies(allStudies); // Update the local state when allStudies changes
}, [allStudies]);

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
