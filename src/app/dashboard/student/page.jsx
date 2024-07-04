"use client";
import React, { useState } from "react";
import { studentData } from "@/components/json/table";
import Image from "next/image";
import Profile from "../../../assets/profile.jpg";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddStudent from "../../../components/student/AddStudent";
export default function Student() {
  const [data1, setData1] = useState(studentData);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="w-[90%] mx-auto">
      <div className="w-[95%] mx-auto my-2 flex flex-row items-center justify-between">
        <p className=" text-[#96a2b4] font-semibold text-xl">All Student</p>
        <button
          className="bg-[#2e373e] text-[#96a2b4] text-[0.875rem] p-2 rounded-md"
          onClick={openModal}
        >
          Add Student
        </button>
        <AddStudent modalIsOpen={modalIsOpen} closeModal={closeModal} />
      </div>
      <table className="bg-[#1a202e] w-[95%] mx-auto">
        <thead>
          <tr>
            <th className="p-[10px] border border-b-[1px] border-t-[1px] border-solid border-[#2a3040]  border-l-1 border-r-0 text-center text-sm text-[#96a2b4] font-semibold">
              Image
            </th>
            <th className="p-[10px] border border-b-[1px] border-t-[1px] border-solid border-[#2a3040]  border-l-1 border-r-0 text-center text-sm text-[#96a2b4] font-semibold">
              Roll No
            </th>
            <th className="p-[10px] border border-b-[1px] border-t-[1px] border-solid border-[#2a3040]  border-l-1 border-r-0 text-center text-sm text-[#96a2b4] font-semibold">
              Name
            </th>
            <th className="p-[10px] border border-b-[1px] border-t-[1px] border-solid border-[#2a3040]  border-l-1 border-r-0 text-center text-sm text-[#96a2b4] font-semibold">
              Department
            </th>
            <th className="p-[10px] border border-b-[1px] border-t-[1px] border-solid border-[#2a3040]  border-l-1 border-r-0 text-center text-sm text-[#96a2b4] font-semibold">
              Gender
            </th>
            <th className="p-[10px] border border-b-[1px] border-t-[1px] border-solid border-[#2a3040]  border-l-1 border-r-0 text-center text-sm text-[#96a2b4] font-semibold">
              Mobile
            </th>
            <th className="p-[10px] border border-b-[1px] border-t-[1px] border-solid border-[#2a3040]  border-l-1 border-r-0 text-center text-sm text-[#96a2b4] font-semibold">
              Email
            </th>
            <th className="p-[10px] border border-b-[1px] border-t-[1px] border-solid border-[#2a3040]  border-l-1 border-r-0 text-center text-sm text-[#96a2b4] font-semibold">
              Admission Date
            </th>
            <th className="p-[10px] border border-b-[1px] border-t-[1px] border-solid border-[#2a3040]  border-l-1 border-r-0 text-center text-sm text-[#96a2b4] font-semibold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data1.map((item, index) => {
            return (
              <tr key={index}>
                <td className="p-[10px] border border-b-[1px] border-t-[1px] border-solid border-[#2a3040]  border-l-1 border-r-0 text-[#96a2b4] text-center text-sm">
                  <Image
                    src={Profile}
                    alt="profile"
                    width={25}
                    height={25}
                    className="rounded-[1rem]"
                  />
                </td>
                <td className="p-[10px] border border-b-[1px] border-t-[1px] border-solid border-[#2a3040]  border-l-1 border-r-0 text-[#96a2b4] text-center text-sm">
                  {item.rollNo}
                </td>
                <td className="p-[10px] border border-b-[1px] border-t-[1px] border-solid border-[#2a3040]  border-l-1 border-r-0 text-[#96a2b4] text-center text-sm">
                  {item.name}
                </td>
                <td className="p-[10px] border border-b-[1px] border-t-[1px] border-solid border-[#2a3040]  border-l-1 border-r-0  text-[#96a2b4] text-center text-sm">
                  {item.department}
                </td>
                <td className="p-[10px] border border-b-[1px] border-t-[1px] border-solid border-[#2a3040]  border-l-1 border-r-0 text-[#96a2b4] text-center text-sm">
                  {item.gender}
                </td>
                <td className="p-[10px] border border-b-[1px] border-t-[1px] border-solid border-[#2a3040]  border-l-1 border-r-0 text-[#96a2b4] text-center text-sm">
                  {item.mobileNo}
                </td>
                <td className="p-[10px] border border-b-[1px] border-t-[1px] border-solid border-[#2a3040]  border-l-1 border-r-0 text-[#96a2b4] text-center text-sm">
                  {item.emailId}
                </td>
                <td className="p-[10px] border border-b-[1px] border-t-[1px] border-solid border-[#2a3040]  border-l-1 border-r-0 text-[#96a2b4] text-center text-sm ">
                  {item.admissionDate}
                </td>
                <td className="p-[10px] border border-b-[1px] border-t-[1px] border-solid border-[#2a3040]  border-l-1 border-r-0 text-[#96a2b4]">
                  <div className="flex flex-row gap-3 items-center">
                    <FaRegEdit size={20} color="#005cbb" />
                    <RiDeleteBin6Line size={20} color="#dc3545" />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
