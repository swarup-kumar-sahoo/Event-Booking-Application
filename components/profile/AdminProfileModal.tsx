"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProfileModalProps {
  open: boolean;
  onClose: () => void;
}

interface UserProfile {
  username: string;
  email: string;
}

export default function AdminProfileModal({ open, onClose }: ProfileModalProps) {
  const router = useRouter();

  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);

  const userId =
    typeof window !== "undefined"
      ? localStorage.getItem("adminId")
      : null;

  useEffect(() => {
    if (!open || !userId) return;

    const fetchProfile = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          `https://bookingevents.onrender.com/api/auth/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
            },
          }
        );

        setUser(res.data);
      } catch (error) {
        console.error("Failed to load profile", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [open, userId]);

  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl p-6 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        {/* Avatar */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-indigo-600 text-white flex items-center justify-center text-3xl font-bold">
            {user?.username?.[0] || "U"}
          </div>
        </div>

        {/* Info */}
        <div className="text-center mt-4">
          {loading ? (
            <div className="flex justify-center gap-2 mt-2">
            <span className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" />
            </div>

          ) : (
            <>
              <h2 className="text-xl font-semibold text-black">
                {user?.username}
              </h2>
              <p className="text-black text-sm">
                {user?.email}
              </p>
            </>
          )}
        </div>

        {/* Actions */}
        <div className="mt-6 space-y-2">
          <Link
            href="/dashboard/bookings"
            onClick={onClose}
            className="block w-full text-center py-2 rounded-lg text-black bg-gray-100 hover:bg-gray-200 transition"
          >
            My Bookings
          </Link>

          <Link
            href="/dashboard/settings"
            onClick={onClose}
            className="block w-full text-center py-2 rounded-lg text-black bg-gray-100 hover:bg-gray-200 transition"
          >
            Account Settings
          </Link>

          <button
            onClick={handleLogout}
            className="w-full py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
