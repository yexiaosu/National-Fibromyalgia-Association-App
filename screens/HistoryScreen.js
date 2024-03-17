import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import StudyCard from '../components/StudyCard'
import Header from '../components/Header'
import { loadProfile } from '../data/Actions'

export default function HistoryScreen ({ navigation }) {
  const allStudies = useSelector(state => state.allStudies)
  const currentProfile = useSelector(state => state.currentProfile)
  const [history, setHistory] = useState([])

  // mock data
  const currentUid = 'dq0SkifOywwrrv1JY973'
  // the following code for getting current profile should be moved to signin/signup after the functionality is done
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadProfile(currentUid))
  }, [])
  useEffect(() => {
    if (currentProfile.studyHistory) {
      const h = allStudies.filter(s =>
        currentProfile.studyHistory.includes(s.key)
      )
      setHistory(h)
    }
  }, [currentProfile])

  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-background'>
      <Header title={'History'} />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        className='flex-1 flex-col w-11/12'
        contentContainerStyle={{
          alignItems: 'center'
        }}
      >
        {history.map((study, idx) => (
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
