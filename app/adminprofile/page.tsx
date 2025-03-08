import React from "react";
import CourseCard from "@/components/CourseCard";

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
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-2xl p-10">Admin Profile</h1>
      <div className="flex justify-center">
        <div className="flex w-380 shadow-sm p-4 mx-8 rounded bg-white">
          <img
            src="/landing-page.avif"
            alt="admin-pic"
            className="rounded-full w-26 h-26 border"
          />
          <div className="flex flex-col justify-center p-4">
            <h1>Name</h1>
            <h1>Admin</h1>
            <h1>United Kingdom</h1>
          </div>
        </div>
      </div>
      <h1 className="text-2xl p-10">Personal Information</h1>

      <div className="flex justify-center">
        <div className="w-380 shadow-sm p-4 mx-8 rounded bg-white">
          <div className="flex justify-evenly">
            <div className="flex flex-col">
              <span className="gap-12">Name</span>
              <span className="gap-12">CNIC</span>
              <span className="gap-12">Birth Date</span>
              <span className="gap-12">Address</span>
            </div>
            <div className="flex flex-col">
              <span className="gap-12">Ruqayya</span>
              <span className="gap-12">6767-6767-76</span>
              <span className="gap-12">3/5/2003</span>
              <span className="gap-12">City Name</span>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-2xl p-10">Bio Information</h1>
      <div className="flex justify-center">
        <div className="w-380 shadow-sm p-4 mx-8 rounded text-gray-700 bg-white">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa
            necessitatibus incidunt repellat, reiciendis consequuntur dolorem
            numquam nisi voluptas itaque sequi, molestias minima nobis
            reprehenderit et. Quibusdam voluptates eos doloremque? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Minima possimus rem
            corporis quisquam itaque hic dignissimos voluptas! Possimus ratione,
            nostrum qui impedit illum suscipit voluptates blanditiis iure
            tenetur iusto perspiciatis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Tempora, consequuntur magni numquam facilis
            provident deleniti, laboriosam quaerat explicabo nam consectetur
            ullam sunt accusamus dolore ducimus saepe voluptates alias adipisci
            vitae.
          </p>
        </div>
      </div>
      <h1 className="text-2xl p-10">Courses</h1>
      <div className="grid grid-cols-3 px-20 gap-4">
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
  );
}

export default AdminProfile;
