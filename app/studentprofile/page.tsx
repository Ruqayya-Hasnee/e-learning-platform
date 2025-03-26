/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "@/app/components/CourseCard";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ProfileData {
  id: string;
  name: string;
  email: string;
  introduction: string;
  education: string;
  achievements: string[];
  role: string;
  created_at: string;
  updated_at: string;
}

function StudentProfile() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user || user.role !== "STUDENT") {
      router.push("/login");
      return;
    }

    const fetchProfile = async () => {
      if (!user?.access_token) {
        console.error("Access token is missing!");
        return;
      }

      try {
        console.log("Fetching profile data with token:", user.access_token);

        const response = await axios.get<ProfileData>(
          `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
            },
          }
        );

        console.log("Profile Data:", response.data);
        setProfile(response.data);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error("Axios Error:", error.response?.data || error.message);
          setError(error.response?.data?.message || "Failed to fetch profile.");
        } else {
          console.error("Unexpected Error:", error);
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user, router]);

  if (!user || user.role !== "STUDENT") {
    return null;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-blue-900 text-2xl text-center py-6">
          Student Profile
        </h1>
        <div className="flex text-center gap-8">
          <div className="flex flex-col items-center bg-white w-1/3 py-8 shadow-sm">
            <Image
              src="/landing-page-bg.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="rounded-full w-32 h-32"
            />

            <h1 className="text-2xl p-1">{profile?.name}</h1>
            <p>{profile?.email}</p>
          </div>

          <div className="bg-white w-2/3 p-6 shadow-sm">
            <h2 className="text-2xl bg-gray-200 p-4">Personal Information</h2>
            <div className="p-4">
              <p>Introduction: {profile?.introduction || "null"}</p>
              <p>Education: {profile?.education || "null"}</p>
              <p>
                Achievements:{" "}
                {profile?.achievements?.length
                  ? profile.achievements.join(", ")
                  : "None"}
              </p>
              <p>Role: {profile?.role}</p>
              <p>Created At: {profile?.created_at || "null"}</p>
              <p>Updated At: {profile?.updated_at || "null"}</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-blue-900 text-2xl pt-12">Enrolled Courses</h1>
          <div className="grid grid-cols-3 py-12 gap-6">
            {[
              {
                id: 1,
                rating: 4.8,
                totalReviews: 150,
                thumbnail: "https://picsum.photos/400/300?random=1",
                image: "https://picsum.photos/400/300?random=11",
                name: "Introduction to Software Engineering",
                price: 99,
                description: "Learn the basics of software engineering.",
              },
              {
                id: 4,
                rating: 4.6,
                totalReviews: 180,
                thumbnail: "https://picsum.photos/400/300?random=4",
                image: "https://picsum.photos/400/300?random=14",
                name: "Data Structures & Algorithms",
                price: 129,
                description: "Solve coding problems efficiently with DSA.",
              },
              {
                id: 5,
                rating: 4.5,
                totalReviews: 220,
                thumbnail: "https://picsum.photos/400/300?random=5",
                image: "https://picsum.photos/400/300?random=15",
                name: "Artificial Intelligence Basics",
                price: 179,
                description: "Understand AI fundamentals and machine learning.",
              },
              {
                id: 6,
                rating: 4.8,
                totalReviews: 275,
                thumbnail: "https://picsum.photos/400/300?random=6",
                image: "https://picsum.photos/400/300?random=16",
                name: "Cybersecurity Fundamentals",
                price: 159,
                description: "Learn how to secure networks from cyber threats.",
              },
            ].map((course) => (
              <CourseCard
                key={course.id}
                rating={course.rating}
                totalReviews={course.totalReviews}
                thumbnail={course.thumbnail}
                image={course.image}
                name={course.name}
                price={course.price}
                description={course.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
