"use client";
import React, { useEffect, useState } from "react";
import { VscMortarBoard } from "react-icons/vsc";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
import CourseCard from "@/app/components/CourseCard";
import Modal from "@/app/components/Modal";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { RoleType } from "@/types/user";
import Image from "next/image";
import axios from "axios";

interface instructorData {
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

function InstructorProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
const [profile, setProfile] = useState<instructorData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user || user.role !== "INSTRUCTOR") {
      router.push("/login");
      return;
    }

    const fetchProfile = async () => {
      if (!user?.access_token) {
        console.error("Access token is missing!");
        return;
      }

      try {
        console.log("Fetching profile data with token:", user.access_token);

        const response = await axios.get<instructorData>(
          `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
            },
          }
        );

        console.log("Profile Data:", response.data);
        setProfile(response.data);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error("Axios Error:", error.response?.data || error.message);
          setError(error.response?.data?.message || "Failed to fetch profile.");
        } else {
          console.error("Unexpected Error:", error);
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user, router]);

  if (!user || user.role !== "INSTRUCTOR") {
    return null;
  }


  return (
    <div className="bg-gray-100">
      <div className="mx-35">
        <h1 className="text-blue-900 text-2xl py-8">Instructor Profile</h1>
        <p className="text-gray-600">
        {profile?.introduction}
        </p>
        <div className="flex justify-evenly">
          <div className="bg-blue-600 w-352 h-25 my-12">
            <Image
              src="/landing-page-bg.jpg"
              alt="admin-pic"
              width={100}
              height={100}
              className="rounded-full w-26 h-26 mx-28 my-4 shadow"
            />
          </div>
        </div>
        <div className="flex justify-between text-gray-600 px-40">
          <div>
            <h1 className="font-bold text-lg">{profile?.name}</h1>
            <p>{profile?.role && profile.role.toLowerCase()}</p>
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
            {profile?.introduction}
            </p>
            <div className="flex gap-4">
              <Image
                src="/academic.jpeg"
                alt="academic"
                width={100}
                height={100}
                className="w-30 h-30"
              />
              <div>
                <h1 className="font-bold text-lg">Education</h1>
                <div className="flex items-center gap-2 pt-4">
                  <VscMortarBoard />
                  <span>{profile?.education}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                src="/trophy.jpg"
                alt="academic"
                width={100}
                height={100}
                className="w-30 h-30"
              />
              <div>
                <h1 className="font-bold text-lg">Achievements</h1>
                <div className="flex items-center gap-2 pt-4">
                  <GoTrophy />
                  <span>{profile?.achievements}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-10">
          <h1 className="text-blue-900 text-2xl">Uploaded Courses</h1>

          <button className="primary" onClick={() => setIsModalOpen(true)}>
            Add New Course
          </button>
        </div>
        <div className="grid grid-cols-3 pb-8 gap-4">
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
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            handleClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
}

export default InstructorProfile;
