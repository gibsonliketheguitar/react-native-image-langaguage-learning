import { initializeApp, getApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import {
  //CACHE_SIZE_UNLIMITED,
  connectFirestoreEmulator,
  getFirestore,
} from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

//init firebase config
const firebaseConfig = require("./firebase.config");
const firebaseApp = initializeApp(firebaseConfig);

//USE this if you need to overide default settings
//
// const firestore = initalizeFirestore(firebaseApp, {
//     cacheSizeBytes: CACHE_SIZE_UNLIMITED,
// })

export const firestoreDB = getFirestore();
connectFirestoreEmulator(firestoreDB, "localhost", 8080);

const functions = getFunctions(getApp());
connectFunctionsEmulator(functions, "localhost", 5001);

export const auth = getAuth();
connectAuthEmulator(auth, "http://localhost:9099");
