"use client";

import HorizontalSection from "@/components/dashboard/HorizontalSection";

import {
  upcomingEvents,
  cricketEvents,
  techEvents,
  onlineEvents,
} from "@/data/events";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Page Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-10">
        {/* Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-white shadow-lg">
          <h2 className="text-xl sm:text-3xl font-bold mb-1">
            Welcome back, Swarup 👋
          </h2>
          <p className="text-indigo-100 text-sm sm:text-base">
            Discover, manage, and track your events effortlessly.
          </p>
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
