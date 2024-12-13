import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-[2rem] border-b border-gray-200">
      <h1 className="text-2xl">File Uploader</h1>
      <div className="flex gap-[2rem]">
        <h1 className="text-2xl">
          <Link to="/">Home</Link>
        </h1>
        <h1 className="text-2xl">
          <Link to="/login">Login</Link>
        </h1>
        <h1 className="text-2xl">
          <Link to="/signup">Sign Up</Link>
        </h1>
      </div>
    </nav>
  );
}
