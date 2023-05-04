import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';


export enum UserTheme {
    LIGHT = 'LIGHT',
    DARK = 'DARK',
}

export interface UserThemeState {
    theme: UserTheme;
    setTheme: (theme: UserTheme) => void;
}

const useUserThemeStore = create<UserThemeState>()(
    persist(
        (set) => ({
            theme: UserTheme.DARK,
            setTheme: (theme: UserTheme) => set({ theme }),
        }),
        {
            name: 'app-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);


export default useUserThemeStore;
