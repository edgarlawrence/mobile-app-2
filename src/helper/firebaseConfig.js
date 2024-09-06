import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDm3QKo1fyO429hUsaV57piE7XpiqdUi5E",
    authDomain: "testing-dev-7a2f6.firebaseapp.com",
    projectId: "testing-dev-7a2f6",
    storageBucket: "testing-dev-7a2f6.appspot.com",
    messagingSenderId: "159548107628",
    appId: "1:159548107628:web:184a1f6d2575fd7159a149",
    measurementId: "G-457PQTFD34"
  };  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, analytics, db, storage };
