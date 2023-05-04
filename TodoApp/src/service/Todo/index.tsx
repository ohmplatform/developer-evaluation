// Add Todo to firebase

import { addDoc, collection } from "firebase/firestore";
import { FIRESTORE_DB } from "../../firebase/config";

export const addTodoToFirebase = async (todo: string) => {
    try {
        return await addDoc(collection(FIRESTORE_DB, 'todos'), {
            title: todo,
            done: false
        });
    } catch (e) {
        console.error('Error adding document: ', e);
    }
};

