import { auth } from "./firebase-admin";
import { createUserWithEmailAndPassword } from "firebase/auth";

//console.log("what is result", result);

interface ILogin {
  payload: { [key: string]: string };
  onSuccess?: () => void;
  onFail?: () => void;
}

export async function createNewUser({ payload, onSuccess, onFail }: ILogin) {
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

export async function loginExistingUser({
  payload,
  onSuccess,
  onFail,
}: ILogin) {
  const { email, password }: any = payload;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
}
