import { firebaseConfig } from '../Secrets'
import { LOAD_STUDIES, LOAD_PROFILE, ADD_USER } from './Reducer'

import { initializeApp } from 'firebase/app'
import {
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
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

const subscribeToUserUpdates = () => {
  if (snapshotUnsubsribe) {
    snapshotUnsubsribe();
  }
  return async (dispatch) => {
    snapshotUnsubsribe = onSnapshot(collection(db, 'Profile'), usersSnapshot => {
      const updatedUsers = usersSnapshot.docs.map(uSnap => {
        return uSnap.data();
      });
      dispatch({
        type: LOAD_PROFILE,
        payload: {
          users: updatedUsers
        }
      });
    });
  }
}

const addUser = (user) => {
  return async (dispatch) => {
    userToAdd = {
      email: user.email || '',
      uid: user.uid || '',
      name: user.displayName || '',
      phoneNumber: user.phoneNumber || '',
      zipCode: user.zipCode || '',
      birthday: user.birthday || '',
      gender: user.gender || '',
      curCondition: user.curCondition || '',
      pastCondition: user.pastCondition || '',
      isDiagnosed: user.isDiagnosed || '',
      visibility: user.visibility || ''
    };
    await setDoc(doc(db, "Profile", user.uid), userToAdd);
  };
};

export { loadAllStudies, loadProfile, subscribeToUserUpdates, addUser }
