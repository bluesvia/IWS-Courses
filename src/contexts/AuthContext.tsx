import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
  email: string;
  role: 'student' | 'admin';
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (email?: string, password?: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('auth_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isLoggedIn = !!user;

  const login = (email?: string, password?: string) => {
    const trimmedEmail = email?.trim();
    if (trimmedEmail === 'admin@iwschool.com') {
      if (password === 'IWS2026!') {
        const adminUser: User = { email: trimmedEmail, role: 'admin' };
        setUser(adminUser);
        localStorage.setItem('auth_user', JSON.stringify(adminUser));
        return true;
      }
      return false; // Wrong admin credentials
    }
    
    // Default student login
    const studentUser: User = { email: trimmedEmail || 'student@example.com', role: 'student' };
    setUser(studentUser);
    localStorage.setItem('auth_user', JSON.stringify(studentUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
