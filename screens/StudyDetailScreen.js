import * as React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Linking
} from 'react-native'
import FullWidthImage from 'react-native-fullwidth-image'
import { Ionicons } from '@expo/vector-icons'

import AccordionItem from '../components/Accordion'
import Header from '../components/Header'
import { TextColor } from '../Style'

export default function StudyDetailsScreen ({ route, navigation }) {
  const { studyId } = route.params

  // studies mock data
  const study = {
    id: 1,
    title:
      'The Effect of Non-pharmacological Intervention in Fibromyalgia Syndrome',
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
    <SafeAreaView className='flex-1 items-center justify-center bg-background'>
      <Header navigation={navigation} title={'Study Details'} />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        className='flex-1 flex-col w-11/12'
        contentContainerStyle={{
          alignItems: 'center'
        }}
      >
        <View className='w-11/12 mt-4'>
          <FullWidthImage className='w-11/12' source={{ uri: study.logoUri }} />
        </View>
        <View className='w-11/12 mt-2'>
          <Text className='text-text text-xl font-medium'>{study.title}</Text>
          <Text className='text-text text-base mt-2'>{study.researchers}</Text>
          <Text
            className='text-primary text-sm underline'
            onPress={() => Linking.openURL(study.survey)}
          >
            Link to the survey
          </Text>
          <Text className='text-text text-sm font-light'>
            {study.description}
          </Text>
        </View>
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
          <Text className='text-text text-sm font-light'>{`Research identifier: ${
            study.studyIdentifier ? study.studyIdentifier : 'not provided'
          }`}</Text>
        </AccordionItem>
        <TouchableOpacity
          className='p-4 mt-4 bg-primary border-0 rounded-2xl'
          onPress={() => Linking.openURL(study.survey)}
        >
          <Text className='text-text-dark text-base font-medium'>
            I'm interested!
          </Text>
        </TouchableOpacity>
        <View className='w-11/12 mt-8 pb-8'>
          <Text className='text-text text-base font-medium'>
            For questions about this study, please contact:
          </Text>
          <Text className='text-text text-base mt-2'>{study.contact}</Text>
          <View className='flex flex-row w-full items-center mt-2'>
            <Ionicons name='call-outline' size={22} color={TextColor} />
            <Text
              className='text-primary underline text-sm font-light ml-2'
              onPress={() => Linking.openURL(`tel:${study.phone}`)}
            >
              {study.phone}
            </Text>
          </View>
          <View className='flex flex-row w-full items-center mt-2'>
            <Ionicons name='mail-outline' size={22} color={TextColor} />
            <Text
              className='text-primary underline text-sm font-light ml-2'
              onPress={() => Linking.openURL(`mailto:${study.email}`)}
            >
              {study.email}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
