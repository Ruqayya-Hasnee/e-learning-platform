"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import { RoleType } from "@/types/user";

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  role: RoleType | string; // Accept both enum or string
}

function Login() {
  const [error, setError] = useState("");
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  // Added loading state to disable the login button during request
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    setLoading(true); //Set loading true on submit

    try {
      const response = await axios.post<LoginResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        loginData
      );

      const { access_token, role } = response.data;

      localStorage.setItem("authToken", access_token);
      localStorage.setItem("authRole", role); // Save role as well

      const normalizedRole = role.toString().toUpperCase();

      login({
        email: loginData.email,
        role: normalizedRole as RoleType,
        access_token,
        id: undefined,
      });

      toast.success("Successfully Logged In");

      if (role === RoleType.STUDENT) {
        router.push("/studentprofile");
      } else if (role === RoleType.INSTRUCTOR) {
        router.push("/instructorprofile");
      } else {
        setError("User role not recognized");
        toast.error("User role not recognized");
      }

      console.log("Login successful:", response.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "Something went wrong...");
        toast.error(error.response?.data?.message || "Something went wrong...");
      } else {
        setError("Login failed. Please try again.");
        toast.error("Login failed. Please try again.");
      }
    } finally {
      setLoading(false); // Set loading false after request finishes
    }
  };

  return (
    <div className="min-h-[calc(100vh-3rem)] flex justify-center items-center bg-gray-100">
      <div className="p-4 w-96 bg-white rounded-xl items-center shadow-lg">
        <h1 className="text-blue-900 text-center font-bold text-xl mb-2">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              placeholder="Enter your email"
              className="border p-2 rounded"
              required
            />
            <input
              type="password"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              placeholder="Enter password"
              className="border p-2 rounded"
              required
            />
          </div>

          {/* Disabled button when loading, text changes based on state */}
          <button type="submit" className="primary w-full mt-2" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <div className="text-center mt-1">
            <p>
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-purple-600">
                Sign up here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
