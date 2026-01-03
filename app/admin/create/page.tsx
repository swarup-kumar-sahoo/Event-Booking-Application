"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";

interface Gallery {
  galleryNo: string;
  totalSeats: string;
  availableSeats: string;
  price: string;
}

export default function AdminCreateEventPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔐 Admin Guard
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    const token = localStorage.getItem("adminToken");

    if (!isAdmin || !token) {
      router.push("/admin/admin123");
    }
  }, [router]);

  // 📦 Form State
  const [form, setForm] = useState({
    type: "",
    title: "",
    venue: "",
    city: "",
    date: "",
    status: "ACTIVE",
  });

const [galleries, setGalleries] = useState([
  {
    galleryNo: "",
    totalSeats: "",
    availableSeats: "",
    price: "",
  },
]);


  // 🧩 Gallery handlers
const addGallery = () => {
  setGalleries([
    ...galleries,
    {
      galleryNo: "",
      totalSeats: "",
      availableSeats: "",
      price: "",
    },
  ]);
};

const removeGallery = (index: number) => {
  setGalleries(galleries.filter((_, i) => i !== index));
};

const updateGallery = (
  index: number,
  field: keyof (typeof galleries)[0],
  value: string | number
) => {
  const updated = [...galleries];
  updated[index] = { ...updated[index], [field]: value };
  setGalleries(updated);
};


  // 🚀 Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...form,
      date: new Date(form.date).toISOString(),
      galleries,
    };

    console.log("EVENT PAYLOAD 👉", payload);

    setTimeout(() => {
      setLoading(false);
      alert("Event created successfully 🎉");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="md:pl-64 flex flex-col min-h-screen">
        <AdminTopbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-indigo-600">
              Create New Event
            </h1>
            <p className="text-gray-600 mt-1">
              Create and configure event details & seating
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white max-w-5xl rounded-2xl shadow-lg p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Type */}
              <div>
                <label className="label">Event Type</label>
                <input
                  className="input"
                  placeholder="Eg:- Cricket T20 International"
                  value={form.type}
                  onChange={(e) =>
                    setForm({ ...form, type: e.target.value })
                  }
                  required
                />
              </div>

              {/* Title */}
              <div>
                <label className="label">Event Title</label>
                <input
                  className="input"
                  placeholder="Eg:- India vs Pakistan"
                  value={form.title}
                  onChange={(e) =>
                    setForm({ ...form, title: e.target.value })
                  }
                  required
                />
              </div>

              {/* Venue & City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label">Venue</label>
                  <input
                    className="input"
                    placeholder="Oval Stadium"
                    value={form.venue}
                    onChange={(e) =>
                      setForm({ ...form, venue: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="label">City</label>
                  <input
                    className="input"
                    placeholder="London"
                    value={form.city}
                    onChange={(e) =>
                      setForm({ ...form, city: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              {/* DateTime */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label">Event Date & Time</label>
                  <input
                    type="datetime-local"
                    className="input"
                    value={form.date}
                    onChange={(e) =>
                      setForm({ ...form, date: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="label">Status</label>
                  <select
                    className="input"
                    value={form.status}
                    onChange={(e) =>
                      setForm({ ...form, status: e.target.value })
                    }
                  >
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INACTIVE">INACTIVE</option>
                  </select>
                </div>
              </div>

              {/* Galleries */}
              <div>
                <h3 className="text-lg font-semibold text-indigo-700 mb-3">
                  Seating Galleries
                </h3>

                <div className="space-y-4">
                  {galleries.map((g, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-1 md:grid-cols-5 gap-3 bg-gray-50 p-4 rounded-xl border"
                    >
                      {/* Gallery Name */}
                      <input
                        type="text"
                        className="border rounded-lg px-3 py-2 text-black focus:ring-2 focus:ring-indigo-500 outline-none"
                        placeholder="Gallery Name"
                        value={g.galleryNo}
                        onChange={(e) =>
                          updateGallery(i, "galleryNo", e.target.value)
                        }
                        
                      />

                      {/* Total Seats */}
                      <input
                        type="number"
                        className="border rounded-lg px-3 py-2 text-black focus:ring-2 focus:ring-indigo-500 outline-none"
                        placeholder="Total Seats"
                        value={g.totalSeats}
                        onChange={(e) =>
                          updateGallery(i, "totalSeats", +e.target.value)
                        }
                        
                      />

                      {/* Available Seats */}
                      <input
                        type="number"
                        className="border rounded-lg px-3 py-2 text-black focus:ring-2 focus:ring-indigo-500 outline-none"
                        placeholder="Available Seats"
                        value={g.availableSeats}
                        onChange={(e) =>
                          updateGallery(i, "availableSeats", +e.target.value)
                        }
                        
                      />

                      {/* Price */}
                      <input
                        type="number"
                        className="border rounded-lg px-3 py-2 text-black focus:ring-2 focus:ring-indigo-500 outline-none"
                        placeholder="Price (₹)"
                        value={g.price}
                        onChange={(e) =>
                          updateGallery(i, "price", +e.target.value)
                        }
                        
                      />

                      {/* Remove Button */}
                      {galleries.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeGallery(i)}
                          className="text-red-600 font-semibold hover:underline"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={addGallery}
                  className="mt-4 text-indigo-600 font-semibold hover:underline"
                >
                  + Add Gallery
                </button>
              </div>


              {/* Submit */}
              <div className="flex gap-4 pt-4">
                <button
                  disabled={loading}
                  className="btn-primary"
                >
                  {loading ? (
                    <span className="loader" />
                  ) : (
                    "Create Event"
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => router.push("/admin")}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
