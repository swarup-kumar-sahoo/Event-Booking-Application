"use client";

import { useState } from "react";
import axios, { AxiosError } from "axios";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await axios.post(
        "https://bookingevents.onrender.com/api/auth/register",
        { username, email, password }
      );

      console.log("Register success:", res.data);
      setSuccess("🎉 Account created successfully! You can now login.");

      // Optional: clear form
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err: unknown) {
      console.error("Register error:", err);

      if (err instanceof AxiosError) {
        setError(err.response?.data?.message || "Registration failed");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-700 to-indigo-600 px-4">

      {/* Logo */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-white tracking-wide">
          Evnt<span className="text-black">.</span>
        </h1>
        <p className="text-indigo-200 text-sm mt-1">
          Smart Event Booking Platform
        </p>
      </div>

      {/* Card */}
      <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-black">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full border p-3 text-black rounded-lg"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full border p-3 text-black rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 text-black rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          {/* Success */}
          {success && (
            <p className="text-green-600 text-sm text-center font-semibold">
              {success}
            </p>
          )}

          {/* Button with Spinner */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-lg font-semibold transition
              ${loading ? "opacity-80 cursor-not-allowed" : "hover:bg-indigo-700"}
            `}
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              "Register"
            )}
          </button>
        </form>

        <p className="text-center text-black text-sm mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
