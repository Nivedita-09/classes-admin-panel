"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { Sidebar } from "../../components/sidebar/Sidebar";
export default function Navbar({ onToggleSidebar }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  //   console.log(isSidebarOpen);
  // };
  return (
    <div className=" w-full   flex items-center justify-between bg-gradient-to-r from-[#1c212d] to-[#1a202e] p-2">
      <div className="title text-gray-700 font-bold capitalize flex items-center gap-2">
        {/* {pathname.split("/").pop()} */}
        <h3 className="text-white text-xl font-bold">Dashboard</h3>
        <FaBars className="text-white" onClick={onToggleSidebar} />
      </div>
      <div className="menu flex items-center gap-5">
        <div className="search border-2  flex items-center gap-2 p-2 rounded-lg  ">
          <IoSearch />
          <input
            type="text"
            placeholder="Search..."
            className="input bg-transparent border-none text-white outline-none placeholder:text-white"
          />
        </div>
        <div className="icons flex gap-5">
          <FaRegUserCircle />
          <IoMdNotificationsOutline />
        </div>
      </div>
      {isSidebarOpen && <Sidebar />}
    </div>
  );
}
