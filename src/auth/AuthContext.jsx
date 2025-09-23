// auth/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('session_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  function login(u) {
    setUser(u);
    localStorage.setItem('session_user', JSON.stringify(u));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem('session_user');
  }

 
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === 'session_user') {
        setUser(e.newValue ? JSON.parse(e.newValue) : null);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
