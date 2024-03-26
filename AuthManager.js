import {
    getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut as fbSignOut,
    initializeAuth,
    getReactNativePersistence,
    onAuthStateChanged
} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getApps, initializeApp } from 'firebase/app';

import { firebaseConfig } from './Secrets';
import { subscribeToUserUpdates } from './data/Actions';

let app, auth;

const apps = getApps();
if (apps.length == 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = apps[0];
}

try {
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    });
} catch (error) {
    auth = getAuth(app); // if auth already initialized
}

const subscribeToAuthChanges = (navigation) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            navigation.navigate('Main');
        } else {
            navigation.navigate('Auth');
        }
    })
}

const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
}

// const signUp = async (displayName, email, password) => {
//     const userCred = await createUserWithEmailAndPassword(auth, email, password);
//     await updateProfile(userCred.user, { displayName: displayName });
//     return userCred.user;
// }

const signUp = async (displayName,
    email,
    password,
    phoneNumber,
    zipCode,
    birthday,
    gender,
    curCondition,
    pastCondition,
    isDiagnosed,
    selectedValue) => {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCred.user, {
        displayName: displayName || null,
        phoneNumber: phoneNumber || null,
        zipCode: zipCode || null,
        birthday: birthday || null,
        gender: gender || null,
        curCondition: curCondition || null,
        pastCondition: pastCondition || null,
        isDiagnosed: isDiagnosed || null,
        selectedValue: selectedValue || null
    });
    return userCred.user;
};

const signOut = async () => {
    await fbSignOut(auth);
}

const getAuthUser = () => {
    return auth.currentUser;
}

export { signUp, signIn, signOut, getAuthUser, subscribeToAuthChanges };