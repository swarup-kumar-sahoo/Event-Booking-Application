"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import AdminProfileModal from "../profile/AdminProfileModal";

interface Props {
  onMenuClick: () => void;
}
interface UserProfile {
  username: string;
  email: string;
}

export default function AdminTopbar({ onMenuClick }: Props) {
  const [openProfile, setOpenProfile] = useState(false);
    const [user, setUser] = useState<UserProfile | null>(null);
  
   useEffect(() => {
    const userId = localStorage.getItem("adminId");
    const token = localStorage.getItem("adminToken");

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
    <header className="sticky top-0 z-20 bg-white border-b px-4 py-4 flex items-center justify-between md:justify-end">
      {/* Hamburger (mobile) */}
      <button
        onClick={onMenuClick}
        className="md:hidden text-2xl text-gray-700"
      >
        ☰
      </button>

      {/* Admin Info */}
      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-semibold text-gray-800">
            Admin
          </p>
          <p className="text-xs text-gray-500">
            Super Administrator
          </p>
        </div>
         <button
            onClick={() => setOpenProfile(true)}
            className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold"
          >
            {user?.username?.[0] || "U"}
          </button>
         {/* Profile Modal */}
              <AdminProfileModal
                open={openProfile}
                onClose={() => setOpenProfile(false)}
              />
      </div>
    </header>
  );
}
