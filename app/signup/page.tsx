"use client";
import React, { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { RoleType } from "@/types/user";

// Define TypeScript interface for Signup Data
interface SignupData {
  name: string;
  email: string;
  password: string;
  introduction?: string;
  education?: string;
  achievements: string[];
  role: RoleType;
}

// Define API Response Type
interface SignupResponse {
  userId?: string;
}

function SignUp() {
  const [hydrated, setHydrated] = useState(false);
  const [achievementInput, setAchievementInput] = useState("");
  const [userRegistering, setUserRegistering] = useState<boolean>(false);
  const [signupData, setSignupData] = useState<SignupData>({
    name: "",
    email: "",
    password: "",
    introduction: "",
    education: "",
    achievements: [],
    role: RoleType.STUDENT,
  });

  const router = useRouter();

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null; // Prevent hydration mismatch

  // Function to add achievements
  const addAchievement = () => {
    const trimmedInput = achievementInput.trim();
    if (!trimmedInput) return; // Prevent empty input

    setSignupData({
      ...signupData,
      achievements: [trimmedInput, ...signupData.achievements], // Prepend to list
    });

    setAchievementInput(""); // Reset input
  };

  // Function to remove an achievement
  const removeAchievement = (index: number) => {
    setSignupData({
      ...signupData,
      achievements: signupData.achievements.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserRegistering(true);

    try {
      const response = await axios.post<SignupResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
        signupData
      );
      toast.success("Signup successful!");
      router.push("/login");
      console.log("Signup successful:", response.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Something went wrong...");
      } else {
        toast.error("Signup failed. Please try again.");
      }
    } finally {
      setUserRegistering(false);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-3rem)] flex justify-center items-center bg-gray-100">
      <div className="bg-white rounded-xl p-6 w-96 shadow-lg">
        <h1 className="text-blue-900 text-center font-bold text-xl mb-4">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Role Selection */}
          <div className="flex justify-between mb-4 gap-2">
            <button
              type="button"
              onClick={(e) =>
                setSignupData({ ...signupData, role: RoleType.STUDENT})
              }
              className={`primary w-1/2 ${
              signupData.role === RoleType.STUDENT ? "bg-purple-600 text-white" : "bg-gray-200"
              }`}
            >
              Student
            </button>
            <button
              type="button"
              onClick={(e) =>
                setSignupData({ ...signupData, role: RoleType.INSTRUCTOR })
              }
              className={`secondary w-1/2 ${
                signupData.role === RoleType.INSTRUCTOR
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              Instructor
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={(e) =>
                setSignupData({ ...signupData, name: e.target.value })
              }
              minLength={6}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
              minLength={6}
              required
            />

            {/* Additional Fields for Instructor */}
            {signupData.role === RoleType.INSTRUCTOR && (
              <>
                <textarea
                  name="introduction"
                  placeholder="Introduction"
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      introduction: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  name="education"
                  placeholder="Education"
                  onChange={(e) =>
                    setSignupData({ ...signupData, education: e.target.value })
                  }
                />

                {/* Achievements Section */}
                <div className="mt-4">
                  <h2 className="font-semibold">Achievements</h2>

                  {/* Displaying achievements above the input */}
                  <ul>
                    {signupData.achievements.map((ach, index) => (
                      <li
                        key={index}
                        className="flex justify-between p-2 border rounded mt-1"
                      >
                        {ach}
                        <button
                          type="button"
                          onClick={() => removeAchievement(index)}
                          className="text-red-500"
                        >
                          ✖
                        </button>
                      </li>
                    ))}
                  </ul>

                  {/* Add Achievement Input below the existing achievements */}
                  <div className="flex mt-4 gap-2">
                    <input
                      type="text"
                      placeholder="Add an achievement"
                      value={achievementInput}
                      onChange={(e) => setAchievementInput(e.target.value)}
                      className="w-6/7"
                    />
                    <button
                      type="button"
                      onClick={addAchievement}
                      className="primary w-1/7"
                    >
                      +
                    </button>
                  </div>
                </div>
              </>
            )}

            <button
              className="primary w-full"
              type="submit"
              disabled={userRegistering}
            >
              {userRegistering
                ? "Creating Account..."
                : `Create ${
                  signupData.role === RoleType.STUDENT  ? "Student" : "Instructor"
                  } Account`}
            </button>

            {/* Link to Login */}
            <div className="text-center mt-0.5">
              <p>
                Already have an account?{" "}
                <Link href="/login" className="text-purple-600">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
