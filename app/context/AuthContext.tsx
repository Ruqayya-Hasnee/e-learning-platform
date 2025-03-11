"use client"; // Required for state management in Next.js App Router

import { User } from "@/types/user";
import { createContext, useContext, useState, ReactNode } from "react";

// Step 1: Create Context Type
interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

// Step 2: Create Context
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Step 3: Create Provider Component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Step 4: Create Context Consumer
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
