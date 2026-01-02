// import Image from "next/image";
import Link from "next/link";
import { upcomingEvents, cricketEvents, techEvents, onlineEvents } from "@/data/events";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EventDetailsPage({ params }: Props) {
  const { id } = await params;

  // Combine all events
  const allEvents = [
    ...upcomingEvents,
    ...cricketEvents,
    ...techEvents,
    ...onlineEvents,
  ];

  const event = allEvents.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Event not found 😕
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[45vh] w-full">
    <img
      src={event.image}
      alt={event.title}
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />


        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Back Button */}
        <Link
          href="/dashboard"
          className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-sm text-black font-medium shadow hover:bg-white transition"
        >
          ← Back
        </Link>

        {/* Title */}
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">
            {event.title}
          </h1>

          {event.date && (
            <p className="text-sm sm:text-base text-gray-200">
              {event.date}
              {event.location && ` • ${event.location}`}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <InfoCard title="📍 Location" value={event.location || "Online"} />
          <InfoCard title="📅 Date" value={event.date || "To be announced"} />
          <InfoCard title="🎟 Tickets" value="Available" />
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg text-black font-semibold mb-2">About this event</h2>
          <p className="text-gray-600 leading-relaxed">
            Experience an amazing event packed with excitement, learning, and
            unforgettable moments. Join fellow enthusiasts and be part of
            something special. Seats are limited — book now!
          </p>
        </div>

        {/* Action */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-lg font-semibold">
            Ready to book your ticket?
          </p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition">
            Book Now
          </button>
        </div>
      </main>
    </div>
  );
}

/* ---------------- Components ---------------- */

function InfoCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 text-center">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="font-semibold text-gray-800 mt-1">{value}</p>
    </div>
  );
}
