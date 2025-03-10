import React from "react";

function Dashboard() {
  return (
    <div className="flex justify-between items-center h-12 mt-32 mx-35">
      <div className="w-lg">
        <h1 className="text-5xl font-bold text-blue-900">E-learning</h1>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </p>
        <button className="mt-6 bg-blue-900 text-white py-2 px-7 rounded-3xl">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
