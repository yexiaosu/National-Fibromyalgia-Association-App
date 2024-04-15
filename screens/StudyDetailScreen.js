import * as React from 'react'
import { SafeAreaView, ScrollView, Text, View, Linking } from 'react-native'
import FullWidthImage from 'react-native-fullwidth-image'
import { Ionicons } from '@expo/vector-icons'
import { useSelector, useDispatch } from 'react-redux'

import AccordionItem from '../components/Accordion'
import Header from '../components/Header'
import Button from '../components/Button'
import { TextColor } from '../utility/Style'
import { addStudyToHistory } from '../data/Actions'

export default function StudyDetailsScreen ({ route, navigation }) {
  const allStudies = useSelector(state => state.allStudies)
  const currentProfile = useSelector(state => state.currentProfile)
  const { studyId } = route.params
  const study = allStudies.filter(s => s.key === studyId)[0]
  const startDate = new Date(`${study.startDate}T23:59:59Z`).toLocaleDateString('en-US')
  const recruitEndDate = new Date(
    `${study.recruitEndDate}T23:59:59Z`
  ).toLocaleDateString('en-US')
  const studyEndDate = study.studyEndDate
    ? new Date(`${study.studyEndDate}T23:59:59Z`).toLocaleDateString('en-US')
    : ''
  const today = new Date()

  const dispatch = useDispatch()

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
        {study.logoUri && (
          <View className='w-11/12 mt-4'>
            <FullWidthImage
              className='w-11/12'
              source={{ uri: study.logoUri }}
            />
          </View>
        )}
        <View className='w-11/12 mt-2'>
          <Text className='text-text text-xl font-medium'>{study.title}</Text>
          <Text className='text-text text-base mt-2'>{study.researchers}</Text>
          {study.isActive && (
            <Text
              className='text-primary text-sm underline'
              onPress={() => Linking.openURL(study.additionalLinks)}
            >
              Link to the survey
            </Text>
          )}
          <Text className='text-text text-sm font-light'>
            {study.description}
          </Text>
        </View>
        {study.isActive ? (
          <>
            <AccordionItem title='Who can participate?'>
              {study.inclusionCriteria && (
                <>
                  <Text className='text-text text-base'>We need:</Text>
                  <Text className='text-text text-sm font-light'>
                    {study.inclusionCriteria}
                  </Text>
                </>
              )}
              {study.exclusionCriteria && (
                <>
                  <Text className='text-text text-base'>We reject:</Text>
                  <Text className='text-text text-sm font-light'>
                    {study.exclusionCriteria}
                  </Text>
                </>
              )}
            </AccordionItem>
            <AccordionItem title='What is involved?'>
              <Text className='text-text text-sm font-light'>
                {study.procedure}
              </Text>
            </AccordionItem>
            <AccordionItem title='Compensation'>
              <Text className='text-text text-base'>
                Researcher compensation:
              </Text>
              <Text className='text-text text-sm font-light'>
                {study.compensation ? study.compensation : 'None'}
              </Text>
              <Text className='text-text text-base'>NFA compensation:</Text>
              <Text className='text-text text-sm font-light'>
                {study.nfaCompensation ? study.nfaCompensation : 'None'}
              </Text>
            </AccordionItem>
            <AccordionItem title='Additional Information'>
              <Text className='text-text text-base'>IRB Number: </Text>
              <Text className='text-text text-sm font-light'>{`${
                study.irbNumber ? study.irbNumber : 'not provided'
              }`}</Text>
              <Text className='text-text text-base'>{`Recruitment ${
                startDate > today ? 'will start' : 'started'
              } from: `}</Text>
              <Text className='text-text text-sm font-light'>{startDate}</Text>
              <Text className='text-text text-base'>{`Recruitment ${
                recruitEndDate > today ? 'will end' : 'ended'
              } on: `}</Text>
              <Text className='text-text text-sm font-light'>
                {recruitEndDate}
              </Text>
              {studyEndDate && (
                <>
                  <Text className='text-text text-base'>
                    Study results are supposed to be published before:{' '}
                  </Text>
                  <Text className='text-text text-sm font-light'>
                    {studyEndDate}
                  </Text>
                </>
              )}
              {study.relatedResearch[0] && (
                <>
                  <Text className='text-text text-base'>Related studies: </Text>
                  {study.relatedResearch.map((s, idx) => (
                    <Text
                      key={idx}
                      className='text-primary text-sm underline font-light'
                      onPress={() => Linking.openURL(s)}
                    >
                      {s}
                    </Text>
                  ))}
                </>
              )}
            </AccordionItem>
            <Button
              title="I'm interested!"
              onPress={() => {
                Linking.openURL(study.additionalLinks)
                if (
                  !currentProfile.studyHistory ||
                  !currentProfile.studyHistory.includes(studyId)
                ) {
                  dispatch(addStudyToHistory(currentProfile, studyId, study))
                }
              }}
            />
          </>
        ) : (
          <View className='w-11/12 mt-2'>
            <Text className='text-text text-base'>IRB Number: </Text>
            <Text className='text-text text-sm font-light'>{`${
              study.irbNumber ? study.irbNumber : 'not provided'
            }`}</Text>
            <Text className='text-text text-base'>{`Recruitment ${
              startDate > today ? 'will start' : 'started'
            } from: `}</Text>
            <Text className='text-text text-sm font-light'>{startDate}</Text>
            <Text className='text-text text-base'>{`Recruitment ${
              recruitEndDate > today ? 'will end' : 'ended'
            } on: `}</Text>
            <Text className='text-text text-sm font-light'>
              {recruitEndDate}
            </Text>
            {studyEndDate && (
              <>
                <Text className='text-text text-base'>
                  Study results are supposed to be published before:{' '}
                </Text>
                <Text className='text-text text-sm font-light'>
                  {studyEndDate}
                </Text>
              </>
            )}
            {study.relatedResearch[0] && (
              <>
                <Text className='text-text text-base'>Related studies: </Text>
                {study.relatedResearch.map((s, idx) => (
                  <Text
                    key={idx}
                    className='text-primary text-sm underline font-light'
                    onPress={() => Linking.openURL(s)}
                  >
                    {s}
                  </Text>
                ))}
              </>
            )}
            <View className='p-4 mt-4 bg-disabled border-0 rounded-2xl items-center self-center'>
              <Text className='text-text-dark text-base font-medium'>
                Recruiting Ended
              </Text>
            </View>
          </View>
        )}
        <View className='w-11/12 mt-8 pb-8'>
          <Text className='text-text text-base font-medium'>
            For questions about this study, please contact:
          </Text>
          <Text className='text-text text-base mt-2'>{study.contactName}</Text>
          <View className='flex flex-row w-full items-center mt-2'>
            <Ionicons name='call-outline' size={22} color={TextColor} />
            <Text
              className='text-primary underline text-sm font-light ml-2'
              onPress={() => Linking.openURL(`tel:${study.contactPhone}`)}
            >
              {study.contactPhone}
            </Text>
          </View>
          <View className='flex flex-row w-full items-center mt-2'>
            <Ionicons name='mail-outline' size={22} color={TextColor} />
            <Text
              className='text-primary underline text-sm font-light ml-2'
              onPress={() => Linking.openURL(`mailto:${study.contactEmail}`)}
            >
              {study.contactEmail}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
