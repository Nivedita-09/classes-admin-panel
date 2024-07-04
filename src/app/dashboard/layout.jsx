"use client";
import React, { useState } from "react";
import SidebarComp from "../../components/sidebar/Sidebar";
import NavbarComp from "@/components/navbar/Navbar";
const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="w-full">
      <NavbarComp onToggleSidebar={handleToggleSidebar} />
      <div className="flex flex-row">
        <div>
          <SidebarComp isOpen={isSidebarOpen} />
        </div>

        {children}
      </div>
    </div>
  );
};
export default Layout;
