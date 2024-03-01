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
import AccordionItem from '../components/Accordion'

export default function StudyDetailsScreen ({ route, navigation }) {
  const { studyId } = route.params

  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
      <Text>Details Screen for study {studyId}</Text>
      {/* Test accordion */}
      {/* <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          className='flex-1 flex-col w-11/12'
          contentContainerStyle={{
            alignItems: 'center',
          }}
        >
          <AccordionItem title='Native development'>
            <Text >
              React Native lets you create truly native apps and doesn't
              compromise your users' experiences. It provides a core set of
              platform agnostic native components{' '}
            </Text>
          </AccordionItem>
          <AccordionItem title='Fast refresh'>
            <Text >
              See your changes as soon as you save. With the power of
              JavaScript, React Native lets you iterate at lightning speed.
            </Text>
          </AccordionItem>
          <AccordionItem title='Cross-platform'>
            <Text >
              React components wrap existing native code and interact with
              native APIs via React’s declarative UI paradigm and JavaScript.
              This enables native app development for whole new teams of
              developers
            </Text>
            <View ></View>
            <Button title='See more...' />
          </AccordionItem>
        </ScrollView> */}
    </SafeAreaView>
  )
}
