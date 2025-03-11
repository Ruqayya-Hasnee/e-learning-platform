"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { RoleType, User } from "@/types/user";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();

  const router = useRouter();

  const users: (User & { password: string })[] = [
    {
      email: "student@gmail.com",
      password: "password123",
      role: RoleType.STUDENT,
    },
    {
      email: "instructor@gmail.com",
      password: "password123",
      role: RoleType.INSTRUCTOR,
    },
  ];

  const handleSubmit = () => {
    setError("");
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      login(user)
      if (user.role === RoleType.STUDENT) {
        router.push("/studentprofile"); // Redirect to student profile
      } else if (user.role === RoleType.INSTRUCTOR) {
        router.push("/instructorprofile"); // Redirect to instructor profile
      } else {
        setError("User role not recognized");
      }
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-[calc(100vh-3rem)] flex justify-center items-center bg-gray-100">
      <div className="p-4 w-96 bg-white rounded-xl items-center shadow-lg">
        <h1 className="text-center font-bold text-xl mb-2">Login</h1>
        <div className="flex flex-col gap-2">
          <input
            role="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <input
            role="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <button className="primary w-full mt-2" onClick={handleSubmit}>
          Login
        </button>

        {error && <p className="text-red-500">{error}</p>}
        {/* Link to Signup */}
        <div className="text-center mt-0.5">
          <p>
            Don't have an account?{" "}
            <Link href="/signup" passHref>
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
