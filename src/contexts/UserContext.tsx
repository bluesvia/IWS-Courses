import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'student';
  createdAt: string;
}

const defaultUsers: User[] = [
  {
    id: 'user_1',
    name: 'Admin User',
    email: 'admin@iws.com',
    role: 'admin',
    createdAt: new Date().toISOString()
  },
  {
    id: 'user_2',
    name: 'Test Student',
    email: 'student@iws.com',
    role: 'student',
    createdAt: new Date().toISOString()
  }
];

interface UserContextType {
  users: User[];
  addUser: (user: User) => void;
  updateUser: (id: string, user: User) => void;
  deleteUser: (id: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem('iws_users');
    return saved ? JSON.parse(saved) : defaultUsers;
  });

  const saveUsers = (newUsers: User[]) => {
    setUsers(newUsers);
    localStorage.setItem('iws_users', JSON.stringify(newUsers));
  };

  const addUser = (user: User) => {
    saveUsers([...users, user]);
  };

  const updateUser = (id: string, updatedUser: User) => {
    saveUsers(users.map(u => u.id === id ? updatedUser : u));
  };

  const deleteUser = (id: string) => {
    saveUsers(users.filter(u => u.id !== id));
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
}
