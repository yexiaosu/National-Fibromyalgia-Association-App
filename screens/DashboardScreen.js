import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useColorScheme } from 'nativewind'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { BottomSheet } from '@rneui/themed'

import StudyCard from '../components/StudyCard'
import Header from '../components/Header'
import Button from '../components/Button'
import { TextColor } from '../Style'
import { loadAllStudies } from '../data/Actions'
import SelectField from '../components/SelectField'

export default function DashboardScreen({ navigation }) {
  const allStudies = useSelector(state => state.allStudies)
  const [studies, setStudies] = useState([])
  const studyStatus = [
    { label: 'Active', value: 'Active' },
    { label: 'Inactive', value: 'Inactive' },
    { label: 'All', value: 'All' }
  ]
  const tags = [
    { label: 'Surveys', value: 'survey' },
    { label: 'Clinical Trials', value: 'clinical' }
  ]
  const [selectedTags, setSelectedTags] = useState([])
  const [selectedStatus, setSelectedStatus] = useState([])

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
    setStudies(allStudies) // Update the local state when allStudies changes
  }, [allStudies])

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
      <View className='flex flex-row w-full justify-evenly mb-2'>
        <SelectField
          placeholder='Select status...'
          value={selectedStatus}
          onSelect={setSelectedStatus}
          options={studyStatus}
          multiple={false}
        />
        <SelectField
          placeholder='Select tags...'
          value={selectedTags}
          onSelect={setSelectedTags}
          options={tags}
          multiple={true}
        />
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        className='flex-1 flex-col w-11/12'
        contentContainerStyle={{
          alignItems: 'center'
        }}
      >
        {studies
          .filter(study => {
            if (selectedStatus[0] === 'Active' && !study.isActive) {
              return false
            } else if (selectedStatus[0] === 'Inactive' && study.isActive) {
              return false
            }
            if (selectedTags.length > 0) {
              let flag = false
              study.tags.forEach(element => {
                if (selectedTags.includes(element)) {
                  flag = true
                }
              })
              if (flag === false) {
                return false
              }
            }
            return true
          })
          .sort((a, b) => b - a)
          .map((study, idx) => (
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
