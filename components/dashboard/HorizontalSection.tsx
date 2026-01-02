import { EventCard } from "@/types/event";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  items: EventCard[];
}

export default function HorizontalSection({ title, items }: Props) {
  const router = useRouter();
  return (
    <section className="space-y-3">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
        {title}
      </h3>

      {/* Horizontal scroll – mobile safe */}
      <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide">
        {items.map((item, index) => (
          <div
            key={index}
            className="
              flex-shrink-0
              w-[85%]
              sm:w-[45%]
              md:w-[320px]
              bg-white rounded-2xl shadow
              hover:shadow-lg transition
            "
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-36 sm:h-40 w-full object-cover rounded-t-2xl"
            />

            <div className="p-4">
              <h4 className="font-semibold text-black text-base sm:text-lg line-clamp-1">
                {item.title}
              </h4>

              {item.date && (
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  {item.date}
                  {item.location && ` • ${item.location}`}
                </p>
              )}

              <button  onClick={() => router.push(`/events/${item.id}`)} className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-xl text-sm font-medium">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
