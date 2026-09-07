import { useState } from "react";
import { localToday, wa } from "@/lib/booking";

export function BookingEnquiry() {
  const [arrival, setArrival] = useState("");
  const [error, setError] = useState("");
  return (
    <section
      id="booking"
      className="mx-auto mt-12 max-w-5xl border border-border bg-card p-6 shadow-sm sm:p-10 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-10"
      aria-labelledby="booking-title"
    >
      <div>
        <p className="eyebrow">Bed & breakfast</p>
        <h3 id="booking-title" className="mt-3 font-display text-3xl font-semibold md:text-4xl">
          Plan your stay
        </h3>
        <p className="mt-4 max-w-lg leading-7 text-muted-foreground">
          Check the confirmed nightly rates, then send your dates and preferences directly to the
          Limon Ranch team.
        </p>
        <div className="my-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <p className="border-l-2 border-accent bg-ranch-wash p-5">
            <span className="text-sm font-semibold text-muted-foreground">Single occupancy</span>
            <strong className="mt-1 block font-display text-2xl text-foreground">
              KSh 3,500 <span className="font-sans text-sm font-medium">per night</span>
            </strong>
          </p>
          <p className="border-l-2 border-accent bg-ranch-wash p-5">
            <span className="text-sm font-semibold text-muted-foreground">Two guests sharing</span>
            <strong className="mt-1 block font-display text-2xl text-foreground">
              KSh 4,500 <span className="font-sans text-sm font-medium">per night</span>
            </strong>
          </p>
        </div>
        <p className="mb-7 text-sm leading-7 text-muted-foreground lg:mb-0">
          Breakfast is included. For families, groups or camping, ask the team for a quote and
          suitable arrangements.
        </p>
      </div>
      <form
        className="grid gap-5 border-t border-border pt-7 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
        onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          const start = String(data.get("arrival"));
          const end = String(data.get("departure"));
          if (start < localToday() || end <= start) {
            setError(
              "Choose an arrival date from today onwards and a departure date after arrival.",
            );
            return;
          }
          setError("");
          const message = `Hello Limon Ranch, I'd like to enquire about a bed-and-breakfast stay.\n\nName: ${String(data.get("name")).trim()}\nArrival: ${start}\nDeparture: ${end}\nGuests: ${data.get("guests")}\nRoom preference: ${data.get("preference")}\nOther requests / children's ages: ${String(data.get("notes")).trim() || "None specified"}\n\nPlease confirm availability, room arrangements, the total price and booking terms.`;
          window.location.assign(wa(message));
        }}
      >
        <label className="booking-label sm:col-span-2">
          Your name
          <input name="name" autoComplete="name" required maxLength={100} pattern=".*\S.*" />
        </label>
        <label className="booking-label">
          Arrival
          <input
            name="arrival"
            type="date"
            required
            min={localToday()}
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
          />
        </label>
        <label className="booking-label">
          Departure
          <input name="departure" type="date" required min={arrival || localToday()} />
        </label>
        <label className="booking-label">
          Number of guests
          <input name="guests" type="number" required min={1} step={1} defaultValue={2} />
        </label>
        <label className="booking-label">
          Room preference
          <select name="preference" defaultValue="Two guests sharing">
            <option>Single occupancy</option>
            <option>Two guests sharing</option>
            <option>Family / group — please advise</option>
            <option>No preference — please advise</option>
          </select>
        </label>
        <label className="booking-label sm:col-span-2">
          Other requests (optional)
          <textarea
            name="notes"
            rows={3}
            maxLength={1500}
            placeholder="Children’s ages, meal preferences, accessibility needs or room requests"
          />
        </label>
        {error && (
          <p role="alert" className="text-red-800 sm:col-span-2">
            {error}
          </p>
        )}
        <p className="text-sm leading-6 text-muted-foreground sm:col-span-2">
          This opens a WhatsApp draft for you to review and send. Your booking is confirmed only
          when the ranch team confirms it. Ask about check-in, cancellation and any additional
          charges before booking.
        </p>
        <button
          type="submit"
          className="min-h-12 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors duration-200 hover:bg-primary-hover sm:col-span-2"
        >
          Continue on WhatsApp
        </button>
      </form>
    </section>
  );
}
