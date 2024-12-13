import React from "react";

export default function Login() {
  return (
    <div className="m-[3rem] flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <h1>Login</h1>
        <form>
          <div className="my-2">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              id="username"
              className="border"
            />
          </div>
          <div className="my-2">
            <label htmlFor="password">Password: </label>
            <input
              type="text"
              name="password"
              id="password"
              className="border"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
