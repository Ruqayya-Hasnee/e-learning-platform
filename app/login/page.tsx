"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const users = [
    {
      email: "student@gmail.com",
      password: "password123",
      type: "student",
    },
    {
      email: "instructor@gmail.com",
      password: "password123",
      type: "instructor",
    },
  ];

  const handleSubmit = () => {
    setError("");
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      if (user.type === "student") {
        router.push("/studentprofile"); // Redirect to student profile
      } else if (user.type === "instructor") {
        router.push("/instructorprofile"); // Redirect to instructor profile
      } else {
        setError("User type not recognized");
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
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <input
            type="password"
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
