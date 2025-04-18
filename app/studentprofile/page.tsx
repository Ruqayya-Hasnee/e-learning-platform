"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "@/app/components/CourseCard";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Profile data structure
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

// Course data structure
export interface enrollCoursesData {
  id: string;
  title: string;
  description: string;
  price: number;
  videoPath: string;
}

function StudentProfile() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [enrolledCourses, setEnrolledCourses] = useState<enrollCoursesData[]>(
    []
  );

  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user || user.role !== "STUDENT") {
      router.push("/login");
      return;
    }

    const fetchProfile = async () => {
      if (!user?.access_token) return;

      try {
        const response = await axios.get<ProfileData>(
          `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
          {
            headers: { Authorization: `Bearer ${user.access_token}` },
          }
        );
        setProfile(response.data);

        const coursesResponse = await axios.get<enrollCoursesData[]>(
          `${process.env.NEXT_PUBLIC_API_URL}/courses/enrolledByMe`,
          {
            headers: { Authorization: `Bearer ${user.access_token}` },
          }
        );
        setEnrolledCourses(coursesResponse.data);
      } catch (error: unknown) {
        console.error("Error fetching profile or courses", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user, router]);

  if (!user || user.role !== "STUDENT" || loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-35">
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

        <div className="py-8">
          <h1 className="text-blue-900 text-2xl pb-4">Enrolled Courses</h1>
          <div className="grid grid-cols-3 gap-6">
            {enrolledCourses.map((course) => (
              <CourseCard
                key={course.id}
                rating={4.5}
                totalReviews={100}
                thumbnail="https://picsum.photos/400/300"
                image="https://picsum.photos/400/300"
                name={course.title}
                price={course.price}
                description={course.description}
                videoPath={course.videoPath}
                canPlayVideo={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
