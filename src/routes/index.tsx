import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  BedDouble,
  Building2,
  CalendarDays,
  CheckCircle2,
  Compass,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Utensils,
  Users,
  X,
} from "lucide-react";
import logo from "@/assets/logo-clean.png";
import footerLogo from "@/assets/logo-footer.png";
import ewasoLogo from "@/assets/ewaso-digital-logo.png";
import hero from "@/assets/property-exterior.jpg";
import atmosphericHero from "@/assets/hero.jpg";
import cottages from "@/assets/cottages.jpg";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import patio from "@/assets/patio.jpg";
import events from "@/assets/events.jpg";
import conference from "@/assets/conference.jpg";
import cottageGarden from "@/assets/cottage-garden.jpg";
import bar from "@/assets/bar.jpg";
import campingGround from "@/assets/camping-ground.jpg";
import playground from "@/assets/playground.jpg";
import lounge from "@/assets/lounge.jpg";
import conferenceExterior from "@/assets/conference-exterior.jpg";
import gamesLounge from "@/assets/games-lounge.jpg";
import foodPlatter from "@/assets/food-platter.jpg";
import eventsHall from "@/assets/events-hall.jpg";
import eventsHall2 from "@/assets/events-hall-2.jpg";
import buffet from "@/assets/buffet.jpg";
import milkshake from "@/assets/milkshake.jpg";
import chickenCurry from "@/assets/chicken-curry.jpg";
import lakeTurkanaFestival from "@/assets/lake-turkana-cultural-festival.jpg";
import limonGate from "@/assets/limon-ranch-gate.jpg";
import malasoEscarpment from "@/assets/malaso-escarpment-viewpoint.jpeg";
import camelDerby from "@/assets/maralal-camel-derby.jpg";
import ololokweMountain from "@/assets/ololokwe-mountain.jpg";
import samburuReserveGate from "@/assets/samburu-national-reserve-gate.jpg";
import sugutaValley from "@/assets/suguta-valley-view.jpg";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Home,
});

const WHATSAPP = "254722207384";
const DISPLAY_PHONE = "+254 722 207 384";
const FB_URL = "https://www.facebook.com/profile.php?id=100070965084168";
const IG_URL = "https://instagram.com/limon_ranch";
const TIKTOK_URL = "#contact";
const MAP_PLUS_CODE = "3MPH+GQM, Lpartuk";
const MAP_LOCATION = `${MAP_PLUS_CODE} - Maralal / Samburu County, Kenya`;
const MAP_URL = "https://maps.app.goo.gl/4Xm9Qb9EWECueuds5";
const EWASO_URL = "https://ewasodigital.co.ke";
const GOOGLE_REVIEWS_URL = "https://share.google/r7q9bAdSS66KR0NwQ";

const wa = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
const call = `tel:${DISPLAY_PHONE.replace(/\s/g, "")}`;

