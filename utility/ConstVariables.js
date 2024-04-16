import { SecondaryColor, TextColor } from './Style'
import {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId
} from '@env'

export const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId
}

export const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Non-binary', value: 'non-binary' }
]

export const diagnosedOptions = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
  { label: 'Unwilling to tell', value: 'unwilling to tell' }
]

export const studyStatus = [
  {
    id: '1',
    label: 'Active',
    value: 'Active',
    borderColor: SecondaryColor,
    color: TextColor,
    labelStyle: { color: TextColor }
  },
  {
    id: '2',
    label: 'Inactive',
    value: 'Inactive',
    borderColor: SecondaryColor,
    color: TextColor,
    labelStyle: { color: TextColor }
  },
  {
    id: '3',
    label: 'All Studies',
    value: 'All',
    borderColor: SecondaryColor,
    color: TextColor,
    labelStyle: { color: TextColor }
  }
]
