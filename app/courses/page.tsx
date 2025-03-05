import React from "react";
import { CiSearch } from "react-icons/ci";

function Courses() {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mt-12 ml-16">Explore Our Courses</h1>
        <div className="flex relative mr-16">
          <input
            type="text"
            className=" bg-white outline-none rounded-full p-3 w-62 h-10 mt-8"
            placeholder="Search Courses"
          />
          <CiSearch className="absolute right-3 p-1 text-gray-500 mt-10 bg-orange-300 rounded-full h-6 w-6" />
        </div>
      </div>
      <div className="grid grid-cols-3 px-20 py-12 gap-4">
        <div className="card">
          <img src="https://picsum.photos/400/300" alt="landscape image" />
          <p>⭐4.5(120)</p>
          <p className="font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
          <div className="flex justify-between font-bold">
            <div className="flex items-center p-2 gap-2">
              <img
                src="https://picsum.photos/400/300"
                alt="landscape image"
                className="w-10 h-10 rounded-full"
              />
              <p>Name</p>
            </div>
            <p className="mt-4 text-orange-300">$49.69</p>
          </div>
        </div>
        <div className="card">
          <img src="https://picsum.photos/400/300" alt="landscape image" />
          <p>⭐4.5(120)</p>
          <p className="font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
          <div className="flex justify-between font-bold">
            <div className="flex items-center p-2 gap-2">
              <img
                src="https://picsum.photos/400/300"
                alt="landscape image"
                className="w-10 h-10 rounded-full"
              />
              <p>Name</p>
            </div>
            <p className="mt-4 text-orange-300">$49.69</p>
          </div>
        </div>
        <div className="card">
          <img src="https://picsum.photos/400/300" alt="landscape image" />
          <p>⭐4.5(120)</p>
          <p className="font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
          <div className="flex justify-between font-bold">
            <div className="flex items-center p-2 gap-2">
              <img
                src="https://picsum.photos/400/300"
                alt="landscape image"
                className="w-10 h-10 rounded-4xl"
              />
              <p>Name</p>
            </div>
            <p className="mt-4 text-orange-300">$49.69</p>
          </div>
        </div>
        <div className="card">
          <img src="https://picsum.photos/400/300" alt="landscape image" />
          <p>⭐4.5(120)</p>
          <p className="font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
          <div className="flex justify-between font-bold">
            <div className="flex items-center p-2 gap-2">
              <img
                src="https://picsum.photos/400/300"
                alt="landscape image"
                className="w-10 h-10 rounded-4xl"
              />
              <p>Name</p>
            </div>
            <p className="mt-4 text-orange-300">$49.69</p>
          </div>
        </div>
        <div className="card">
          <img src="https://picsum.photos/400/300" alt="landscape image" />
          <p>⭐4.5(120)</p>
          <p className="font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
          <div className="flex justify-between font-bold">
            <div className="flex items-center p-2 gap-2">
              <img
                src="https://picsum.photos/400/300"
                alt="landscape image"
                className="w-10 h-10 rounded-4xl"
              />
              <p>Name</p>
            </div>
            <p className="mt-4 text-orange-300">$49.69</p>
          </div>
        </div>
        <div className="card">
          <img src="https://picsum.photos/400/300" alt="landscape image" />
          <p>⭐4.5(120)</p>
          <p className="font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
          <div className="flex justify-between font-bold">
            <div className="flex items-center gap-1">
              <img
                src="https://picsum.photos/400/300"
                alt="landscape image"
                className="w-10 h-10 rounded-full"
              />
              <p>Name</p>
            </div>
            <p className="mt-10 mr-2 text-orange-300">$49.69</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-14">
      <button className="bg-teal-600 text-white py-1 px-7 rounded-3xl">
          See All Courses
        </button>
      </div>
    </div>
  );
}

export default Courses;
