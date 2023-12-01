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

const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productsCollectionName = "products";
const categoriesCollectionName = "categories";

export async function getCompleteMenu() {
    return getDocs(collection(db, productsCollectionName))
        .then(snapshot => {
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        })
}

export async function getCategories() {
    return getDocs(collection(db, categoriesCollectionName))
        .then(snapshot => {
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        })
}

export async function getMenuByCategory({ category }) {
    const q = query(
        collection(db, productsCollectionName),
        where("category", "==", category)
    )
    return getDocs(q)
        .then(snapshot => {
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        })
}

export async function getMenuItemById(id) {
    return getDoc(doc(db, productsCollectionName, id))
        .then(snapshot => ({ id: snapshot.id, ...snapshot.data() }))
}