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

const signUp = async (displayName, email, password) => {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCred.user, { displayName: displayName });
    return userCred.user;
}

const signOut = async () => {
    await fbSignOut(auth);
}

const getAuthUser = () => {
    return auth.currentUser;
}

export { signUp, signIn, signOut, getAuthUser, subscribeToAuthChanges };