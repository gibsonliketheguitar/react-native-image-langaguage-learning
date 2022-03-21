import { auth, firestoreDB } from "./firebase-admin";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
import { COLLECTION, USERS } from "../src/constants/firebase";

//TODO set up emulator for these firebase functions
export async function readCollection() {}

interface IGetUserDoc {
  onSuccess?: (data?: any) => void;
  onFail?: (error: string) => void;
}

export async function getUserDoc({ onSuccess, onFail }: IGetUserDoc) {
  try {
    const userId = auth.currentUser?.uid as string;
    const docRef = doc(firestoreDB, USERS, userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) onSuccess?.(docSnap.data());
  } catch (error: any) {
    onFail?.(
      error.code ? "Invalid Credentials" : "User document does not exists"
    );
  }
}

export async function createNewCollection(
  newCollectionName: string,
  data: { [key: string]: any }
) {
  try {
    const userId = auth.currentUser?.uid as string;
    const collectionRef = collection(firestoreDB, USERS, userId, COLLECTION);
    const docRef = await addDoc(collectionRef, {
      default: "hello world",
    });
  } catch (error) {
    console.log(error);
  }
}

export interface ISetDocument {
  collection: string;
  document: string;
  data?: { [key: string]: any };
}

export async function setDocument({
  collection,
  document,
  data,
}: ISetDocument) {
  //this setDoc([query])
  await setDoc(doc(firestoreDB, collection, document), { ...data });
}

//collection -> document -> collection -> document
