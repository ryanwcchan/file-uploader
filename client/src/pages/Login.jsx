import React from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../api/userCalls";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ username, password });
      console.log(response);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="m-[3rem] flex flex-col justify-center items-center">
      <div className="flex flex-col p-[3rem] rounded-lg shadow shadow-gray-400">
        <h1 className="text-2xl font-bold">Login</h1>
        <form onSubmit={handleSubmit} action="POST">
          <div className="flex flex-col my-2">
            <label htmlFor="username" className="font-semibold">
              Username:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="border rounded-md p-2 focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="password" className="font-semibold">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border rounded-md p-2 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div className="flex flex-col gap-2 justify-center items-center">
            <button className="bg-blue-400 px-4 py-2 rounded-lg m-2 hover:bg-blue-600 text-white font-semibold">
              Login
            </button>
            <Link to="/signup" className="hover:text-blue-400 underline">
              Don&apos;t have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
