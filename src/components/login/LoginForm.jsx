"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
export default function LoginForm() {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.username !== "admin" || loginData.password !== "12345") {
      setErrorMessage("Invalid username or password");
      return;
    }
    console.log(loginData);
    router.push("/dashboard");
    setErrorMessage("");
    e.target.reset();
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <div className="w-full h-[100vh] flex items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="bg-bgSoft p-12 flex flex-col items-center justify-center gap-6 w-[500px] h-[500px]"
        >
          <h1 className="text-3xl font-bold">Login</h1>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={loginData.username}
            onChange={(e) =>
              setLoginData((prevData) => ({
                ...prevData,
                username: e.target.value,
              }))
            }
            required
            className="w-full p-7 border-2 border-solid border-[#2e374a] bg-bg text-text "
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData((prevData) => ({
                ...prevData,
                password: e.target.value,
              }))
            }
            required
            className="w-full p-7 border-2 border-solid border-[#2e374a] bg-bg text-text"
          />
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button className="bg-btn text-text w-full p-7 rounded-md ">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
