"use client";

import { User } from "@/types/user";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Step 1: Create Context Type
interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (user: User) => void;
  logout: () => void;
  loading: boolean;
}

// Step 2: Create Context
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Step 3: Create Provider Component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // ⬇️ On page reload, get token from localStorage
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const role = localStorage.getItem("authRole");
    const email = localStorage.getItem("authEmail");

    if (token && role && email) {
      setUser({
        email: email,
        access_token: token,
        role: role, // Now `role` is directly used without type casting
        id: undefined,
      } as User); // Explicitly cast the object to `User`
    }
    setLoading(false);
  }, []);

  const login = (user: User) => {
    setUser(user);
    localStorage.setItem("authToken", user.access_token);
    localStorage.setItem("authEmail", user.email);
    localStorage.setItem("authRole", user.role);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("authEmail");
    localStorage.removeItem("authRole");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser, loading }}>
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
