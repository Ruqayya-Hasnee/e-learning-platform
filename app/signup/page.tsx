import React from "react";

function SignUp() {
  return (
    <div className="w-100 my-30 p-12 mx-auto bg-purple-600">
      <div className="bg-white rounded-xl p-6 items-center">
        <h1 className="text-center font-bold">Signup</h1>
        <div className="flex flex-col p-4">
          <input
            type="text"
            placeholder="enter your name"
            className="border m-4 p-1 rounded"
          />
          <input
            type="email"
            placeholder="enter your email"
            className="border m-4 p-1 rounded"
          />
          <input
            type="password"
            placeholder="enter password"
            className="border m-4 p-1 rounded"
          />
          <button className="bg-purple-600 text-white p-2 m-8 rounded-3xl">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
