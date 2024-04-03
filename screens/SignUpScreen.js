import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native'
import { useDispatch } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RadioButton, Checkbox } from 'react-native-paper';
import Header from '../components/Header'
import Button from '../components/Button';
import InputField from '../components/InputField';
import { signUp } from '../AuthManager';
import { addUser } from '../data/Actions';
import { CheckBox } from '@rneui/themed';
import { PrimaryColor } from '../Style'

const Stack = createNativeStackNavigator();

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [curCondition, setCurCondition] = useState('');
  const [pastCondition, setPastCondition] = useState('');
  const [isDiagnosed, setIsDiagnosed] = useState('');
  const [visibility, setVisibility] = useState('AllStudyTeam');
  const [privacy, setPrivacy] = useState(false);
  const [consent, setConsent] = useState(false);

  const dispatch = useDispatch()
  const handleCreateAuth = async () => {
    let emptyFields = [];

    if (!email) {
      emptyFields.push("email");
    }

    if (!password) {
      emptyFields.push("password");
    }

    if (!firstName) {
      emptyFields.push("first name");
    }

    if (!lastName) {
      emptyFields.push("last name");
    }

    if (!phoneNumber) {
      emptyFields.push("phone number");
    }

    if (!zipCode) {
      emptyFields.push("zip code");
    }

    if (!birthday) {
      emptyFields.push("birthday");
    }

    if (!gender) {
      emptyFields.push("gender");
    }

    if (emptyFields.length > 0) {
      const emptyFieldsString = emptyFields.join(", ");
      Alert.alert("Empty Fields", `Please fill in the following fields: ${emptyFieldsString}`);
      return false; // Return false indicating sign-up failure
    }

    if (!privacy || !consent) {
      Alert.alert("Privacy Policy", "Please accept the privacy policy and consent to continue");
      return false; // Return false indicating sign-up failure
    }

    try {
      const newUser = await signUp(
        `${firstName} ${lastName}`,
        email,
        password,
      );
      dispatch(addUser({
        ...newUser,
        phoneNumber,
        zipCode,
        birthday,
        gender,
        curCondition,
        pastCondition,
        isDiagnosed,
        visibility,
      }));
      setPassword("");
      return true; // Return true indicating sign-up success
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          Alert.alert("Sign Up Error", "Invalid email", [{ text: "OK" }]);
          break;
        case "auth/weak-password":
          Alert.alert(
            "Sign Up Error",
            "Password should be at least 6 characters",
            [{ text: "OK" }]
          );
          break;
        default:
          Alert.alert("Sign Up Error", error.message, [{ text: "OK" }]);
      }
      return false; // Return false indicating sign-up failure
    }
  };


  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-background'>
      <Header title={'Sign Up'} />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        className='flex-1 flex-col w-11/12'
      >
        {/* Account Information */}
        <Text className='text-text text-xl font-semibold mt-10 mb-3'>
          Account Information (Required)
        </Text>

        <InputField
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder='Enter your email'
          keyboardType='email-address'
        />

        <InputField
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder='**********'
          secureTextEntry
        />

        {/* Basic Information */}
        <Text className='text-text text-xl font-semibold my-3'>
          Basic Information (Required)
        </Text>

        <InputField
          label="First Name"
          value={firstName}
          onChangeText={setFirstName}
          placeholder='First Name'
        />

        <InputField
          label="Last Name"
          value={lastName}
          onChangeText={setLastName}
          placeholder='Last Name'
        />

        <InputField
          label="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder='Phone Number'
          keyboardType="phone-pad"
        />

        <InputField
          label="Zip Code"
          value={zipCode}
          onChangeText={setZipCode}
          placeholder='Zip Code'
          keyboardType="phone-pad"
        />

        <InputField
          label="Birthday"
          value={birthday}
          onChangeText={setBirthday}
          placeholder='MM/DD/YYYY'
        />

        <InputField
          label="Gender"
          value={gender}
          onChangeText={setGender}
          placeholder='Gender'
        />

        {/* Medical Information */}
        <Text
          className='text-text text-xl font-semibold my-3'>
          Medical Information
        </Text>


        <InputField
          label="Currently, I have the following conditions"
          value={curCondition}
          onChangeText={setCurCondition}
          placeholder='Type to add'
        />

        <InputField
          label="In the past, I have had the following conditions"
          value={pastCondition}
          onChangeText={setPastCondition}
          placeholder='Type to add'
        />

        <InputField
          label="Were you diagnosed as fibromyalgia by any medical therapist? "
          value={isDiagnosed}
          onChangeText={setIsDiagnosed}
          placeholder='Type to add'
        />

        {/* Profile visibility */}
        <Text
          className='text-text text-xl font-semibold my-3'>
          My profile is visible to
        </Text>

        <View className="flex flex-row">
          <RadioButton.Group
            onValueChange={(value) => setVisibility(value)}
            value={visibility}
          >
            <View className="flex flex-row items-center">
              <RadioButton value="AllStudyTeam" color="#ac1e52" />
              <Text>All study teams</Text>
            </View>
            <View className="flex flex-row items-center">
              <RadioButton value="OnlyInterested" color="#ac1e52" />
              <Text>Only the study teams I show interest in</Text>
            </View>
          </RadioButton.Group>
        </View>

        {/* Privacy policy */}
        <Text
          className='text-text text-xl font-semibold my-3'>
          Privacy Policy (Required)
        </Text>

        <View>

          {/* <CheckBox
            checked={privacy}
            onPress={() => {
              setPrivacy(!privacy);
            }}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={'checkbox-blank-outline'}
            checkedColor={PrimaryColor}
            title="I have read & accepted"
          /> */}

          <View className="flex flex-row items-center">
            <Checkbox
              status={privacy ? 'checked' : 'unchecked'}
              onPress={() => {
                setPrivacy(!privacy);
              }}
              color={PrimaryColor}
            />
            <Text className="inline-block">I have read & accepted {" "}
              <Text
                onPress={() => navigation.navigate('Policy')}
                className='underline'
              >
                Terms & Privacy Policy
              </Text>
            </Text>
          </View>

          <View className="flex flex-row items-center">
            <Checkbox
              status={consent ? 'checked' : 'unchecked'}
              onPress={() => {
                setConsent(!consent);
              }}
              color={PrimaryColor}
            />
            <Text className="inline-block">
              I give consent to NFA to email and text me
            </Text>
          </View>

        </View>


        <View className='flex items-center'>
          <Button
            className='w-1/5'
            title="Sign Up"
            onPress={async () => {
              const signUpSuccess = await handleCreateAuth();
              if (signUpSuccess) {
                navigation.navigate('Main');
              }
            }}
          >
          </Button>

          <Text
            className='mt-6 underline font-semibold'
            onPress={() => navigation.navigate('Login')}
          >
            Have Account? Log in
          </Text>

        </View>

      </ScrollView>
    </SafeAreaView >
  );
}