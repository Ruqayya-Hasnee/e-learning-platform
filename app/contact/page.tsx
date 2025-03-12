import React from "react";

function Contact() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-center text-blue-900 mb-6">
          Contact
        </h1>

        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-gray-300 rounded-md my-2 p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md my-2 p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Query:</label>
            <textarea
              placeholder="Write your query here..."
              className="border border-gray-300 rounded-md my-2 p-2"
            ></textarea>
          </div>

          <button className="primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
