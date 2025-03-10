"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function SignUp() {
  const [role, setRole] = useState<"student" | "instructor">("student");
  const [hydrated, setHydrated] = useState(false);
  const [achievements, setAchievements] = useState<string[]>([]);
  const [achievementInput, setAchievementInput] = useState("");

  useEffect(() => {
    setHydrated(true); // Ensures component only updates on client-side
  }, []);

  if (!hydrated) return null; // Prevent hydration mismatch

  // Function to add achievements (prepend to the list)
  const addAchievement = () => {
    if (achievementInput.trim()) {
      setAchievements([achievementInput, ...achievements]); // Prepend to list
      setAchievementInput(""); // Reset input after adding
    }
  };

  // Function to remove an achievement
  const removeAchievement = (index: number) => {
    setAchievements(achievements.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full min-h-[calc(100vh-3rem)] flex justify-center items-center bg-gray-100">
      <div className="bg-white rounded-xl p-6 w-96 shadow-lg">
        <h1 className="text-center font-bold text-xl mb-4">Sign Up</h1>

        {/* Role Selection */}
        <div className="flex justify-between mb-4">
          <button
            onClick={() => setRole("student")}
            className={`px-4 py-2 rounded-lg w-1/2 ${
              role === "student" ? "bg-purple-600 text-white" : "bg-gray-200"
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setRole("instructor")}
            className={`px-4 py-2 rounded-lg w-1/2 ${
              role === "instructor" ? "bg-purple-600 text-white" : "bg-gray-200"
            }`}
          >
            Instructor
          </button>
        </div>

        <div className="flex flex-col">
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter password" />

          {/* Additional Fields for Instructor */}
          {role === "instructor" && (
            <>
              <textarea placeholder="Introduction" />
              <input type="text" placeholder="Education" />

              {/* Achievements Section */}
              <div className="mt-4">
                <h2 className="font-semibold">Achievements</h2>

                {/* Displaying achievements above the input */}
                <ul>
                  {achievements.map((ach, index) => (
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
                <div className="flex mt-4">
                  <input
                    type="text"
                    placeholder="Add an achievement"
                    value={achievementInput}
                    onChange={(e) => setAchievementInput(e.target.value)}
                    className="border m-2 p-2 rounded flex-grow"
                  />
                  <button
                    onClick={addAchievement}
                    className="bg-purple-600 text-white px-4 py-2 rounded m-2"
                  >
                    +
                  </button>
                </div>
              </div>
            </>
          )}

          <Link
            href={role === "student" ? "/studentprofile" : "/instructorprofile"}
          >
            <button className="bg-purple-600 text-white p-2 mt-4 rounded-3xl w-full">
              Create {role === "student" ? "Student" : "Instructor"} Account
            </button>
          </Link>

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
      </div>
    </div>
  );
}

export default SignUp;
