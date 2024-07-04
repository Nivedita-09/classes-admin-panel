import React from "react";
import { IoHome } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

export default function Sidebar({ isOpen }) {
  const links = [
    { name: "Dashboard", href: "/dashboard", icon: <IoHome /> },
    { name: "Student", href: "/dashboard/student", icon: <PiStudentBold /> },
    { name: "Class", href: "/dashboard/class", icon: <FaGraduationCap /> },
    { name: "Report", href: "/dashboard/report", icon: <FaFileAlt /> },
  ];
  return (
    <div
      className={`bg-gray-800 h-screen w-[15vw] ${isOpen ? "block" : "hidden"}`}
    >
      <div className="flex flex-col justify-between">
        <nav className="flex-grow p-4">
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex flex-row gap-2 items-center text-white hover:text-gray-400 hover:bg-[##0006] "
                >
                  {link.icon}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
