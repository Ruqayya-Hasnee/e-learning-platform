"use client";
import React, { useEffect, useState, useCallback } from "react";
import { VscMortarBoard } from "react-icons/vsc";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
import CourseCard from "@/app/components/CourseCard";
import Modal from "@/app/components/Modal";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
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

export interface uploadCoursesData {
  id: string;
  title: string;
  description: string;
  price: number;
  videoPath: string;
}

function InstructorProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfile] = useState<instructorData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploadCourses, setUploadCourses] = useState<uploadCoursesData[]>([]);

  const router = useRouter();
  const { user, loading } = useAuth();

  const fetchProfile = useCallback(async () => {
    if (!user?.access_token) return;

    try {
      const response = await axios.get<instructorData>(
        `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        }
      );
      setProfile(response.data);
    } catch {
      setError("Failed to fetch profile.");
    }
  }, [user?.access_token]);

  const fetchCourses = useCallback(async () => {
    if (!user?.access_token) return;

    try {
      const response = await axios.get<uploadCoursesData[]>(
        `${process.env.NEXT_PUBLIC_API_URL}/courses/uploadedByMe`,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        }
      );
      setUploadCourses(response.data);
    } catch {
      setError("Failed to fetch uploaded courses.");
    }
  }, [user?.access_token]);

  useEffect(() => {
    if (loading) return; // Don’t proceed if still loading
    if (!user || user.role !== "INSTRUCTOR") {
      router.push("/login");
      return;
    }

    fetchProfile();
    fetchCourses();
  }, [user, router, fetchProfile, fetchCourses, loading]);

  // Show loader if loading state is true
  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  // If the user is not authenticated or role is not instructor, redirect to login
  if (!user || user.role !== "INSTRUCTOR") {
    return null;
  }

  return (
    <div className="bg-gray-100">
      <div className="mx-35">
        <h1 className="text-blue-900 text-2xl py-8">Instructor Profile</h1>

        {error && <div className="text-red-600 text-center mb-4">{error}</div>}

        <p className="text-gray-600">{profile?.introduction}</p>
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
              <span>{uploadCourses.length} Courses Offered</span>
            </div>
            <div className="flex items-center gap-2">
              <VscMortarBoard />
              <span>{profile?.email}</span>{" "}
              {/* Changed from placeholder to email */}
            </div>
          </div>

          <div className="w-2/3 space-y-4">
            <h1 className="font-bold text-lg">Introduction</h1>
            <p>{profile?.introduction}</p>
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
                  <span>{profile?.achievements.join(", ")}</span>
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
          {uploadCourses.map((course) => (
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
              canPlayVideo={true}
            />
          ))}
        </div>

        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            uploadCourses={uploadCourses}
            setUploadCourses={setUploadCourses}
            handleClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
}

export default InstructorProfile;
