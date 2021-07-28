import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBbzBhpeLvsLwCtsj_CaOvXJVKtzbDd0UE",
  authDomain: "fir-lab-a6b0f.firebaseapp.com",
  projectId: "fir-lab-a6b0f",
  storageBucket: "fir-lab-a6b0f.appspot.com",
  messagingSenderId: "608345818623",
  appId: "1:608345818623:web:8b5fd95a24e27d3012d3ca",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const authProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;

export function signInWithGoogle(): void {
  firebase.auth().signInWithPopup(authProvider);
}
export function signOut(): void {
  firebase.auth().signOut();
}
