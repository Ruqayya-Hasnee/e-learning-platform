import CourseCard from "@/components/CourseCard";
import React from "react";
import { CiSearch } from "react-icons/ci";

function Courses() {
  const courses = [
    {
      id: 1,
      rating: 4.8,
      totalReviews: 150,
      thumbnail: "https://picsum.photos/400/300?random=1",
      image: "https://picsum.photos/400/300?random=11",
      name: "Introduction to Physics",
      price: 99,
      description: "Learn the basics of physics, covering motion, forces, and energy.",
    },
    {
      id: 2,
      rating: 4.7,
      totalReviews: 200,
      thumbnail: "https://picsum.photos/400/300?random=2",
      image: "https://picsum.photos/400/300?random=12",
      name: "Web Development Bootcamp",
      price: 149,
      description: "Master HTML, CSS, and JavaScript with hands-on projects.",
    },
    {
      id: 3,
      rating: 4.9,
      totalReviews: 320,
      thumbnail: "https://picsum.photos/400/300?random=3",
      image: "https://picsum.photos/400/300?random=13",
      name: "Mastering React.js",
      price: 199,
      description: "A complete guide to building modern web applications using React.js.",
    },
    {
      id: 4,
      rating: 4.6,
      totalReviews: 180,
      thumbnail: "https://picsum.photos/400/300?random=4",
      image: "https://picsum.photos/400/300?random=14",
      name: "Data Structures & Algorithms",
      price: 129,
      description: "Learn how to solve coding problems efficiently with DSA concepts.",
    },
    {
      id: 5,
      rating: 4.5,
      totalReviews: 220,
      thumbnail: "https://picsum.photos/400/300?random=5",
      image: "https://picsum.photos/400/300?random=15",
      name: "Artificial Intelligence Basics",
      price: 179,
      description: "Understand the fundamentals of AI, machine learning, and neural networks.",
    },
    {
      id: 6,
      rating: 4.8,
      totalReviews: 275,
      thumbnail: "https://picsum.photos/400/300?random=6",
      image: "https://picsum.photos/400/300?random=16",
      name: "Cybersecurity Fundamentals",
      price: 159,
      description: "Learn how to secure networks and protect data from cyber threats.",
    },
  ];
  
  console.log(courses);
  

  return (
    <div className="bg-gray-100">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mt-12 ml-16">Explore Our Courses</h1>
        <div className="flex relative mr-16">
          <input
            type="text"
            className=" bg-white outline-none rounded-full p-3 w-62 h-10 mt-8"
            placeholder="Search Courses"
          />
          <CiSearch className="absolute right-3 p-1 text-gray-500 mt-10 bg-orange-300 rounded-full h-6 w-6" />
        </div>
      </div>
      <div className="grid grid-cols-3 px-20 py-12 gap-4">
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
      </div>
      <div className="flex justify-center pb-14">
        <button className="bg-teal-600 text-white py-1 px-7 rounded-3xl">
          See All Courses
        </button>
      </div>
    </div>
  );
}

export default Courses;
