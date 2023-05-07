import { useEffect } from 'react';
import { atom, useAtom } from 'jotai';

import type { User } from 'firebase/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp, getApp, getApps } from 'firebase/app';

import { firebaseConfig } from '../../env';
export const app = initializeApp(firebaseConfig);
export const initializeFirebaseApp = () =>
  !getApps().length ? initializeApp(firebaseConfig) : getApp();

export type GlobalAuthState = User | null;

const authStateAtom = atom<GlobalAuthState>(null);

export const useGlobalUser = () => {
  const [authState, setAuthState] = useAtom(authStateAtom);

  useEffect(() => {
    try {
      const auth = getAuth();
      return onAuthStateChanged(auth, (user) => {
        setAuthState(user);
      });
    } catch (error) {
      setAuthState(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return authState;
};
