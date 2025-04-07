"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import VideoPlayModal from "../components/VideoPlayModal";

interface CourseCardProps {
  rating: number;
  totalReviews: number;
  thumbnail: string;
  image: string;
  name: string;
  price: number;
  description: string;
  videoPath?: string; // Made optional
}

export default function CourseCard({
  rating,
  totalReviews,
  thumbnail,
  image,
  name,
  price,
  description,
  videoPath,
}: CourseCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onPlayClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="card">
        <div className="relative group cursor-pointer">
          {/* Thumbnail Image */}
          <Image
            src={thumbnail}
            alt="Course thumbnail"
            width={100}
            height={100}
            className="transition duration-200 group-hover:blur-sm"
          />
          {/* Play Button */}
          {videoPath && (
            <div
              className="absolute inset-0 flex items-center justify-center 
              opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <button
                className="bg-opacity-50 p-3 rounded-full"
                onClick={onPlayClick}
              >
                <FaPlay className="text-white text-2xl" />
              </button>
            </div>
          )}
        </div>

        {/* Course Info */}
        <div className="flex flex-col gap-1 p-2">
          <p>
            ⭐{rating} ({totalReviews})
          </p>
          <p className="font-bold">{description}</p>
          <div className="flex justify-between items-center font-bold">
            <div className="flex items-center gap-2">
              <Image
                src={image}
                width={100}
                height={100}
                alt="Instructor image"
                className="w-10 h-10 rounded-full"
              />
              <p>{name}</p>
            </div>
            <p className="text-orange-300">${price}</p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoPath && isModalOpen && (
        <VideoPlayModal
          videoPath={videoPath}
          isOpen={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
