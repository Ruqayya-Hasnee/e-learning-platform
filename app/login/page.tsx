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
  role: RoleType;
}

function Login() {
  const [userLogin, setUserLogin] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [LoginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserLogin(true);

    try {
      const response = await axios.post<LoginResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        LoginData
      );
      const { access_token, role } = response.data;
      login({ email: LoginData.email, role /*, access_token */ });
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
        toast.error(error.response?.data?.message || "Something went wrong...");
      } else {
        toast.error("Login failed. Please try again.");
      }
    } finally {
      setUserLogin(false);
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
                setLoginData({ ...LoginData, email: e.target.value })
              }
              placeholder="Enter your email"
              className="border p-2 rounded"
            />
            <input
              type="password"
              onChange={(e) =>
                setLoginData({ ...LoginData, password: e.target.value })
              }
              placeholder="Enter password"
              className="border p-2 rounded"
            />
          </div>
          <button className="primary w-full mt-2">Login</button>

          {error && <p className="text-red-500">{error}</p>}
          <div className="text-center mt-0.5">
            <p>
              Don&apos;t have an account?
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
