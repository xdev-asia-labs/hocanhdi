'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut, type User } from 'firebase/auth';
import { getFirebase, googleProvider, isFirebaseConfigured } from './firebase';

type AuthCtx = {
  user: User | null;
  loading: boolean;
  configured: boolean;
  signIn: () => Promise<void>;
  logout: () => Promise<void>;
};

const Ctx = createContext<AuthCtx>({
  user: null, loading: true, configured: false,
  signIn: async () => {}, logout: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { auth } = getFirebase();
    if (!auth) { setLoading(false); return; }
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const signIn = async () => {
    const { auth } = getFirebase();
    if (!auth) {
      alert('Firebase chưa được cấu hình. Vui lòng tạo file .env.local theo hướng dẫn ở README.');
      return;
    }
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e: any) {
      alert('Đăng nhập thất bại: ' + (e?.message || 'Unknown error'));
    }
  };

  const logout = async () => {
    const { auth } = getFirebase();
    if (auth) await signOut(auth);
  };

  return (
    <Ctx.Provider value={{ user, loading, configured: isFirebaseConfigured, signIn, logout }}>
      {children}
    </Ctx.Provider>
  );
}

export const useAuth = () => useContext(Ctx);
