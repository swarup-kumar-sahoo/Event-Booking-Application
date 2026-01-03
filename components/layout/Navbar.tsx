"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import ProfileModal from "@/components/profile/ProfileModal";

interface UserProfile {
  username: string;
  email: string;
}

export default function Navbar() {
  const [openProfile, setOpenProfile] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(null);

   useEffect(() => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!userId || !token) return;

    const fetchUser = async () => {
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
      } catch (err) {
        console.error("Failed to load navbar user", err);
      }
    };

    fetchUser();
  }, []);

  

  return (
    <>
      <header className="sticky top-0 z-30 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/dashboard"
            className="text-2xl font-extrabold text-indigo-600"
          >
            Evnt<span className="text-purple-600">.</span>
          </Link>

          {/* Profile Avatar */}
          <button
            onClick={() => setOpenProfile(true)}
            className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold"
          >
            {user?.username?.[0] || "U"}
          </button>
        </div>
      </header>

      {/* Profile Modal */}
      <ProfileModal
        open={openProfile}
        onClose={() => setOpenProfile(false)}
      />
    </>
  );
}
