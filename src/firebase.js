
import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCrUY_v4CaBOj--8Tnw4FYPPSrqWW6DE5M",
    authDomain: "sahitya-freedom-fighter.firebaseapp.com",
    projectId: "sahitya-freedom-fighter",
    storageBucket: "sahitya-freedom-fighter.appspot.com",
    messagingSenderId: "607018308036",
    appId: "1:607018308036:web:f6cdb364ff2ae0a866d491"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);


  export {auth , db , storage } ;