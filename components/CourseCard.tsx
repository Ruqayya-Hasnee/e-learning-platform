import React from "react";

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
      <img src={thumbnail} alt="landscape image" />
      <div className="flex flex-col gap-1 p-2">
        <p>
          ⭐{rating}({totalReviews})
        </p>
        <p className="font-bold">{description}</p>
        <div className="flex justify-between items-center font-bold">
          <div className="flex items-center gap-2">
            <img
              src={image}
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
