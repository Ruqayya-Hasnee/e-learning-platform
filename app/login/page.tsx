import React from "react";

function Login() {
  return (
    <div className="w-100 my-30 p-12 mx-auto bg-purple-600">
      <div className="bg-white rounded-xl p-6 items-center">
        <h1 className="text-center font-bold">Login</h1>
        <div className="flex flex-col p-4">
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
            <button className="bg-purple-600 text-white text-center px-4 py-2 ml-18 rounded-3xl">
              Login
            </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
