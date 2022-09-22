import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCTCyHVd8lKrG0-kqQvFYtRHOBKFKjlZUw",
    authDomain: "delivery-food-app-63193.firebaseapp.com",
    databaseURL: "https://delivery-food-app-63193-default-rtdb.firebaseio.com",
    projectId: "delivery-food-app-63193",
    storageBucket: "delivery-food-app-63193.appspot.com",
    messagingSenderId: "726473484844",
    appId: "1:726473484844:web:1fa201f718e6ebc3b2ff89",
    measurementId: "G-3M5L8N6YJ4"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage };