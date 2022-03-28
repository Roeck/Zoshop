import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBq0lbGyRqiZOi-0S5HY9gfbWKqyzI9OfI",
  authDomain: "zoshop.firebaseapp.com",
  projectId: "zoshop",
  storageBucket: "zoshop.appspot.com",
  messagingSenderId: "882570109990",
  appId: "1:882570109990:web:ed4266348d8acbb560f2e7",
  measurementId: "G-CCZYD28JM9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);