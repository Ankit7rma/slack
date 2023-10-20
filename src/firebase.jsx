import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAK5M-dICpgtTcgAZgIhPUKExw4rLFXzDo",
    authDomain: "slack-clone-90196.firebaseapp.com",
    projectId: "slack-clone-90196",
    storageBucket: "slack-clone-90196.appspot.com",
    messagingSenderId: "8544325914",
    appId: "1:8544325914:web:73bb3ac942fb65ffbd1ca3"
  };
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

export {db,auth,provider} 