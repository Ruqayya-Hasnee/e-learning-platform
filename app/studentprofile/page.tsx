"use client";

import React from "react";
import CourseCard from "@/app/components/CourseCard";
import { useAuth } from "../context/AuthContext";
import { RoleType } from "@/types/user";
import { useRouter } from "next/navigation";
import Image from "next/image";

function StudentProfile() {
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
      id: 4,
      rating: 4.6,
      totalReviews: 180,
      thumbnail: "https://picsum.photos/400/300?random=4",
      image: "https://picsum.photos/400/300?random=14",
      name: "Data Structures & Algorithms",
      price: 129,
      description:
        "Learn how to solve coding problems efficiently with DSA concepts.",
    },
    {
      id: 5,
      rating: 4.5,
      totalReviews: 220,
      thumbnail: "https://picsum.photos/400/300?random=5",
      image: "https://picsum.photos/400/300?random=15",
      name: "Artificial Intelligence Basics",
      price: 179,
      description:
        "Understand the fundamentals of AI, machine learning, and neural networks.",
    },
    {
      id: 6,
      rating: 4.8,
      totalReviews: 275,
      thumbnail: "https://picsum.photos/400/300?random=6",
      image: "https://picsum.photos/400/300?random=16",
      name: "Cybersecurity Fundamentals",
      price: 159,
      description:
        "Learn how to secure networks and protect data from cyber threats.",
    },
  ];

  const router = useRouter();

  const { user } = useAuth();

  if (!user || user?.role !== RoleType.STUDENT) {
    router.push("/login");
    return;
  }

  return (
    <div className="bg-gray-100">
      <div className="mx-35">
        <div>
          <h1 className="text-2xl text-center py-6">Student Profile</h1>
          <div className="flex text-center gap-8">
            {/* left div */}
            <div className="flex flex-col justify-center bg-white w-1/3 h-auto py-8 shadow-sm">
              <div className="flex justify-center pb-6">
                <Image
                  src="/landing-page.avif"
                  alt="page image"
                  width={100}
                  height={100}
                  className="rounded-full w-32 h-32 border"
                />
              </div>
              <h1 className="text-2xl p-1">Ruqayya</h1>
              <p className="p-2">bc210406706</p>
              <p>bc210406706@vu.edu.com</p>
            </div>

            {/* right div */}
            <div className="bg-white w-2/3 h-auto shadow-sm">
              <h1 className="text-2xl bg-gray-200">Personal Information</h1>
              <div className="flex justify-evenly">
                <div className="flex flex-col">
                  <span className="p-12">Name</span>
                  <span className="p-12">CNIC</span>
                  <span className="p-12">Birth Date</span>
                  <span className="p-12">Address</span>
                </div>
                <div className="flex flex-col">
                  <span className="p-12">Ruqayya</span>
                  <span className="p-12">6767-6767-76</span>
                  <span className="p-12">3/5/2003</span>
                  <span className="p-12">City Name</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl pt-12">Enrolled Courses</h1>
          <div className="grid grid-cols-3 py-12 gap-4">
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
    </div>
  );
}
export default StudentProfile;
