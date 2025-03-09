"use client";
import React, { useState } from "react";
import { VscMortarBoard } from "react-icons/vsc";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
import CourseCard from "@/components/CourseCard";
import Modal from "@/components/Modal";

function InstructorProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  ];

  return (
    <div className="px-30">
      <h1 className="text-2xl py-8">Instructor Profile</h1>
      <p className="text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro libero
        quasi, aperiam fugiat dolore at laudantium est dignissimos voluptatum,
        quas, officiis nostrum nam maxime iste consequatur! Ipsam laudantium
        optio impedit.
      </p>
      <div className="flex justify-evenly">
        <div className="bg-blue-600 w-300 h-25 m-12">
          <img
            src="/landing-page.avif"
            alt="admin-pic"
            className="rounded-full w-26 h-26 mx-28 my-4 shadow"
          />
        </div>
      </div>
      <div className="flex justify-between text-gray-600 px-40">
        <div>
          <h1 className="font-bold text-lg">Liam Johnson</h1>
          <p>Instructor</p>
          <div className="flex items-center gap-2 pt-4">
            <MdOutlineLibraryBooks />
            <span>1 Courses Offered</span>
          </div>
          <div className="flex items-center gap-2">
            <VscMortarBoard />
            <span>3 Enrolled Students</span>
          </div>
        </div>

        <div className="w-2/3 space-y-4">
          <h1 className="font-bold text-lg">Introduction</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            veritatis sapiente ex amet odio cumque voluptatum accusantium
            deserunt, blanditiis dolorem saepe doloribus aspernatur officiis
            quasi magnam asperiores praesentium illo fugit?
          </p>
          <div className="flex gap-4">
            <img src="/academic.jpeg" alt="academic" className="w-30 h-30" />
            <div>
              <h1 className="font-bold text-lg">Education</h1>
              <div className="flex items-center gap-2 pt-4">
                <VscMortarBoard />
                <span>Master in Computer Science</span>
              </div>
              <div className="flex items-center gap-2">
                <VscMortarBoard />
                <span>PhD in Computer Science and Engineering</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <img src="/trophy.jpg" alt="academic" className="w-30 h-30" />
            <div>
              <h1 className="font-bold text-lg">Achievements</h1>
              <div className="flex items-center gap-2 pt-4">
                <GoTrophy />
                <span>Microsoft Certified Solution Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <GoTrophy />
                <span>Assisted Faculty at Oakridge University</span>
              </div>
              <div className="flex items-center gap-2">
                <GoTrophy />
                <span>Guest Lecturer at Stanford University</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-10">
        <h1 className="text-2xl ">Uploaded Courses</h1>

        <button className="bg-blue-600 text-white rounded-3xl p-2" onClick={() => setIsModalOpen(true)}>
          Add New Course
        </button>
      </div>
      <div className="grid grid-cols-3 px-20 pb-8 gap-4">
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
     {isModalOpen && <Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default InstructorProfile;
