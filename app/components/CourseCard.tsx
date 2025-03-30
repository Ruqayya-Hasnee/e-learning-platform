import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface CourseCardProps {
  rating: number;
  totalReviews: number;
  thumbnail: string;
  image: string;
  name: string;
  price: number;
  description: string;
}

export default function CourseCard({
  rating,
  totalReviews,
  thumbnail,
  image,
  name,
  price,
  description,
}: CourseCardProps) {
  return (
    <div className="card">
      <div className="relative group cursor-pointer">
        <Image
          src={thumbnail}
          alt="landscape image"
          width={100}
          height={100}
          className="transition duration-200 group-hover:blur-xs"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
          <FaPlay className="text-white text-2xl" />
        </div>
      </div>

      <div className="flex flex-col gap-1 p-2">
        <p>
          ⭐{rating}({totalReviews})
        </p>
        <p className="font-bold">{description}</p>
        <div className="flex justify-between items-center font-bold">
          <div className="flex items-center gap-2">
            <Image
              src={image}
              width={100}
              height={100}
              alt="landscape image"
              className="w-10 h-10 rounded-full"
            />
            <p>{name}</p>
          </div>
          <p className="text-orange-300">{price}</p>
        </div>
      </div>
    </div>
  );
}
