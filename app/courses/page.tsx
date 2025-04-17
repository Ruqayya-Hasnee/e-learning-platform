"use client";

import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import CourseCard from "@/app/components/CourseCard";
import { CiSearch } from "react-icons/ci";
import toast from "react-hot-toast";
import { useRouter, usePathname } from "next/navigation";

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  videoPath: string;
  thumbnail?: string;
  rating?: number;
  totalReviews?: number;
}

function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isCourseLoading, setIsCourseLoading] = useState<boolean>(false);
  const [showEnroll, setShowEnroll] = useState<string | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const { loading, user } = useAuth();

  const isStudent = user?.role === "STUDENT";

  const fetchAllCourses = useCallback(async () => {
    try {
      setIsCourseLoading(true);
      const response = await axios.get<Course[]>(
        `${process.env.NEXT_PUBLIC_API_URL}/courses`
      );
      setCourses(response.data);
    } catch (err: unknown) {
      console.error("Error fetching courses:", err);
      setError("Failed to load courses.");
    } finally {
      setIsCourseLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      fetchAllCourses();
    }
  }, [loading, fetchAllCourses]);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  const handleEnroll = async (courseId: string) => {
    if (!user) {
      router.push("/signup");
      return;
    }

    if (!isStudent) {
      toast.error("Only students can enroll.");
      return;
    }

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/courses/enroll`,
        { courseId },
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Enrolled successfully!");
      router.push("/studentprofile");
    } catch (error) {
      toast.error("Failed to enroll. Try again.");
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="mx-35 py-7">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-blue-900 font-bold">
            Explore Our Courses
          </h1>
          <div className="flex relative items-center">
            <input
              type="text"
              className="bg-white outline-none rounded-full p-3 w-62 h-10"
              placeholder="Search Courses"
            />
            <CiSearch className="absolute right-3 p-1 text-gray-500 bg-orange-300 rounded-full h-6 w-6" />
          </div>
        </div>

        {error && <div className="text-red-600 text-center py-2">{error}</div>}

        <div className="grid grid-cols-3 py-12 gap-6">
          {courses.map((course) => (
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
              onPlayClick={() => {
                if (!user || !isStudent) {
                  router.push("/signup");
                  return;
                }
                setShowEnroll(course.id);
              }}
              onEnroll={() => handleEnroll(course.id)}
              showEnrollButton={isStudent && showEnroll === course.id}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <button className="primary" disabled={isCourseLoading}>
            {isCourseLoading ? "Loading..." : "See All Courses"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Courses;
