import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import FullWidthImage from 'react-native-fullwidth-image'
import Header from '../components/Header'

export default function DashboardScreen({ navigation }) {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-background'>
      <Header title={'Privacy Policy'} />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        className='flex-1 flex-col w-11/12'
        contentContainerStyle={{
          alignItems: 'center'
        }}
      >
        <View className='flex-col w-11/12 mt-4'>
          {/* <FullWidthImage className='w-11/12' source={require('../assets/nfaLogo.png')} /> */}
          <FullWidthImage className='w-11/12' source={{ uri: "https://www.fmaware.org/wp-content/uploads/2019/09/nfa-logoX2.png" }} />
          <Text className='text-text text-sm ml-2 mt-5 mb-5'>
            The information in this website is not a substitute for professional medical advice. Please always consult with your physician on matters concerning your medical care and treatment.
          </Text>

          <Text className='text-text font-semibold text-lg ml-2'>
            Collection and Use of Information
          </Text>
          <Text className='text-text text-sm ml-2 mt-1'>
            We collect two kinds of information: site usage data, which is not individually identifiable, and individually identifiable information.
          </Text>
          <Text className='text-text text-sm ml-2 mt-1'>
            Site usage data: Our web server automatically recognizes and collects the domain name of each visitor to our website. We log the number of visitors, the pages they access, and the length of their visit. This information is used in aggregate form in order to manage our website and improve its content.
          </Text>
          <Text className='text-text text-sm ml-2 mt-1'>
            Individually identifiable information: We collect individually identifiable information about you when you choose to share information about yourself—for example, when you make a donation, request information, or sign up to be an advocate. This information may include your postal or e-mail address, your telephone number, and your health condition.
          </Text>
          <Text className='text-text text-sm ml-2 mt-1'>
            Individually identifiable information is used to provide you with information or to deliver the service you have requested. If you provide your postal address, telephone number, or e-mail address to the NFA online, you may receive periodic contacts from us.
          </Text>
          <Text className='text-text text-sm ml-2 mt-1'>
            We may also collect certain non-personally identifiable information when you visit some web pages or fill out forms, such as the type of browser you are using, the type of operating system you are using, and the domain name of your internet service provider.
          </Text>

          <Text className='text-text font-semibold text-lg ml-2 mt-2'>
            Cookies
          </Text>
          <Text className='text-text text-sm ml-2 mt-1'>
            We use a technology called a “cookie” to recognize you when you return to our site. Cookies are sent back only to the website that deposited them when a visitor returns to that site. Cookies can tell us how and when pages in a website are visited and by how many people. This technology does not collect personally identifiable information; the information collected is in an aggregate, non-identifiable form.
          </Text>

          <Text className='text-text font-semibold text-lg ml-2 mt-2'>
            Survey Participation
          </Text>
          <Text className='text-text text-sm ml-2 mt-1'>
            By taking part in NFA online surveys, you will help us better understand the issues most important to the fibromyalgia community. When you voluntarily provide us with personal information as part of an online survey, we use it to perform various quantitative and qualitative analyses to improve our efforts in advocacy, research, and how information is provided to you. You are under no obligation to participate in such surveys. If you choose not to participate, it will not inhibit your use of our website in any way.
          </Text>
          <Text className='text-text text-sm ml-2 mt-1'>
            Information collected via online surveys may be retained at our discretion for an indefinite period of time. Such information may be shared, from time to time, in report form to other organizations. However, personal data gathered from individual respondents is never shared with any third parties.
          </Text>
          <Text className='text-text text-sm ml-2 mt-1'>
            Results from our surveys (which report aggregate, non-identifiable information) may be posted on a NFA website or used as part of scientific studies that could be published or presented at medical meetings. Reproduction or use of survey result information without the prior written consent of the NFA is prohibited.
          </Text>

          <Text className='text-text font-semibold text-lg ml-2 mt-2'>
            Links to Other Sites
          </Text>
          <Text className='text-text text-sm ml-2 mt-1'>
            Our site provides links to other websites where you can find out more about our sponsors or products. Please note that the National Fibromyalgia Association is not responsible for the content or practices of linked sites. We encourage you to review the privacy policy of each site you visit.
          </Text>
          <Text className='text-text text-sm ml-2 mt-1'>
            We try to choose websites carefully—sites we believe are useful and meet our high standards. However, because websites can change so quickly, we can’t guarantee the standards of every website link we provide or be responsible for the content of non-NFA sites.
          </Text>

          <Text className='text-text font-semibold text-lg ml-2 mt-2'>
            Children Online
          </Text>
          <Text className='text-text text-sm ml-2 mt-1'>
            Protecting the privacy of children is very important. For that reason, we adhere to the 1998 Children’s Online Privacy Protection Act (COPPA). (For more information, visit the Federal Trade Commission’s COPPA site at http://www.ftc.gov/bcp/conline/edcams/kidzprivacy/adults.htm.
          </Text>

          <Text className='text-text font-semibold text-lg ml-2 mt-2'>
            Privacy Policy Changes
          </Text>
          <Text className='text-text text-sm ml-2 mt-1'>
            If we decide to change our privacy policy, we will post those changes here. We encourage you to review our policy from time to time.
          </Text>
          <Text className='text-text text-sm ml-2 mt-1'>
            The National Fibromyalgia Association follows the online Privacy Guidelines and the Guidelines on Ethical Business Practice of The Direct Marketing Association (DMA). For more information on these guidelines, visit the DMA at http://the-dma.org/
          </Text>

          <View>
            <Text className='text-text font-semibold text-xs ml-2 mt-10'>
              The National Fibromyalgia Association
            </Text>
            <Text className='text-text text-xs ml-2 mt-1'>
              3857 Birch St, Suite 312, Newport Beach, CA 92660
              Email: nfa@fmaware.org
            </Text>
          </View>

          <View>
            <Text className='text-text text-xs ml-2 mt-2 text-gray-300' >
              © Copyright 1997-2024 National Fibromyalgia Association
            </Text>
            <Text className='text-text text-xs ml-2 text-gray-300'>
              ® NFA All Rights Reserved
            </Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView >
  )
}

