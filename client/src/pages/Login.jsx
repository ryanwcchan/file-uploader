import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="m-[3rem] flex flex-col justify-center items-center">
      <div className="flex flex-col p-[3rem] rounded-lg shadow shadow-gray-400">
        <h1 className="text-2xl font-bold">Login</h1>
        <form>
          <div className="flex flex-col my-2">
            <label htmlFor="username" className="font-semibold">
              Username:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="border rounded-md p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="password" className="font-semibold">
              Password:
            </label>
            <input
              type="text"
              name="password"
              id="password"
              className="border rounded-md p-2 focus:outline-none"
            />
          </div>
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