const nav = [
  { label: "Home", href: "#top" },
  { label: "Accommodation", href: "#accommodation" },
  { label: "Experiences", href: "#experiences" },
  { label: "Restaurant", href: "#restaurant" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const accommodations = [
  {
    title: "Cottages / Rooms",
    img: room1,
    icon: BedDouble,
    copy: "Comfortable rooms and cottages for guests who want a quiet Maralal retreat with warm, personal hospitality.",
  },
  {
    title: "Camping Grounds",
    img: campingGround,
    icon: Users,
    copy: "Outdoor grounds for simple stays, group time and quiet leisure within the landscaped ranch setting.",
  },
  {
    title: "Family & Group Stays",
    img: cottages,
    icon: Users,
    copy: "Flexible stays for families, friends and small groups looking for space to rest and reconnect.",
  },
  {
    title: "Event Accommodation",
    img: conferenceExterior,
    icon: CalendarDays,
    copy: "Convenient accommodation support for meetings, conferences, team retreats and private gatherings.",
  },
];

const experiences = [
  {
    title: "Restaurant & Bar",
    img: foodPlatter,
    icon: Utensils,
    copy: "Enjoy relaxed meals and warm service while staying, meeting or gathering at the ranch.",
  },
  {
    title: "Meetings & Conferences",
    img: conference,
    icon: Building2,
    copy: "Use the conference centre for focused meetings, team retreats and meaningful planning sessions.",
  },
  {
    title: "Private Getaways",
    img: playground,
    icon: CalendarDays,
    copy: "Plan a quiet stay for rest, reconnection and time away in a peaceful Maralal setting.",
  },
  {
    title: "Team Retreats",
    img: patio,
    icon: BedDouble,
    copy: "Bring your team together in a quiet setting with room to focus, reconnect and plan well.",
  },
  {
    title: "Camping & Outdoor Leisure",
    img: campingGround,
    icon: Compass,
    copy: "Enjoy outdoor space, fresh air and unhurried time around the landscaped ranch grounds.",
  },
  {
    title: "Planned Northern Kenya Excursions",
    img: atmosphericHero,
    icon: Compass,
    copy: "Discuss wildlife and regional excursions with the team so travel time, transport and budget are planned honestly in advance.",
  },
];

const northernExperiences = [
  {
    title: "Ololokwe Mountain",
    img: ololokweMountain,
    distance: "Regional Northern Kenya landmark and scenic reference point.",
    copy: "A striking Northern Kenya landmark and scenic regional reference point that gives wider Samburu journeys a strong sense of place.",
  },
  {
    title: "Maralal International Camel Derby",
    img: camelDerby,
    distance: "Within Maralal / short local drive from Limon Ranch, depending on the event venue.",
    copy: "A major seasonal Maralal event bringing together camel racing, culture, visitors and local energy. Guests staying at Limon Ranch during derby season can use the property as a calm base for rest, meals, meetings or private stays while enjoying the town's best-known annual event.",
  },
  {
    title: "Malaso Escarpment / World's End Viewpoint",
    img: malasoEscarpment,
    distance: "Approx. 25 to 40 km from Maralal, depending on the route and viewpoint used.",
    copy: "A dramatic viewpoint overlooking the escarpment and Northern Kenya landscapes. Best planned with local guidance, suitable transport and enough time for road conditions, photography and scenic stops.",
  },
  {
    title: "Suguta Valley View / Gateway Route",
    img: sugutaValley,
    distance: "Approx. 40 km or more from Maralal depending on the exact route or viewpoint.",
    copy: "A remote Northern Kenya adventure route known for wide views, rugged terrain and striking landscapes. Best treated as an extended scenic experience requiring advance planning, suitable transport and local guidance.",
  },
  {
    title: "Samburu National Reserve",
    img: samburuReserveGate,
    distance:
      "Approx. 150 to 200 km by road from Maralal / Limon Ranch depending on route and gate.",
    copy: "A possible wildlife excursion for guests with suitable travel arrangements planned in advance. It is not next door to Limon Ranch, so guests should discuss timing, road conditions, transport or flight options with the team before planning.",
  },
  {
    title: "Lake Turkana Cultural Festival",
    img: lakeTurkanaFestival,
    distance:
      "Approx. 250 to 300 km or more by road from Maralal depending on route and road conditions.",
    copy: "A vibrant cultural experience around Lake Turkana / Loiyangalani that celebrates Northern Kenya communities, music, dress, traditions and heritage. This is an extended Northern Kenya journey requiring early planning and suitable travel arrangements.",
  },
];

const trustPoints = [
  "Beautiful landscaped grounds",
  "Comfortable accommodation",
  "Conference centre for meetings and retreats",
  "Quiet setting for rest and connection",
  "Ideal for getaways, team retreats and private stays",
];

const galleryGroups = [
  {
    title: "Property & Grounds",
    copy: "Landscaped paths, gardens and the calm Maralal retreat setting.",
    items: [
      { src: hero, alt: "Limon Ranch exterior and landscaped grounds", className: "col-span-2" },
      { src: cottageGarden, alt: "Landscaped gardens at Limon Ranch" },
      { src: patio, alt: "Outdoor patio and grounds at Limon Ranch" },
      { src: limonGate, alt: "Limon Ranch property grounds and entrance", className: "col-span-2" },
    ],
  },
  {
    title: "Rooms & Accommodation",
    copy: "Comfortable rooms, cottages and relaxed spaces for private stays.",
    items: [
      { src: room1, alt: "Limon Ranch room" },
      { src: room2, alt: "Limon Ranch room with four-poster bed" },
      { src: cottages, alt: "Limon Ranch cottages", className: "col-span-2" },
      { src: lounge, alt: "Limon Ranch lounge" },
    ],
  },
  {
    title: "Food & Restaurant",
    copy: "Meals, drinks and restaurant moments for guests and groups.",
    items: [
      { src: foodPlatter, alt: "Restaurant platter at Limon Ranch", className: "col-span-2" },
      { src: buffet, alt: "Buffet setup at Limon Ranch" },
      { src: bar, alt: "Limon Ranch bar" },
      { src: chickenCurry, alt: "Chicken curry at Limon Ranch" },
      { src: milkshake, alt: "Milkshake at Limon Ranch" },
    ],
  },
  {
    title: "Events & Conference",
    copy: "Conference centre, event hall and practical gathering spaces.",
    items: [
      { src: conference, alt: "Limon Ranch conference setup", className: "col-span-2" },
      { src: conferenceExterior, alt: "Limon Ranch conference centre exterior" },
      { src: eventsHall, alt: "Event hall at Limon Ranch" },
      { src: eventsHall2, alt: "Event seating at Limon Ranch" },
    ],
  },
  {
    title: "Guest Moments / Outdoor Leisure",
    copy: "Outdoor areas and relaxed spaces for families, groups and retreats.",
    items: [
      { src: campingGround, alt: "Outdoor grounds at Limon Ranch", className: "col-span-2" },
      { src: playground, alt: "Outdoor family space at Limon Ranch" },
      { src: gamesLounge, alt: "Games lounge at Limon Ranch" },
    ],
  },
];

function Home() {
  useReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-[#b8ae9b]/70 bg-[#d9d0bd]/95 shadow-sm backdrop-blur-md"
            : "border-[#c8bea9]/70 bg-[#d9d0bd]/92"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:h-24 md:px-8 xl:px-10">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <img
              src={logo}
              alt="Limon Ranch"
              className="h-12 w-auto max-w-[170px] object-contain md:h-14 md:max-w-[200px]"
              width={200}
              height={144}
            />
          </a>

          <nav className="hidden items-center gap-6 text-[0.78rem] font-semibold uppercase tracking-wide text-[#695d4d] lg:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-[#b66f45]">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={wa("Hello Limon Ranch, I'd like to check availability.")}
              target="_blank"
              rel="noreferrer"
              className="hidden h-12 items-center justify-center rounded-md border-2 border-white px-6 font-display text-base font-semibold text-white shadow-sm transition-colors hover:bg-white hover:text-[#6d5f4d] md:inline-flex md:bg-[#806f59]"
            >
              Book Now
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#ad9f8b] text-[#493f32] lg:hidden"
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-[#c8bea9] bg-[#efe8dc] lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-5">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#d6cbbb] py-4 text-sm font-semibold uppercase tracking-wide text-[#574b3c]"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={wa("Hello Limon Ranch, I'd like to check availability.")}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#8c7155] px-5 text-xs font-semibold uppercase tracking-[0.18em] text-white"
              >
                <WhatsAppIcon className="h-4 w-4" /> Book Now
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="top" className="relative min-h-[88svh] overflow-hidden pt-20 md:pt-24">
          <img
            src={hero}
            alt="Limon Ranch peaceful Maralal retreat"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.68] saturate-[0.82] contrast-[0.96]"
            width={1920}
            height={1280}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/52" />
          <div className="relative z-10 mx-auto flex min-h-[calc(88svh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 md:min-h-[calc(88svh-6rem)] md:px-10 md:pb-20">
            <div className="reveal max-w-3xl text-white">
              <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.02] text-white sm:text-5xl md:text-7xl">
                Limon Ranch
              </h1>
              <p className="mt-4 font-display text-3xl text-[#e2c783] md:text-5xl">
                Stay. Gather. Unwind.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
                A peaceful retreat in Maralal with landscaped grounds, comfortable stays, and space
                for private getaways, meetings, and retreats.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={wa("Hello Limon Ranch, I'd like to book or ask availability.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c58a63] px-6 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#b1764e]"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Check Availability
                </a>
                <a
                  href="#accommodation"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white/70 px-6 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-[#e2c783] hover:text-[#e2c783]"
                >
                  View Stays
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5efe5] px-5 py-14 md:px-10">
          <div className="reveal mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.4fr] md:items-center">
            <div>
              <p className="eyebrow">Calm, Comfort and Connection</p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[#332b22] md:text-5xl">
                Experience calm, comfort and connection at Limon Ranch.
              </h2>
            </div>
            <div className="space-y-5 text-sm leading-8 text-[#625545] md:text-base">
              <p>
                Limon Ranch is a quiet Maralal retreat for guests who want space to rest, reconnect
                or plan something meaningful. The property brings together landscaped grounds,
                comfortable accommodation and warm hospitality in one peaceful setting.
              </p>
              <p>
                Come for a private getaway, a focused meeting, a team retreat or a simple stay away
                from the noise. WhatsApp remains the fastest way to ask availability and plan your
                visit.
              </p>
            </div>
          </div>
        </section>

        <section id="accommodation" className="section-pad bg-background">
          <SectionIntro
            eyebrow="Accommodation"
            title="Comfortable stays in Maralal."
            copy="Choose Limon Ranch for peaceful accommodation, private getaways, team retreats and stay support around meetings or conferences."
          />

          <div className="mx-auto mt-14 grid max-w-7xl gap-7 px-5 md:grid-cols-2 md:px-10 xl:grid-cols-4">
            {accommodations.map((card, i) => (
              <ImageCard key={card.title} {...card} delay={i * 90} />
            ))}
          </div>
          <div className="reveal mt-12 flex justify-center px-5 md:px-10">
            <a
              href={wa("Hello Limon Ranch, I'd like to ask availability for accommodation.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#8c7155] px-6 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#735c45]"
            >
              <WhatsAppIcon className="h-4 w-4" /> Ask Availability on WhatsApp
            </a>
          </div>
        </section>

        <section id="experiences" className="section-pad bg-[#efe5d6]">
          <SectionIntro
            eyebrow="At the Ranch"
            title="Space to rest, meet and reconnect."
            copy="Limon Ranch is built around calm grounds, comfortable stays, practical meeting space and the kind of quiet that helps guests breathe and focus."
          />

          <div className="mx-auto mt-14 grid max-w-7xl gap-7 px-5 sm:grid-cols-2 md:px-10 lg:grid-cols-3">
            {experiences.map((card, i) => (
              <ExperienceCard key={card.title} {...card} delay={i * 70} />
            ))}
          </div>
          <div className="reveal mt-12 flex justify-center px-5 md:px-10">
            <a
              href={wa("Hello Limon Ranch, I'd like to plan a stay, meeting or retreat.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#bba98f] px-6 text-xs font-bold uppercase tracking-[0.18em] text-[#5a4c3d] transition-colors hover:border-[#b1764e] hover:text-[#b1764e]"
            >
              <WhatsAppIcon className="h-4 w-4" /> Plan a Visit
            </a>
          </div>

          <div className="reveal mx-auto mt-20 max-w-7xl px-5 md:px-10">
            <div className="grid gap-8 border-t border-[#d5c8b7] pt-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
              <div>
                <p className="eyebrow">Northern Kenya Experiences</p>
                <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-[#332b22] md:text-4xl">
                  Plan regional experiences with clear travel expectations.
                </h3>
              </div>
              <div className="space-y-5 text-sm leading-8 text-[#625545] md:text-base">
                <p>
                  Northern Kenya is rich with culture, landscapes and wildlife experiences. Limon
                  Ranch offers a calm Maralal base for guests planning regional journeys, seasonal
                  events and extended excursions. Speak with the team about what is practical for
                  your dates, transport, road conditions and budget.
                </p>
                <p>
                  Wildlife and Northern Kenya excursions can be discussed with the Limon Ranch team,
                  including Samburu National Reserve visits where suitable travel arrangements are
                  planned in advance. Some extended experiences may require early planning, private
                  transport, or flight arrangements depending on itinerary and budget.
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8c7155]">
                  Distances are approximate and may vary depending on route, road conditions and
                  season.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {northernExperiences.map((item, index) => (
                <article
                  key={item.title}
                  className={`overflow-hidden border border-[#d5c8b7] bg-[#fbf7ef] ${
                    index === 0 ? "lg:col-span-3" : ""
                  }`}
                >
                  <div className={`relative overflow-hidden ${index === 0 ? "h-80" : "h-56"}`}>
                    <img
                      src={item.img}
                      alt={`${item.title} regional Northern Kenya experience`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-display text-2xl font-semibold text-[#332b22]">
                      {item.title}
                    </h4>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#a5633e]">
                      Estimated distance
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#625545]">{item.distance}</p>
                    <p className="mt-4 text-sm leading-7 text-[#625545]">{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="restaurant" className="section-pad bg-background">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:items-center md:px-10">
            <div className="reveal relative min-h-[440px] overflow-hidden">
              <img
                src={foodPlatter}
                alt="Limon Ranch restaurant food platter"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="reveal md:pl-8" style={{ transitionDelay: "120ms" }}>
              <p className="eyebrow">Restaurant & Bar</p>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-[#332b22] md:text-5xl">
                Meals, drinks and easy ranch hospitality.
              </h2>
              <span className="gold-rule mt-6" />
              <p className="mt-7 leading-8 text-[#625545]">
                The restaurant and bar support the wider retreat experience. Guests can plan a meal,
                gather between sessions, host a small celebration or add food and drinks to a
                meeting, retreat or private stay.
              </p>
              <a
                href={wa("Hello Limon Ranch, I'd like to ask about the restaurant and bar.")}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#8c7155] px-6 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#735c45]"
              >
                <WhatsAppIcon className="h-4 w-4" /> Ask About Restaurant
              </a>
            </div>
          </div>
        </section>

        <section id="events" className="section-pad bg-[#2b241d] text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-10">
            <div className="reveal">
              <p className="eyebrow text-[#e2c783]">Conference Centre</p>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight md:text-5xl">
                A quiet place for meetings and retreats.
              </h2>
              <span className="gold-rule mt-6 bg-[#e2c783]" />
              <p className="mt-7 leading-8 text-white/75">
                Limon Ranch offers a conference centre for meetings, team retreats and focused
                gatherings, supported by landscaped grounds, comfortable accommodation and direct
                planning over WhatsApp.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={wa("Hello Limon Ranch, I'd like to enquire about events or conferences.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c58a63] px-6 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#b1764e]"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Enquire Now
                </a>
                <a
                  href="#gallery"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white/40 px-6 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#e2c783] hover:text-[#e2c783]"
                >
                  View Gallery
                </a>
              </div>
            </div>
            <div className="reveal grid gap-4 sm:grid-cols-2" style={{ transitionDelay: "120ms" }}>
              <img
                src={events}
                alt="Limon Ranch event hall"
                loading="lazy"
                className="h-72 w-full object-cover sm:translate-y-8"
              />
              <img
                src={conference}
                alt="Limon Ranch conference setup"
                loading="lazy"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="section-pad bg-[#f7f1e8]">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="reveal grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
              <div>
                <p className="eyebrow">Why Guests Choose Limon Ranch</p>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-[#332b22] md:text-5xl">
                  A peaceful setting with practical comforts.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex gap-3 border-b border-[#d7cbbb] pb-4 text-[#5f5243]"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#b1764e]" />
                    <span className="leading-7">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative min-h-[540px] overflow-hidden bg-[#241f19]"
          aria-label="Limon Ranch landscaped retreat feature"
        >
          <img
            src={cottageGarden}
            alt="Limon Ranch landscaped grounds"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 mx-auto flex min-h-[540px] max-w-7xl items-end px-5 py-16 md:px-10">
            <div className="reveal max-w-2xl text-white">
              <p className="eyebrow text-[#e2c783]">Now Welcoming Guests</p>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight md:text-5xl">
                Your space to breathe, focus and feel at home.
              </h2>
              <p className="mt-6 leading-8 text-white/78">
                Whether you&apos;re here to relax, reconnect or plan something meaningful, Limon
                Ranch is your space to breathe, focus and feel at home.
              </p>
              <a
                href={wa("Hello Limon Ranch, I'd like to ask availability for a stay or retreat.")}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c58a63] px-6 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#b1764e]"
              >
                <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section id="gallery" className="section-pad bg-background">
          <SectionIntro
            eyebrow="Gallery"
            title="A look around Limon Ranch."
            copy="Browse the property in clear groups: grounds, rooms, restaurant moments, event spaces, regional inspiration and outdoor leisure."
          />

          <div className="mx-auto mt-14 grid max-w-7xl gap-12 px-5 md:px-10">
            {galleryGroups.map((group) => (
              <GalleryGroup key={group.title} {...group} />
            ))}
          </div>
        </section>

        <section className="bg-[#efe5d6] px-5 py-20 md:px-10">
          <div className="reveal mx-auto grid max-w-5xl gap-8 bg-[#fbf7ef] p-8 md:grid-cols-[0.8fr_1.2fr] md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c58a63] text-white">
              <Quote className="h-6 w-6" />
            </div>
            <div>
              <p className="eyebrow">Guest Feedback</p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[#332b22] md:text-4xl">
                Read our Google Reviews
              </h2>
              <p className="mt-5 leading-8 text-[#625545]">
                See what guests are saying about Limon Ranch on Google. We link directly to the
                public profile so feedback stays accurate and easy to verify.
              </p>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex h-12 items-center justify-center rounded-md border border-[#bba98f] px-6 text-xs font-bold uppercase tracking-[0.18em] text-[#5a4c3d] transition-colors hover:border-[#b1764e] hover:text-[#b1764e]"
              >
                Read our Google Reviews
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad bg-background">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-10">
            <div className="reveal">
              <p className="eyebrow">Contact</p>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-[#332b22] md:text-5xl">
                Ask availability directly.
              </h2>
              <p className="mt-7 leading-8 text-[#625545]">
                For accommodation, private getaways, meetings, conferences and team retreats,
                WhatsApp is the clearest way to reach the Limon Ranch team.
              </p>
              <div className="mt-8 space-y-4 text-[#514637]">
                <ContactLine icon={MessageCircle} label="WhatsApp" value={DISPLAY_PHONE} />
                <ContactLine icon={MapPin} label="Location" value={MAP_LOCATION} />
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={wa("Hello Limon Ranch, I'd like to plan a visit.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c58a63] px-6 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#b1764e]"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
                </a>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#bba98f] px-5 text-xs font-bold uppercase tracking-[0.18em] text-[#5a4c3d] transition-colors hover:border-[#b1764e] hover:text-[#b1764e]"
                >
                  <MapPin className="h-4 w-4" /> Get Directions
                </a>
                <Social href={wa("Hello Limon Ranch, I'd like to plan a visit.")} label="WhatsApp">
                  <WhatsAppIcon className="h-4 w-4" />
                </Social>
                <Social href={FB_URL} label="Facebook">
                  <Facebook className="h-4 w-4" />
                </Social>
                <Social href={IG_URL} label="Instagram">
                  <Instagram className="h-4 w-4" />
                </Social>
                <Social href={TIKTOK_URL} label="TikTok coming soon">
                  <TikTokIcon />
                </Social>
              </div>
            </div>

            <div className="reveal" style={{ transitionDelay: "120ms" }}>
              <div className="border border-[#d8c8b4] bg-[#fbf7ef] p-7 shadow-sm md:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a5633e]">
                  Location
                </p>
                <h3 className="mt-5 font-display text-3xl font-semibold text-[#332b22]">
                  {MAP_PLUS_CODE}
                </h3>
                <p className="mt-4 leading-8 text-[#625545]">
                  Use this plus code as the Limon Ranch map reference for directions to Lpartuk,
                  near Maralal in Samburu County, Kenya.
                </p>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#2b241d] px-5 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#5a4c3d]"
                >
                  <MapPin className="h-4 w-4" /> View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FloatingActions />
      <Footer />
    </div>
  );
}

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="reveal mx-auto max-w-3xl px-5 text-center md:px-10">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-[#332b22] md:text-5xl">
        {title}
      </h2>
      <span className="gold-rule mt-6" />
      <p className="mx-auto mt-7 max-w-2xl leading-8 text-[#625545]">{copy}</p>
    </div>
  );
}

function ImageCard({
  title,
  img,
  icon: Icon,
  copy,
  delay,
}: {
  title: string;
  img: string;
  icon: typeof BedDouble;
  copy: string;
  delay: number;
}) {
  return (
    <article
      className="reveal group bg-[#fbf7ef] shadow-sm"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-0 top-8 bg-[#2b241d] px-6 py-4 text-white">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="p-7">
        <h3 className="font-display text-2xl font-semibold text-[#332b22]">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-[#625545]">{copy}</p>
      </div>
    </article>
  );
}

function ExperienceCard({
  title,
  img,
  icon: Icon,
  copy,
  delay,
}: {
  title: string;
  img: string;
  icon: typeof Compass;
  copy: string;
  delay: number;
}) {
  return (
    <article
      className="reveal group overflow-hidden bg-[#fbf7ef]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#c58a63] text-white">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="p-7">
        <h3 className="font-display text-2xl font-semibold text-[#332b22]">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-[#625545]">{copy}</p>
      </div>
    </article>
  );
}

function GalleryGroup({
  title,
  copy,
  items,
}: {
  title: string;
  copy: string;
  items: { src: string; alt: string; className?: string }[];
}) {
  return (
    <section className="reveal">
      <div className="mb-5 flex flex-col gap-2 border-b border-[#d7cbbb] pb-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="font-display text-2xl font-semibold text-[#332b22]">{title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-[#625545]">{copy}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 [grid-auto-rows:150px] md:grid-cols-4 md:[grid-auto-rows:220px]">
        {items.length > 0 ? (
          items.map((item) => <GalleryItem key={`${title}-${item.alt}`} {...item} />)
        ) : (
          <div className="col-span-2 flex min-h-36 items-center border border-dashed border-[#cbbda8] bg-[#fbf7ef] p-6 text-sm leading-7 text-[#625545] md:col-span-4">
            Official reference images for this category can be added here once provided.
          </div>
        )}
      </div>
    </section>
  );
}

function GalleryItem({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#e9decd] ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
}

function ContactLine({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MessageCircle;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-1 h-5 w-5 shrink-0 text-[#b1764e]" />
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8c7155]">{label}</p>
        <p className="mt-1 font-medium">{value}</p>
      </div>
    </div>
  );
}

function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2 md:bottom-8 md:right-6">
      <a
        href={wa("Hello Limon Ranch, I'd like to check availability.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1fa855] text-white shadow-lg ring-2 ring-white/90 transition-transform hover:-translate-y-0.5 hover:bg-[#168a46]"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
      <a
        href={call}
        aria-label="Call Limon Ranch"
        className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#8c7155] text-white shadow-lg transition-transform hover:-translate-y-0.5"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.02 3.2A12.72 12.72 0 0 0 5.1 22.45L3.7 28.8l6.5-1.52a12.72 12.72 0 1 0 5.82-24.08Zm0 22.92a10.1 10.1 0 0 1-5.18-1.43l-.37-.22-3.84.9.82-3.75-.24-.39a10.12 10.12 0 1 1 8.81 4.89Zm5.55-7.58c-.3-.15-1.8-.89-2.08-.99-.28-.1-.48-.15-.68.15-.2.3-.78.99-.96 1.19-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.07 2.87 1.22 3.06.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.8-.73 2.05-1.44.25-.71.25-1.31.18-1.44-.08-.13-.28-.2-.58-.35Z" />
    </svg>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#bba98f] text-[#5a4c3d] transition-colors hover:border-[#b1764e] hover:text-[#b1764e]"
    >
      {children}
    </a>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#2b241d] px-5 pb-28 pt-14 text-white md:px-10 md:pb-16">
      <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/15 pb-10 md:grid-cols-[1.15fr_0.85fr_1fr_0.85fr_1.1fr]">
        <div>
          <img
            src={footerLogo}
            alt="Limon Ranch"
            className="h-20 w-auto max-w-[230px] object-contain"
            loading="lazy"
            width={230}
            height={165}
          />
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/65">
            A peaceful retreat in Maralal for comfortable stays, meetings, team retreats and private
            getaways.
          </p>
        </div>
        <FooterColumn
          title="Stay"
          links={[
            ["Cottages / Rooms", "#accommodation"],
            ["Camping Grounds", "#accommodation"],
            ["Family & Group Stays", "#accommodation"],
            ["Event Accommodation", "#events"],
          ]}
        />
        <FooterColumn
          title="Experiences"
          links={[
            ["Landscaped Grounds", "#experiences"],
            ["Meetings & Retreats", "#events"],
            ["Restaurant & Bar", "#restaurant"],
            ["Northern Kenya Experiences", "#experiences"],
          ]}
        />
        <FooterColumn
          title="Socials"
          links={[
            ["WhatsApp", wa("Hello Limon Ranch, I'd like to enquire.")],
            ["Facebook", FB_URL],
            ["Instagram", IG_URL],
            ["TikTok (coming soon)", TIKTOK_URL],
          ]}
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
            Website by
          </p>
          <a
            href={EWASO_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-3 transition-opacity hover:opacity-85"
            aria-label="Website by Ewaso Digital"
          >
            <img
              src={ewasoLogo}
              alt="Ewaso Digital"
              className="h-12 w-12 rounded-xl object-contain"
              loading="lazy"
              width={48}
              height={48}
            />
            <span className="font-display text-xl font-semibold text-[#e2c783]">Ewaso Digital</span>
          </a>
          <p className="mt-4 max-w-[14rem] text-xs leading-6 text-white/52">
            Digital presence and marketing support.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl text-xs text-white/50">
        <p>Copyright {year} Limon Ranch. All rights reserved.</p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  external = false,
}: {
  title: string;
  links: [string, string][];
  external?: boolean;
}) {
  return (
    <div>
      <h3 className="font-display text-xl font-semibold text-[#e2c783]">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm text-white/68">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              target={external || href.startsWith("https://") ? "_blank" : undefined}
              rel={external || href.startsWith("https://") ? "noreferrer" : undefined}
              className="transition-colors hover:text-white"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.83a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-1.26Z" />
    </svg>
  );
}
