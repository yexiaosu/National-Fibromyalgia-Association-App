import * as React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import AccordionItem from '../components/Accordion'
import Header from '../components/Header'

export default function StudyDetailsScreen ({ route, navigation }) {
  const { studyId } = route.params

  // studies mock data
  const study = {
    id: 1,
    title: 'European League Against Rheumatism',
    logoUri:
      'https://www.fmaware.org/wp-content/uploads/2020/02/st-scholastic.jpg',
    researchers: 'Linda Feshami, Dr. Danika Brinda',
    survey:
      'https://csscholastica.co1.qualtrics.com/jfe/form/SV_3CWsCMWkjBUDz81',
    description:
      'The European League Against Rheumatism (EULAR) continues to support a multidisciplinary approach, combining non-medicinal and medicinal treatments, to manage fibromyalgia. Master of Health Informatics student, Linda M. Feshami, BS, RHIT, CRC, CHC, CDIP of the College of St. Scholastica, with the collaboration of the NFA, is conducting research to determine if there is a significant difference in pain levels when a non-medicinal treatment is combined with an existing medicinal treatment.',
    requirements:
      'Study participants must be at least 18 years of age, diagnosed with fibromyalgia syndrome (FMS) by a health care practitioner, have experienced debilitating/life-altering pain symptoms due to FMS for a minimum of two years, and have added a non-medication treatment to an existing treatment based on medication alone.',
    procedure:
      'The study involves a short survey (approximately 10 min). Participants will be asked to rate pain levels at three separate points: 1) before treatment (either medicinal or non-medicinal), 2) during medicinal treatment only, and 3) medicinal combined with non-medicinal using a Likert Scale.',
    compensation: '',
    studyIdentifier: '',
    relatedResearches: '',
    videoUri: '',
    expirationDate: '',
    contact: 'Linda Feshami',
    email: 'lfeshami@css.edu',
    phone: '507-273-7764'
  }

  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
      <Header navigation={navigation} title={'Study Details'} />
      <Text>Details Screen for study {studyId}</Text>
      {/* Test accordion */}
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        className='flex-1 flex-col w-11/12'
        contentContainerStyle={{
          alignItems: 'center'
        }}
      >
        <AccordionItem title='Who can participate?'>
          <Text className='text-text text-sm font-light'>
            {study.requirements}
          </Text>
        </AccordionItem>
        <AccordionItem title='What is invovled?'>
          <Text className='text-text text-sm font-light'>
            {study.procedure}
          </Text>
        </AccordionItem>
        <AccordionItem title='Compensation'>
          <Text className='text-text text-sm font-light'>
            {study.compensation ? study.compensation : 'None'}
          </Text>
        </AccordionItem>
        <AccordionItem title='Additional Information'>
          <Text className='text-text text-sm font-light'>
          </Text>
        </AccordionItem>
      </ScrollView>
    </SafeAreaView>
  )
}
