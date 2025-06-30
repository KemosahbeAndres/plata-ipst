import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAtiqUAlEeGRNRCPmyvNycemyXQqKIJjrk",
  authDomain: "agenda-ipst.firebaseapp.com",
  projectId: "agenda-ipst",
  storageBucket: "agenda-ipst.firebasestorage.app",
  messagingSenderId: "684948026013",
  appId: "1:684948026013:web:e26acd5e09a86b0516da74"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
