"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    const token = localStorage.getItem("adminToken");

    if (!isAdmin || !token) {
      router.push("/admin/password");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-indigo-600">
        Admin Dashboard
      </h1>

      <p className="mt-2 text-gray-600">
        Welcome Admin 👋
      </p>

      {/* Future admin cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl shadow">
          Total Events
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          Total Bookings
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          Users
        </div>
      </div>
    </div>
  );
}
