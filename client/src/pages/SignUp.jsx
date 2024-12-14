import React from "react";
import { Link } from "react-router-dom";
import { createUser } from "../api/userCalls";
import { useState } from "react";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await createUser({
        username,
        password,
        confirmPassword,
      });

      setSuccess(true);
      resetForm();
      console.log("User created:", response);
    } catch (error) {
      setError(error.message);
    }
  };

  const resetForm = () => {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="m-[3rem] flex flex-col justify-center items-center">
      <div className="flex flex-col p-[3rem] rounded-lg shadow shadow-gray-400">
        {success && (
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">
              Account successfully created!
            </h1>
            <button className="bg-blue-400 px-4 py-2 mt-2 rounded-lg m-2 hover:bg-blue-600 text-white font-semibold">
              <Link to={"/login"} className="text-2xl font-bold">
                Login
              </Link>
            </button>
          </div>
        )}

        {!success && (
          <>
            <h1 className="text-2xl font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col my-2">
                <label htmlFor="username" className="font-semibold">
                  Username:
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="border rounded-md p-2 focus:outline-none"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex flex-col my-2">
                <label htmlFor="confirmPassword" className="font-semibold">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="border rounded-md p-2 focus:outline-none"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              {error && <p className="text-red-500">{error}</p>}

              <div className="flex flex-col gap-2 justify-center items-center">
                <button className="bg-blue-400 px-4 py-2 rounded-lg m-2 hover:bg-blue-600 text-white font-semibold">
                  Register
                </button>
                <Link to="/signup" className="hover:text-blue-400 underline">
                  Already have an account?
                </Link>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
