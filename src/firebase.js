import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyANCxL-b03sEH7pPv6KOkUSx38ogbQ3Dus",
  authDomain: "my-portfolio-reactjs.firebaseapp.com",
  projectId: "my-portfolio-reactjs",
  storageBucket: "my-portfolio-reactjs.appspot.com",
  messagingSenderId: "445921792734",
  appId: "1:445921792734:web:4b6d0e8cd86e56727fa84f"
};


export const app = initializeApp(firebaseConfig);

export const db= getFirestore();