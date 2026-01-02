const menu = [
  "Dashboard",
  "My Events",
  "Create Event",
  "Bookings",
  "Attendees",
];

export default function Sidebar({
  open,
}: {
  open: boolean;
}) {
  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300
      ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
    >
      {/* Logo */}
      <div className="p-6 text-2xl font-bold text-indigo-600 border-b">
        Evnt
      </div>

      {/* Menu */}
      <nav className="px-4 py-4 space-y-2">
        {menu.map((item) => (
          <button
            key={item}
            className="w-full text-left p-3 rounded-xl text-gray-700 hover:bg-indigo-100 transition"
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}
