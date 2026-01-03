"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AdminSidebar({ open, onClose }: Props) {
  const router = useRouter();

  const logout = () => {
    localStorage.clear();
    router.push("/admin/admin123");
  };

  return (
    <>
      {/* Overlay (mobile) */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
     <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-xl z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
        >

        {/* Logo */}
        <div className="p-6 text-2xl font-extrabold text-indigo-600 border-b">
          Evnt<span className="text-purple-600">.</span>
          <p className="text-xs text-gray-400 mt-1">Admin Panel</p>
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-2 text-gray-700 font-medium">
          <SidebarLink href="/admin" label="📊 Dashboard" />
          <SidebarLink href="/admin/events" label="🎫 View All Events" />
          <SidebarLink href="/admin/create" label="➕ Create Event" />
          <SidebarLink href="/admin/sales" label="💰 Sales Report" />
          <SidebarLink href="/admin/users" label="👥 Users" />

          <button
            onClick={logout}
            className="w-full text-left px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition"
          >
            🚪 Logout
          </button>
        </nav>
      </aside>
    </>
  );
}

function SidebarLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition"
    >
      {label}
    </Link>
  );
}
