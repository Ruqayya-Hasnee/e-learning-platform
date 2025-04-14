"use client"
import CourseCard from "@/app/components/CourseCard";
import React, { useCallback, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

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
  const { user, loading } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchCourses = useCallback(async () => {
    if (!user?.access_token) return;

    try {
      const response = await axios.get<Course[]>(
        `${process.env.NEXT_PUBLIC_API_URL}/courses`,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        }
      );
      setCourses(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load courses.");
    }
  }, [user?.access_token]);

  useEffect(() => {
    if (loading) return;
    fetchCourses();
  }, [loading, fetchCourses]);

  if (loading) return <div className="text-center py-10">Loading...</div>;

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
              className=" bg-white outline-none rounded-full p-3 w-62 h-10"
              placeholder="Search Courses"
            />
            <CiSearch className="absolute right-3 p-1 text-gray-500 bg-orange-300 rounded-full h-6 w-6" />
          </div>
        </div>
        {/* <div className="grid grid-cols-3 py-12 gap-6 ">
          {courses.map((course) => (
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
        </div> */}
        <div className="flex justify-center">
          <button className="primary">See All Courses</button>
        </div>
      </div>
    </div>
  );
}

export default Courses;
