import { firestoreDB } from "./firebase-admin";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
import { USERS } from "../src/constants/firebase";

//TODO set up emulator for these firebase functions
export async function readCollection(name: any) {
  try {
    const querySnapshot = await getDocs(collection(firestoreDB, name));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  } catch (error) {}
}

interface IGetUserDoc {
  userId: string;
  onSuccess?: (data?: any) => void;
  onFail?: (error: string) => void;
}

export async function getUserDoc({ userId, onSuccess, onFail }: IGetUserDoc) {
  try {
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
    const docRef = await addDoc(collection(firestoreDB, newCollectionName), {
      ...data,
    });
    //TODO create a general way to catch error
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
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
