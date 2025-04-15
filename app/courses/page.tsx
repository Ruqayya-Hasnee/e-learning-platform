"use client";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import CourseCard from "@/app/components/CourseCard";
import { CiSearch } from "react-icons/ci";

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

  const { loading } = useAuth();

  const fetchAllCourses = useCallback(async () => {
    try {
      const response = await axios.get<Course[]>(
        `${process.env.NEXT_PUBLIC_API_URL}/courses`
      );
      setCourses(response.data);
    } catch (err) {
      setError("Failed to load courses.");
    }
  }, []);

  useEffect(() => {
    if (loading) return;
    fetchAllCourses();
  }, [loading, fetchAllCourses]);

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
    disablePlay={true} 
  />
))}

        </div>
        <div className="flex justify-center">
          <button className="primary">See All Courses</button>
        </div>
      </div>
    </div>
  );
}

export default Courses;
