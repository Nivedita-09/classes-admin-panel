"use client";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Image from "next/image";
import Profile from "../../assets/profile.jpg";
import { RxCross1 } from "react-icons/rx";
import { PiStudentLight } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { useRouter } from "next/navigation";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust as needed
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#1a202e",
    border: "none",
  },
};

const initialStudentInfo = {
  name: "",
  rollNo: "",
  class: "",
  phone: "",
  email: "",
  dob: "",
  profileImage: "",
};

const initialErrors = {
  name: false,
  rollNo: false,
  class: false,
};

export default function AddStudent({ modalIsOpen, closeModal }) {
  const [studentInfo, setStudentInfo] = useState(initialStudentInfo);
  const [errors, setErrors] = useState(initialErrors);
  const [selectedFile, setSelectedFile] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const savedStudentInfo = localStorage.getItem("studentInfo");
    if (savedStudentInfo) {
      setStudentInfo(JSON.parse(savedStudentInfo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("studentInfo", JSON.stringify(studentInfo));
  }, [studentInfo]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]); // Set the selected file
    setStudentInfo({ ...studentInfo, profileImage: e.target.files[0].name });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    let formValid = true;
    const newErrors = { ...initialErrors };

    if (!studentInfo.name.trim()) {
      newErrors.name = true;
      formValid = false;
    }
    if (!studentInfo.rollNo.trim()) {
      newErrors.rollNo = true;
      formValid = false;
    }
    if (!studentInfo.class.trim()) {
      newErrors.class = true;
      formValid = false;
    }

    setErrors(newErrors);

    if (formValid) {
      console.log(studentInfo);
      closeModal();
      router.push("/dashboard/student");
    }
  };

  const handleCloseModal = () => {
    setStudentInfo(initialStudentInfo);
    setSelectedFile(null);
    setErrors(initialErrors);
    closeModal();
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row items-center gap-2 w-full">
            <Image
              src={Profile}
              alt="profile"
              width={30}
              height={30}
              className="border rounded-full"
            />
            <label className="text-[#96a2b4] font-semibold text-lg">
              New Student
            </label>
          </div>
          <RxCross1 size={20} onClick={handleCloseModal} color="#96a2b4" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="w-full grid grid-cols-2 gap-5 my-6">
            <div className="border border-[#96a2b4] rounded flex flex-row items-center">
              <input
                placeholder="Roll No*"
                type="text"
                value={studentInfo.rollNo}
                onChange={(e) => {
                  setStudentInfo({ ...studentInfo, rollNo: e.target.value });
                }}
                className={`w-full p-2 bg-inherit outline-none ${
                  errors.rollNo ? "border-red-500" : ""
                }`}
              />
              <PiStudentLight size={30} color="#96a2b4" />
            </div>
            <div className="border border-[#96a2b4] rounded flex flex-row items-center">
              <input
                placeholder="Name"
                type="text"
                value={studentInfo.name}
                onChange={(e) => {
                  setStudentInfo({ ...studentInfo, name: e.target.value });
                }}
                className={`w-full p-2 bg-inherit outline-none ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              <PiStudentLight size={30} color="#96a2b4" />
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-5 my-6">
            <select
              className={`w-full p-2 bg-inherit border-[#96a2b4] border rounded text-[#96a2b4] outline-none ${
                errors.class ? "border-red-500" : ""
              }`}
              onChange={(e) =>
                setStudentInfo({ ...studentInfo, class: e.target.value })
              }
            >
              <option className="text-[#96a2b4] p-1 bg-[#1a202e]">
                Select Department
              </option>
              <option className="text-[#96a2b4] p-1 bg-[#1a202e]">
                Physics
              </option>
              <option className="text-[#96a2b4] p-1 bg-[#1a202e]">
                Mathematics
              </option>
              <option className="text-[#96a2b4] p-1 bg-[#1a202e]">
                Chemistry
              </option>
              <option className="text-[#96a2b4] p-1 bg-[#1a202e]">
                Biology
              </option>
              <option className="text-[#96a2b4] p-1 bg-[#1a202e]">
                Computer Science
              </option>
            </select>

            <select
              className="w-full p-2 bg-inherit border-[#96a2b4] border rounded text-[#96a2b4] outline-none"
              onChange={(e) =>
                setStudentInfo({ ...studentInfo, gender: e.target.value })
              }
            >
              <option className="text-[#96a2b4] p-1 bg-[#1a202e]">
                Select Gender
              </option>
              <option className="text-[#96a2b4] p-1 bg-[#1a202e]">Male</option>
              <option className="text-[#96a2b4] p-1 bg-[#1a202e]">
                Female
              </option>
              <option className="text-[#96a2b4] p-1 bg-[#1a202e]">
                Others
              </option>
            </select>
          </div>
          <div className="w-full grid grid-cols-2 gap-5 my-6">
            <div className="border border-[#96a2b4] rounded flex flex-row items-center px-1">
              <input
                placeholder="Mobile"
                type="text"
                value={studentInfo.phone}
                onChange={(e) => {
                  setStudentInfo({ ...studentInfo, phone: e.target.value });
                }}
                className="w-full p-2 bg-inherit outline-none"
              />
              <FaPhoneAlt size={20} color="#96a2b4" />
            </div>
            <div className="border border-[#96a2b4] rounded flex flex-row items-center px-1">
              <input
                placeholder="Email"
                type="text"
                value={studentInfo.email}
                onChange={(e) => {
                  setStudentInfo({ ...studentInfo, email: e.target.value });
                }}
                className="w-full p-2 bg-inherit outline-none"
              />
              <MdOutlineEmail size={25} color="#96a2b4" />
            </div>
          </div>
          <div className="w-full grid grid-cols-2 gap-5 my-6">
            <div className="border border-[#96a2b4] rounded flex flex-row items-center px-1">
              <input
                placeholder="Joining Date"
                type="date"
                value={studentInfo.dob}
                onChange={(e) => {
                  setStudentInfo({ ...studentInfo, dob: e.target.value });
                }}
                className="w-full p-2 bg-inherit outline-none"
              />
              <BsCalendarDate size={20} color="#96a2b4" />
            </div>
            <div className="border border-[#96a2b4] rounded flex flex-row items-center px-1">
              <label className="w-full p-2 bg-inherit outline-none text-[#96a2b4]">
                {selectedFile ? selectedFile.name : "No file chosen"}
                <input
                  type="file"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </label>
            </div>
          </div>
          <div className="w-full flex flex-row justify-center gap-2">
            <button
              type="submit"
              className="bg-[#2adb88] text-white px-4 py-1 rounded-full"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-[#ff6a6a] text-white px-4 py-1 rounded-full"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
