import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCCuvJxQX5OHy_NEdo5pQVj6W-mVYkfuCU",
  authDomain: "pokemon-d272a.firebaseapp.com",
  projectId: "pokemon-d272a",
  storageBucket: "pokemon-d272a.appspot.com",
  messagingSenderId: "519917209252",
  appId: "1:519917209252:web:d6f1d3659fc66479e20831",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
