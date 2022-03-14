import { auth } from "./firebase-admin";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import * as RootNavigation from "../src/routes/RootNavigation";

interface ILogin {
  payload: { [key: string]: string };
  onSuccess?: () => void | undefined;
  onFail?: () => void | undefined;
}

export function createNewUser({ payload, onSuccess, onFail }: ILogin) {
  const { email, password }: any = payload;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}

export function loginExistingUser({ payload, onSuccess, onFail }: ILogin) {
  const { email, password }: any = payload;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      onSuccess?.();
      RootNavigation.resetNav({
        index: 0,
        routes: [{ name: "Home" }],
      });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      onFail?.();
      console.log(errorMessage);
      // ..
    });
}

export function logout() {
  signOut(auth)
    .then(() => {
      RootNavigation.resetNav({
        index: 0,
        routes: [{ name: "Auth" }],
      });
    })
    .catch((error) => {
      console.log("failed to logout", error);
      // An error happened.
    });
}

/**
 *  If user is already loged in. Navigate to Home Page
 */
export async function listenAuthChange() {
  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user != null) {
      RootNavigation.resetNav({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }
  });
}
