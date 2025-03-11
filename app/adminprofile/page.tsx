import React from "react";
import CourseCard from "@/app/components/CourseCard";
import Link from "next/link";
import Image from "next/image";

function AdminProfile() {
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
        "Learn the basics of software engineering, including SDLC, design patterns, and best practices.",
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
        "Master frontend and backend development using JavaScript, Node.js, and more.",
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
        "A complete guide to Java programming, covering OOP, multithreading, and more.",
    },
    {
      id: 4,
      rating: 4.6,
      totalReviews: 180,
      thumbnail: "https://picsum.photos/400/300?random=4",
      image: "https://picsum.photos/400/300?random=14",
      name: "Data Structures & Algorithms",
      price: 129,
      description:
        "Learn how to optimize software with efficient algorithms and data structures.",
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
        "Understand key principles of software design, including UML diagrams and scalability.",
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
        "Learn how to integrate development and operations to improve software releases.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <div className="p-8 flex justify-between items-center bg-white shadow-md">
        <h1 className="text-3xl font-bold">Admin Profile</h1>
        <Link href="/instructorprofile">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-full transition-all">
            Instructor Profile
          </button>
        </Link>
      </div>

      {/* Admin Profile */}
      <div className="grid grid-cols-2 ">
        <div className="flex justify-center mt-6">
          <div className="flex items-center bg-white shadow-lg p-6 rounded-lg w-190 ml-8 h-40  m-6">
            <Image
              src="/landing-page.avif"
              alt="admin"
              width={100}
              height={100}
              className="rounded-full w-24 h-24 border-4 border-gray-300"
            />
            <div className="ml-6">
              <h2 className="text-xl font-semibold">Admin</h2>
              <p className="text-gray-600">United Kingdom</p>
            </div>
          </div>
        </div>

        {/* Personal Info */}
        <div className="w-180 h-40 mt-12 bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <p>
              <strong>Name:</strong> Ruqayya
            </p>
            <p>
              <strong>CNIC:</strong> 6767-6767-76
            </p>
            <p>
              <strong>Birth Date:</strong> 3/5/2003
            </p>
            <p>
              <strong>Address:</strong> City Name
            </p>
          </div>
        </div>

        {/* Bio Information */}
        <div className="w-362 h-50 ml-8 mt-10 bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Bio Information</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            ipsa necessitatibus incidunt repellat, reiciendis consequuntur
            dolorem numquam nisi voluptas itaque sequi, molestias minima nobis
            reprehenderit et.
          </p>
        </div>
      </div>
      {/* Courses Section */}
      <div className="mt-12 px-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
      </div>
    </div>
  );
}

export default AdminProfile;
