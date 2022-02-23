import { getFirestoreDB as firestore } from "./firebase-admin";
import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore";

export interface IReadPath {
  name: string;
}

//TODO set up emulator for these firebase functions
export async function readCollection(name: any) {
  const querySnapshot = await getDocs(collection(firestore, name));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

export async function createNewCollection(
  newCollectionName: string,
  data: { [key: string]: any }
) {
  try {
    const docRef = await addDoc(collection(firestore, newCollectionName), {
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
  await setDoc(doc(firestore, collection, document), { ...data });
}

//collection -> document -> collection -> document
