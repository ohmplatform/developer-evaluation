import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { FIRESTORE_DB } from '../firebase/config';
import { collection, deleteDoc, onSnapshot, updateDoc } from 'firebase/firestore';

export interface ITodo {
    done: boolean;
    id: string;
    title: string;
}

const useTodoFirebase = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const todoRef = collection(FIRESTORE_DB, 'todos');

        const subscriber = onSnapshot(todoRef, {
            next: (snapshot) => {
                const todos: any[] = [];
                snapshot.docs.forEach((doc) => {
                    todos.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });

                setTodos(todos);
            }
        });

        // // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);

    const toggleTodoDone = useCallback(async (ref: any, done: boolean) => {
        return await updateDoc(ref, { done });
    }, []);

    const deleteTodo = useCallback(async (ref: any) => {
        return deleteDoc(ref);
    }, []);

    return {
        todos,
        toggleTodoDone,
        deleteTodo
    }
}

export default useTodoFirebase

