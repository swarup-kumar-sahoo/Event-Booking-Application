"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";

export default function AdminDashboard() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    const token = localStorage.getItem("adminToken");

    if (!isAdmin || !token) {
      router.push("/admin/password");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="md:pl-64 flex flex-col min-h-screen">
        <AdminTopbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-6">
          <h1 className="text-3xl font-bold text-indigo-600">
            Admin Dashboard
          </h1>
          <p className="mt-1 text-gray-600">
            Welcome back 👋
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <StatCard title="Total Events" value="42" />
            <StatCard title="Total Bookings" value="1,248" />
            <StatCard title="Total Revenue" value="₹3.2L" />
            <StatCard title="Users" value="682" />
          </div>

          {/* Placeholder Section */}
          <div className="bg-white rounded-2xl shadow mt-10 p-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Activity
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Admin insights and reports will appear here.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-gray-800 mt-2">
        {value}
      </p>
    </div>
  );
}
