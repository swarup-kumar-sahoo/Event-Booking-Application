"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      const res = await axios.post(
        "https://bookingevents.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      // ✅ Save admin auth
      localStorage.setItem("adminToken", res.data.token);
      localStorage.setItem("isAdmin", "true");

      router.push("/admin");
    } catch (err: any) {
      setError("Invalid admin credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl p-8">
      {/* Logo */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-black tracking-wide">
          Evnt<span className="text-blue-700">.</span>
        </h1>
        <p className="text-blue-500 text-sm mt-1">
          Smart Event Booking Platform
        </p>
      </div>
        <h1 className="text-2xl font-bold text-center text-black">
          Admin Login
        </h1>
        <p className="text-sm text-center text-gray-500 mb-6">
          Secure admin access
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center mb-3">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border text-black rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border text-black rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />

          <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-lg text-white font-semibold transition flex items-center justify-center
            ${loading ? "bg-indigo-500 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}
          `}
        >
          {loading ? (
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            "Login"
          )}
        </button>

        </form>
      </div>
    </div>
  );
}
