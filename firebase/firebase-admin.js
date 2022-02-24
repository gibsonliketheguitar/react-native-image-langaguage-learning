import { initializeApp } from "firebase/app";
import {
  //CACHE_SIZE_UNLIMITED,
  connectFirestoreEmulator,
  getFirestore,
} from "firebase/firestore";

//init firebase config
const firebaseConfig = require("./firebase.config");
const firebaseApp = initializeApp(firebaseConfig);

//USE this if you need to overide default settings
//
// const firestore = initalizeFirestore(firebaseApp, {
//     cacheSizeBytes: CACHE_SIZE_UNLIMITED,
// })

export const FirestoreDB = getFirestore();

connectFirestoreEmulator(FirestoreDB, "localhost", 8080);
