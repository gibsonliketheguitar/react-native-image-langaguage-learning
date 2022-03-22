import { auth } from "./firebase-admin";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import * as RootNavigation from "../src/routes/RootNavigation";
import { setDocument } from "./CRUD";

interface ILogin {
  data: { [key: string]: string };
  onSuccess?: () => void | undefined;
  onFail?: (error?: any) => void | undefined;
}

export async function createNewUser({ data, onSuccess, onFail }: ILogin) {
  const { email, password }: any = data;
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await setDocument({
      collection: "users",
      document: user.uid,
      data: {
        premium: {},
        settings: {},
        meta: {
          createdOn: Date.now(),
          lastActive: Date.now(),
        },
      },
    });

    onSuccess?.();
  } catch (error: any) {
    onFail?.(error.code);
  }
}

export async function loginExistingUser({ data, onSuccess, onFail }: ILogin) {
  const { email, password }: any = data;
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    onSuccess?.();
  } catch (error: any) {
    onFail?.();
  }
}

interface ILogout {
  onSuccess?: () => void | undefined;
  onFail?: () => void | undefined;
}

export async function logout({ onSuccess, onFail }: ILogout) {
  try {
    await signOut(auth);
    onSuccess?.();
  } catch (error: any) {
    onFail?.();
  }
}

export function listenToAuthAnd(
  setState: React.Dispatch<React.SetStateAction<Boolean>>
) {
  const check = auth.currentUser?.uid;
  onAuthStateChanged(auth, (user) => {
    setState(() => {
      return user != null ? true : false;
    });
  });
}
