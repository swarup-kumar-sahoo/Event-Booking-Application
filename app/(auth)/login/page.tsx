"use client";

import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "https://bookingevents.onrender.com/api/auth/login",
        { email, password }
      );

    const { token, role, userId } = res.data;

    // ✅ Save auth data
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("userId", userId);

    console.log("Login success:", { token, role, userId });

      // ✅ Redirect to dashboard
      router.push("/dashboard");
    } catch (err: unknown) {
      console.error("Login error:", err);

      if (err instanceof AxiosError) {
        setError(err.response?.data?.message || "Login failed");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-black from-indigo-600 to-purple-700 px-4">

      {/* Logo */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-white tracking-wide">
          Evnt<span className="text-blue-700">.</span>
        </h1>
        <p className="text-indigo-200 text-sm mt-1">
          Smart Event Booking Platform
        </p>
      </div>

      {/* Card */}
      <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login<span className="text-indigo-600">.</span>
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

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
              "Login"
            )}
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-indigo-600 font-semibold">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
