import { firebaseConfig } from '../Secrets'
import { LOAD_STUDIES, LOAD_PROFILE } from './Reducer'

import { initializeApp } from 'firebase/app'
import {
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  where,
  collection,
  getFirestore
} from 'firebase/firestore'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const loadAllStudies = () => {
  return async dispatch => {
    let querySnapshot = await getDocs(collection(db, 'Studies'))
    let studies = querySnapshot.docs.map(docSnap => {
      let study = docSnap.data()
      return {
        ...docSnap.data(),
        startDate: study.startDate.toDate(),
        expirationDate: study.expirationDate.toDate(),
        key: docSnap.id
      }
    })
    console.log('loading items:', studies)
    dispatch({
      type: LOAD_STUDIES,
      payload: {
        allStudies: studies
      }
    })
  }
}

const loadProfile = uid => {
  return async dispatch => {
    const ref = collection(db, 'Profile')
    const q = query(ref, where('uid', '==', uid))
    const querySnapshot = await getDocs(q)
    let profile = querySnapshot.docs.map(docSnap => {
      return {
        ...docSnap.data()
      }
    })
    console.log('loading items:', profile)
    dispatch({
      type: LOAD_PROFILE,
      payload: {
        currentProfile: profile[0]
      }
    })
  }
}

export { loadAllStudies, loadProfile }
