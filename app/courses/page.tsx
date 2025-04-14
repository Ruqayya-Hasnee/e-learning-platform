import CourseCard from "@/app/components/CourseCard";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { useAuth } from "../context/AuthContext";

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
