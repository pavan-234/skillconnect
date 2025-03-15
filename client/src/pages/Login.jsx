// src/pages/Login.jsx
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h2 className="text-3xl font-semibold text-gray-800">Login</h2>
      <input
        type="text"
        placeholder="Email"
        className="mt-4 p-2 border rounded w-64"
      />
      <input
        type="password"
        placeholder="Password"
        className="mt-2 p-2 border rounded w-64"
      />
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Login
      </button>
    </div>
  );
};

export default Login;