"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function SignUp() {
  const [role, setRole] = useState<"student" | "instructor">("student");
  const [hydrated, setHydrated] = useState(false);
  const [achievementInput, setAchievementInput] = useState("");
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    introduction: "",
    education: "",
    achievements: [],
  });

  useEffect(() => {
    setHydrated(true); // Ensures component only updates on client-side
  }, []);

  if (!hydrated) return null; // Prevent hydration mismatch

  // Function to add achievements (prepend to the list)
  const addAchievement = () => {
    const trimmedInput = achievementInput.trim();
    if (!trimmedInput) return; // Prevent empty input

    setSignupData({
      ...signupData,
      achievements: [trimmedInput, ...signupData.achievements] as any, // Prepend to list
    });

    setAchievementInput(""); // Reset input after adding
  };

  // Function to remove an achievement
  const removeAchievement = (index: number) => {
    setSignupData({
      ...signupData,
      achievements: signupData.achievements.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(signupData);
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
              onClick={() => setRole("student")}
              className={`primary w-1/2 ${
                role === "student" ? "bg-purple-600 text-white" : "bg-gray-200"
              }`}
            >
              Student
            </button>
            <button
              onClick={() => setRole("instructor")}
              className={`secondary w-1/2 ${
                role === "instructor"
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
              placeholder="Enter your name"
              onChange={(e) =>
                setSignupData({ ...signupData, name: e.target.value })
              }
              minLength={6}
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
              required
            />
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
              minLength={6}
              required
            />

            {/* Additional Fields for Instructor */}
            {role === "instructor" && (
              <>
                <textarea
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
                    <button onClick={addAchievement} className="primary w-1/7">
                      +
                    </button>
                  </div>
                </div>
              </>
            )}

            <button className="primary w-full" type="submit">
              Create {role === "student" ? "Student" : "Instructor"} Account
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
