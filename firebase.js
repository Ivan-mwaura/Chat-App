
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"


/*const firebaseConfig = {
  apiKey: "AIzaSyAZDZRU4L6j1Oc2fICw6IWhnJLbYkOhZtk",
  authDomain: "chat-app-1ab00.firebaseapp.com",
  projectId: "chat-app-1ab00",
  storageBucket: "chat-app-1ab00.appspot.com",
  messagingSenderId: "732372712083",
  appId: "1:732372712083:web:3802261314a7e18eb0eb66",
  measurementId: "G-QQQES1KBXN"
};*/

const firebaseConfig = {
    apiKey: "AIzaSyBYheUs5MuUHZ0a46VrjyzKsYiUxU5imKc",
    authDomain: "like-chat-4873e.firebaseapp.com",
    projectId: "like-chat-4873e",
    storageBucket: "like-chat-4873e.appspot.com",
    messagingSenderId: "473958294844",
    appId: "1:473958294844:web:beefefac99cc08041dea39",
    measurementId: "G-BC0G3J9GTS"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();
const db = getFirestore();
export { app, auth, storage, db };

