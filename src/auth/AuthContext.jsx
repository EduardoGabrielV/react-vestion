import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Recarrega sessão do localStorage ao abrir o app
  useEffect(() => {
    const saved = localStorage.getItem('session_user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  function login(u) {
    setUser(u);
    localStorage.setItem('session_user', JSON.stringify(u));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem('session_user');
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
