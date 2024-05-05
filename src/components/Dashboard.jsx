import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Student from "./Student";
import Teacher from "./Teacher";
import FaceRecognition from "./FaceRecognition";

function Dashboard({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <>
      <div className="grid grid-cols-3 h-screen ">
        <div className="col-span-1 flex h-screen">
          <div
            className={`bg-slate-600 text-white md:w-80 w-full p-4 left-0 absolute h-screen ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform`}
          >
            <button
              className="mb-4 text-white p-2 bg-red-500 rounded-md"
              onClick={closeSidebar}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul>
              <li>
                <Link
                  to="/student"
                  className="block py-2 px-4 hover:bg-gray-700 rounded-md"
                >
                  Student Attendence
                </Link>
              </li>
              <li>
                <Link
                  to="/teacher"
                  className="block py-2 px-4 hover:bg-gray-700 rounded-md"
                >
                  Teacher Attendence
                </Link>
              </li>
              <li>
                <Link
                  to="/faceRecognition"
                  className="block py-2 px-4 hover:bg-gray-700 rounded-md"
                >
                  Face Recognition
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button
              className="p-2 bg-gray-800 text-white rounded-md focus:outline-none"
              onClick={toggleSidebar}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-center p-4 m-8 rounded-md border shadow-xl ">
          <Routes>
            <Route path="/student" element={<Student />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/faceRecognition" element={<FaceRecognition />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
