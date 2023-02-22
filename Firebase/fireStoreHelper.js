import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { firestore } from "./firebase-setup";

export async function writeToDB(goal) {
  try {
    const docRef = await addDoc(collection(firestore, "goals"), goal);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteFromDB(id) {
  try {
    await deleteDoc(doc(firestore, "goals", id));
  } catch (err) {
    console.log(err);
  }
}
