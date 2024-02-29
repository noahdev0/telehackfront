"use client";
import React, { useState } from "react";
import axios from "axios";
import Navbar from "@/components/shared/Navbar";
import { useAppDispatch } from "@/lib/hooks/reduxHooks";
import { loginUser, userdata } from "@/lib/reducers/userReducer";
import MaxWidthWraper from "@/components/shared/MaxWidthWrapper";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/user/auth", { email, password });
      const { role, user } = response.data;
      dispatch(userdata(response.data));
      dispatch(loginUser(user));
      // Handle successful login
    } catch (e: any) {
      console.error(e.message);
      setError(e.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Navbar />
      <MaxWidthWraper >
        <div className="sm:w-1/3 mx-auto">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-blue-500 text-white py-2 rounded"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </MaxWidthWraper>
    </div>
  );
};

export default LoginPage;
