import { firebaseConfig } from '../Secrets'
import { LOAD_STUDIES } from './Reducer'

import { initializeApp } from 'firebase/app'
import {
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  doc,
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

export { loadAllStudies }
