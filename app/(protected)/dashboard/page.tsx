"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import HorizontalSection from "@/components/dashboard/HorizontalSection";

import {
  upcomingEvents,
  cricketEvents,
  techEvents,
  onlineEvents,
} from "@/data/events";

interface UserProfile {
  username: string;
  email: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!userId || !token) {
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          `https://bookingevents.onrender.com/api/auth/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(res.data);

        // ✅ cache for reuse (navbar / modal)
        localStorage.setItem("Profile", JSON.stringify(res.data));
      } catch (err) {
        console.error("Failed to load dashboard profile", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-10">
        {/* Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-white shadow-lg">
          {loading ? (
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-3 h-3 bg-white rounded-full animate-bounce" />
            </div>
          ) : (
            <>
              <h2 className="text-xl sm:text-3xl font-bold mb-1">
                Welcome back, {user?.username || "User"} 👋
              </h2>
              <p className="text-indigo-100 text-sm sm:text-base">
                Discover, manage, and track your events effortlessly.
              </p>
            </>
          )}
        </div>

        {/* Sections */}
        <HorizontalSection title="🔥 Upcoming Events" items={upcomingEvents} />
        <HorizontalSection title="🏏 Cricketing Events" items={cricketEvents} />
        <HorizontalSection title="💻 Tech Events" items={techEvents} />
        <HorizontalSection title="🌐 Online Events" items={onlineEvents} />
      </main>
    </div>
  );
}
