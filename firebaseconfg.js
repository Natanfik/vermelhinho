// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyA9cL-5pAznDz_uUa8ORg4pdSaeAE4_DKE",
  authDomain: "vermelhinho-35552.firebaseapp.com",
  projectId: "vermelhinho-35552",
  storageBucket: "vermelhinho-35552.appspot.com",
  messagingSenderId: "697039378536",
  appId: "1:697039378536:web:cd7d57deb7216546de03dd",
  measurementId: "G-R915X1R9YD"
};

// Initialize Firebase
const analytics = getAnalytics(app);