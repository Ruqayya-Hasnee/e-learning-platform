import CourseCard from "@/app/components/CourseCard";
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
      name: "Introduction to Software Engineering",
      price: 99,
      description:
        "Learn the basics of software engineering, including software development lifecycle, design patterns, and best practices.",
    },
    {
      id: 2,
      rating: 4.7,
      totalReviews: 200,
      thumbnail: "https://picsum.photos/400/300?random=2",
      image: "https://picsum.photos/400/300?random=12",
      name: "Full Stack Web Development",
      price: 149,
      description:
        "Master both frontend and backend development with hands-on projects using HTML, CSS, JavaScript, Node.js, and more.",
    },
    {
      id: 3,
      rating: 4.9,
      totalReviews: 320,
      thumbnail: "https://picsum.photos/400/300?random=3",
      image: "https://picsum.photos/400/300?random=13",
      name: "Mastering Java Programming",
      price: 199,
      description:
        "A complete guide to building scalable and maintainable software using Java, covering OOP, multithreading, and more.",
    },
    {
      id: 4,
      rating: 4.6,
      totalReviews: 180,
      thumbnail: "https://picsum.photos/400/300?random=4",
      image: "https://picsum.photos/400/300?random=14",
      name: "Data Structures & Algorithms for Software Engineers",
      price: 129,
      description:
        "Learn how to solve complex coding problems and optimize your software with efficient algorithms and data structures.",
    },
    {
      id: 5,
      rating: 4.5,
      totalReviews: 220,
      thumbnail: "https://picsum.photos/400/300?random=5",
      image: "https://picsum.photos/400/300?random=15",
      name: "Software Design & Architecture",
      price: 179,
      description:
        "Understand key principles of software design and architecture, including design patterns, UML diagrams, and system scalability.",
    },
    {
      id: 6,
      rating: 4.8,
      totalReviews: 275,
      thumbnail: "https://picsum.photos/400/300?random=6",
      image: "https://picsum.photos/400/300?random=16",
      name: "DevOps Fundamentals",
      price: 159,
      description:
        "Learn how to integrate development and operations to streamline the software release process and improve collaboration.",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="mx-35 py-7">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Explore Our Courses</h1>
          <div className="flex relative items-center">
            <input
              type="text"
              className=" bg-white outline-none rounded-full p-3 w-62 h-10"
              placeholder="Search Courses"
            />
            <CiSearch className="absolute right-3 p-1 text-gray-500 bg-orange-300 rounded-full h-6 w-6" />
          </div>
        </div>
        <div className="grid grid-cols-3 py-12 gap-6 ">
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
        <div className="flex justify-center">
          <button className="primary">See All Courses</button>
        </div>
      </div>
    </div>
  );
}

export default Courses;
