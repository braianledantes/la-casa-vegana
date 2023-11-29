import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDrKK30RiK8NwIqaTp3hfskTOC2-KbvuwU",
    authDomain: "la-casa-vegana.firebaseapp.com",
    projectId: "la-casa-vegana",
    storageBucket: "la-casa-vegana.appspot.com",
    messagingSenderId: "418996740139",
    appId: "1:418996740139:web:bebbd063f1b3b1f46d0a6e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productsCollectionName = "products";
const categoriesCollectionName = "categories";

export function getCompleteMenu() {
    return getDocs(collection(db, productsCollectionName))
        .then(snapshot => {
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        })
}

export function getCategories() {
    return getDocs(collection(db, categoriesCollectionName))
        .then(snapshot => {
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        })
}

export function getMenuByCategory({ category }) {
    const q = query(
        collection(db, productsCollectionName),
        where("category", "==", category)
    )
    return getDocs(q)
        .then(snapshot => {
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        })
}

export function getMenuItemById(id) {
    return getDoc(doc(db, productsCollectionName, id))
        .then(snapshot => ({ id: snapshot.id, ...snapshot.data() }))
}