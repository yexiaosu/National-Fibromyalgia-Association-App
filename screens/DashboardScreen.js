import React, { useState, useEffect, useMemo } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useColorScheme } from 'nativewind'
import RadioGroup from 'react-native-radio-buttons-group'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { BottomSheet } from '@rneui/themed'

import StudyCard from '../components/StudyCard'
import Header from '../components/Header'
import Button from '../components/Button'
import { TextColor } from '../utility/Style'
import { loadAllStudies, loadProfile, loadTags } from '../data/Actions'
import SelectField from '../components/SelectField'
import { getAuthUser } from '../AuthManager'
import { loadConditionTags, studyStatus } from '../utility/ConstVariables'

export default function DashboardScreen ({ navigation }) {
  const allStudies = useSelector(state => state.allStudies)
  const [studies, setStudies] = useState([])
  const radioButtons = useMemo(() => studyStatus, [])
  const [conditions, setConditions] = useState([])
  const [topics, setTopics] = useState([])
  const [selectedConditions, setSelectedConditions] = useState([])
  const [selectedTopics, setSelectedTopics] = useState([])
  const [selectedStatus, setSelectedStatus] = useState('3')

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
    loadTags().then(v => {
      const c = []
      const t = []
      for (const [key, value] of Object.entries(v.conditions)) {
        c.push({ label: value, value: value })
      }
      for (const [key, value] of Object.entries(v.topics)) {
        t.push({ label: value, value: value })
      }
      setConditions(c)
      setTopics(t)
    })
    const currentUid = getAuthUser().uid
    dispatch(loadProfile(currentUid))
  }, [])
  useEffect(() => {
    setStudies(allStudies) // Update the local state when allStudies changes
  }, [allStudies, conditions, topics])

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
        {/* <SelectField
          placeholder='Select status...'
          value={selectedStatus}
          onSelect={setSelectedStatus}
          options={studyStatus}
          multiple={false}
        /> */}
        <SelectField
          placeholder='Conditions...'
          value={selectedConditions}
          onSelect={setSelectedConditions}
          options={conditions}
          multiple={true}
        />
        <SelectField
          placeholder='Topics...'
          value={selectedTopics}
          onSelect={setSelectedTopics}
          options={topics}
          multiple={true}
        />
      </View>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={setSelectedStatus}
        selectedId={selectedStatus}
        layout='row'
      />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        className='flex-1 flex-col w-11/12'
        contentContainerStyle={{
          alignItems: 'center'
        }}
      >
        {studies
          .filter(study => {
            // status
            if (selectedStatus === '1' && !study.isActive) {
              return false
            } else if (selectedStatus === '2' && study.isActive) {
              return false
            }
            // conditions
            if (selectedConditions.length > 0) {
              let flag = false
              study.researchTopics.conditions.every(element => {
                if (selectedConditions.includes(element)) {
                  flag = true
                  return false // break the iteration
                }
                return true
              })
              if (flag === false) {
                return false
              }
            }
            // topics
            if (selectedTopics.length > 0) {
              let flag = false
              study.researchTopics.topics.every(element => {
                if (selectedTopics.includes(element)) {
                  flag = true
                  return false // break the iteration
                }
                return true
              })
              if (flag === false) {
                return false
              }
            }
            return true
          })
          .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
          .sort((a, b) => b.isActive - a.isActive)
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
