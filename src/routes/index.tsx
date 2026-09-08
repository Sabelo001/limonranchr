import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
  Phone,
  Quote,
  Star,
  Utensils,
  Users,
  X,
} from "lucide-react";
import atmosphericHero from "@/assets/hero.jpg";
import logo from "@/assets/optimized/logo-clean.webp";
import footerLogo from "@/assets/optimized/logo-footer.webp";
import ewasoLogo from "@/assets/optimized/ewaso-digital-logo.webp";
import hero from "@/assets/property-exterior.jpg";
import { BookingEnquiry } from "@/components/booking-enquiry";
import { CALL_PHONE, DISPLAY_PHONE, bookingDraft as wa } from "@/lib/booking";
import cottages from "@/assets/optimized/cottages.webp";
import room1 from "@/assets/optimized/room-1.webp";
import room2 from "@/assets/optimized/room-2.webp";
import patio from "@/assets/optimized/patio.webp";
import events from "@/assets/events.jpg";
import conference from "@/assets/optimized/conference.webp";
import cottageGarden from "@/assets/optimized/cottage-garden.webp";
import bar from "@/assets/optimized/bar.webp";
import campingGround from "@/assets/optimized/camping-ground.webp";
import playground from "@/assets/optimized/playground.webp";
import lounge from "@/assets/optimized/lounge.webp";
import conferenceExterior from "@/assets/optimized/conference-exterior.webp";
import gamesLounge from "@/assets/optimized/games-lounge.webp";
import foodPlatter from "@/assets/food-platter.jpg";
import eventsHall from "@/assets/events-hall.jpg";
import eventsHall2 from "@/assets/events-hall-2.jpg";
import buffet from "@/assets/buffet.jpg";
import milkshake from "@/assets/optimized/milkshake.webp";
import chickenCurry from "@/assets/chicken-curry.jpg";
import lakeTurkanaFestival from "@/assets/lake-turkana-cultural-festival.jpg";
import limonGate from "@/assets/optimized/limon-ranch-gate.webp";
import malasoEscarpment from "@/assets/optimized/malaso-escarpment-viewpoint.webp";
import camelDerby from "@/assets/optimized/maralal-camel-derby.webp";
import ololokweMountain from "@/assets/ololokwe-mountain.jpg";
import samburuReserveGate from "@/assets/optimized/samburu-national-reserve-gate.webp";
import sugutaValley from "@/assets/suguta-valley-view.jpg";
import kenyattaHouseExterior from "@/assets/optimized/kenyatta-house-exterior.webp";
import kenyattaHouseSign from "@/assets/optimized/kenyatta-house-sign.webp";
import kenyattaHouseBedroom from "@/assets/optimized/kenyatta-house-bedroom.webp";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Home,
});

const FB_URL = "https://www.facebook.com/profile.php?id=100070965084168";
const IG_URL = "https://instagram.com/limon_ranch";
const MAP_PLUS_CODE = "3MPH+GQM, Lpartuk";
const MAP_LOCATION = `${MAP_PLUS_CODE} - Maralal / Samburu County, Kenya`;
const MAP_URL = "https://maps.app.goo.gl/4Xm9Qb9EWECueuds5";
const EWASO_URL = "https://ewasodigital.co.ke";
const GOOGLE_REVIEWS_URL = "https://share.google/x1HxhZh9Veugd1BsG";
const KENYATTA_HOUSE_URL = "https://museums.or.ke/kenyatta-house-maralal/";

const call = `tel:${CALL_PHONE}`;

const googleReviews = [
  {
    name: "Merce Bosch",
    rating: 4,
    date: "One year ago",
    review:
      "The rooms are super comfortable and clean. Well maintained. Staff extremely helpful, professional and kind.",
  },
  {
    name: "Saiwana Lekrepes",
    rating: 5,
    date: "Five years ago",
    review: "Best service, food and drinks in town! The place is just exquisite!",
  },
  {
    name: "Martin Munyi",
    rating: 5,
    date: "Three years ago",
    review: "Loved the serenity of the place.",
  },
] as const;

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
  const menuButton = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-200 ${
          scrolled
            ? "border-border bg-ranch-wash-strong/95 shadow-sm"
            : "border-border bg-ranch-wash-strong/92"
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

          <nav className="hidden items-center gap-6 text-[0.78rem] font-semibold uppercase tracking-wide text-muted-foreground lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative py-2 transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:text-primary hover:after:scale-x-100 focus-visible:text-primary focus-visible:after:scale-x-100"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={wa("Hello Limon Ranch, I'd like to check availability.")}
              target="_blank"
              rel="noreferrer"
              className="hidden h-12 items-center justify-center rounded-md bg-primary px-6 font-display text-base font-semibold text-primary-foreground shadow-sm transition-colors duration-200 hover:bg-primary-hover md:inline-flex"
            >
              Book via WhatsApp
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-foreground transition-colors duration-200 hover:border-accent hover:text-primary lg:hidden"
              ref={menuButton}
              aria-controls="mobile-navigation"
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-border bg-ranch-wash lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-5">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-border py-4 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors duration-200 hover:text-primary"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={wa("Hello Limon Ranch, I'd like to check availability.")}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors duration-200 hover:bg-primary-hover"
              >
                <WhatsAppIcon className="h-4 w-4" /> Book via WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      <main id="main" tabIndex={-1}>
        <section id="top" className="relative min-h-[88svh] overflow-hidden pt-20 md:pt-24">
          <img
            src={hero}
            alt="Limon Ranch peaceful Maralal retreat"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.9] saturate-[0.82] contrast-[0.96]"
            width={1920}
            height={1280}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/15" />
          <div className="relative z-10 mx-auto flex min-h-[calc(88svh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 md:min-h-[calc(88svh-6rem)] md:px-10 md:pb-20">
            <div className="reveal max-w-3xl text-white">
              <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.02] text-white sm:text-5xl md:text-7xl">
                Limon Ranch
              </h1>
              <p className="mt-4 font-display text-3xl text-gold-soft md:text-5xl">
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
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-colors duration-200 hover:bg-primary-hover"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Enquire on WhatsApp
                </a>
                <a
                  href="#accommodation"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white/70 px-6 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:border-gold-soft hover:text-gold-soft"
                >
                  View Stays
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          aria-label="About Limon Ranch"
          className="bg-ranch-wash px-5 py-14 md:px-10 md:py-16"
        >
          <div className="reveal mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.4fr] md:items-center">
            <div>
              <p className="eyebrow">Calm, Comfort and Connection</p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl">
                Experience calm, comfort and connection at Limon Ranch.
              </h2>
            </div>
            <div className="space-y-5 text-sm leading-8 text-muted-foreground md:text-base">
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

          <div className="mx-auto mt-12 grid max-w-7xl gap-6 px-5 md:mt-14 md:grid-cols-2 md:px-10 xl:grid-cols-4 xl:gap-7">
            {accommodations.map((card, i) => (
              <ImageCard key={card.title} {...card} delay={i * 90} />
            ))}
          </div>
          <div className="px-5 md:px-10">
            <BookingEnquiry />
          </div>
          <div className="reveal mt-12 flex justify-center px-5 md:px-10">
            <a
              href={wa("Hello Limon Ranch, I'd like to ask availability for accommodation.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors duration-200 hover:bg-primary-hover"
            >
              <WhatsAppIcon className="h-4 w-4" /> Ask Availability on WhatsApp
            </a>
          </div>
        </section>

        <section id="experiences" className="section-pad bg-ranch-wash">
          <SectionIntro
            eyebrow="At the Ranch"
            title="Space to rest, meet and reconnect."
            copy="Limon Ranch is built around calm grounds, comfortable stays, practical meeting space and the kind of quiet that helps guests breathe and focus."
          />

          <div className="mx-auto mt-12 grid max-w-7xl gap-6 px-5 sm:grid-cols-2 md:mt-14 md:px-10 lg:grid-cols-3 xl:gap-7">
            {experiences.map((card, i) => (
              <ExperienceCard key={card.title} {...card} delay={i * 70} />
            ))}
          </div>
          <div className="reveal mt-12 flex justify-center px-5 md:px-10">
            <a
              href={wa("Hello Limon Ranch, I'd like to plan a stay, meeting or retreat.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border px-6 text-xs font-bold uppercase tracking-[0.18em] text-foreground transition-colors duration-200 hover:border-accent hover:text-primary"
            >
              <WhatsAppIcon className="h-4 w-4" /> Plan a Visit
            </a>
          </div>

          <div className="reveal mx-auto mt-16 max-w-7xl px-5 md:mt-20 md:px-10">
            <div className="grid gap-8 border-t border-border pt-10 md:grid-cols-[0.9fr_1.1fr] md:items-start md:pt-12">
              <div>
                <p className="eyebrow">Northern Kenya Experiences</p>
                <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                  Plan regional experiences with clear travel expectations.
                </h3>
              </div>
              <div className="space-y-5 text-sm leading-8 text-muted-foreground md:text-base">
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
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Distances are approximate and may vary depending on route, road conditions and
                  season.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <article
                id="kenyatta-house"
                className="scroll-mt-28 overflow-hidden border border-border bg-card sm:col-span-2 lg:col-span-3"
              >
                <div className="grid min-w-0 gap-2 bg-ranch-ink md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                  <img
                    src={kenyattaHouseExterior}
                    alt="Exterior of Kenyatta House in Maralal"
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="aspect-[4/3] h-auto min-w-0 w-full object-cover object-center md:aspect-auto md:h-full"
                  />
                  <div className="grid min-w-0 grid-cols-2 gap-2 md:grid-cols-1">
                    <img
                      src={kenyattaHouseSign}
                      alt="Kenyatta House Maralal entrance sign"
                      loading="lazy"
                      width={1280}
                      height={960}
                      className="aspect-[4/3] h-auto min-w-0 w-full object-cover object-center"
                    />
                    <img
                      src={kenyattaHouseBedroom}
                      alt="Preserved bedroom inside Kenyatta House Maralal"
                      loading="lazy"
                      width={1280}
                      height={960}
                      className="aspect-[4/3] h-auto min-w-0 w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="grid gap-6 p-6 md:grid-cols-[0.72fr_1.28fr] md:p-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      History &amp; Heritage
                    </p>
                    <h4 className="mt-3 font-display text-3xl font-semibold text-foreground">
                      Kenyatta House, Maralal
                    </h4>
                  </div>
                  <div>
                    <p className="text-sm leading-7 text-muted-foreground">
                      Visit one of Maralal’s most important historic landmarks. Built in 1959,
                      Kenyatta House served as a detention residence for Mzee Jomo Kenyatta in 1961,
                      shortly before his release. The National Museums of Kenya records that
                      important independence negotiations took place here and that Kenyatta
                      completed “Facing Mount Kenya” during his stay.
                    </p>
                    <div className="mt-5 border-l-2 border-accent pl-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        Travel note
                      </p>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        Located in Maralal town. Confirm current opening arrangements and entry
                        requirements with the National Museums of Kenya before visiting.
                      </p>
                    </div>
                    <a
                      href={KENYATTA_HOUSE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex min-h-11 items-center border-b border-accent text-sm font-semibold text-foreground transition-colors duration-200 hover:text-primary"
                    >
                      Learn more at National Museums of Kenya
                    </a>
                  </div>
                </div>
              </article>
              {northernExperiences.map((item) => (
                <article key={item.title} className="overflow-hidden border border-border bg-card">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.img}
                      alt={`${item.title} regional Northern Kenya experience`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-display text-2xl font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      Estimated distance
                    </p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.distance}</p>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="restaurant" className="section-pad bg-background">
          <div className="mx-auto grid max-w-7xl gap-9 px-5 md:grid-cols-2 md:items-center md:px-10 xl:gap-12">
            <div className="reveal relative min-h-[440px] overflow-hidden">
              <img
                src={foodPlatter}
                alt="Limon Ranch restaurant food platter"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="reveal md:pl-4 xl:pl-8" style={{ transitionDelay: "80ms" }}>
              <p className="eyebrow">Restaurant & Bar</p>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl">
                Meals, drinks and easy ranch hospitality.
              </h2>
              <span className="gold-rule mt-6" />
              <p className="mt-7 leading-8 text-muted-foreground">
                The restaurant and bar support the wider retreat experience. Guests can plan a meal,
                gather between sessions, host a small celebration or add food and drinks to a
                meeting, retreat or private stay.
              </p>
              <p className="mt-5 leading-8 text-muted-foreground">
                Ask the team about breakfast, other meals, dietary needs and arrangements for your
                stay or gathering when enquiring.
              </p>
              <a
                href={wa("Hello Limon Ranch, I'd like to ask about the restaurant and bar.")}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors duration-200 hover:bg-primary-hover"
              >
                <WhatsAppIcon className="h-4 w-4" /> Ask About Restaurant
              </a>
            </div>
          </div>
        </section>

        <section id="events" className="section-pad bg-ranch-ink text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-10">
            <div className="reveal">
              <p className="eyebrow text-gold-soft">Conference Centre</p>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight md:text-5xl">
                A quiet place for meetings and retreats.
              </h2>
              <span className="gold-rule mt-6 bg-gold-soft" />
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
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors duration-200 hover:bg-primary-hover"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Enquire Now
                </a>
                <a
                  href="#gallery"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white/40 px-6 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:border-gold-soft hover:text-gold-soft"
                >
                  View Gallery
                </a>
              </div>
            </div>
            <div className="reveal grid gap-4 sm:grid-cols-2" style={{ transitionDelay: "80ms" }}>
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

        <section className="section-pad bg-ranch-wash">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="reveal grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
              <div>
                <p className="eyebrow">Why Guests Choose Limon Ranch</p>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl">
                  A peaceful setting with practical comforts.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex gap-3 border-b border-border pb-4 text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <span className="leading-7">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative min-h-[540px] overflow-hidden bg-ranch-ink"
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
              <p className="eyebrow text-gold-soft">Now Welcoming Guests</p>
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
                className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors duration-200 hover:bg-primary-hover"
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

          <div className="mx-auto mt-12 grid max-w-7xl gap-10 px-5 md:mt-14 md:gap-12 md:px-10">
            {galleryGroups.map((group) => (
              <GalleryGroup key={group.title} {...group} />
            ))}
          </div>
        </section>

        <section id="guest-feedback" className="bg-ranch-wash px-5 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="reveal max-w-2xl">
              <p className="eyebrow">Guest Feedback</p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                What guests have shared.
              </h2>
              <p className="mt-5 leading-8 text-muted-foreground">
                Selected excerpts from genuine Google reviews of Limon Ranch.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {googleReviews.map((review) => (
                <article
                  key={review.name}
                  className="reveal flex min-h-full flex-col border border-border bg-card p-7 md:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <Quote className="h-7 w-7 text-primary" aria-hidden="true" />
                    <div
                      className="flex gap-1"
                      role="img"
                      aria-label={`${review.rating} out of 5 stars`}
                    >
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star
                          key={index}
                          className={`h-4 w-4 ${
                            index < review.rating
                              ? "fill-gold text-gold"
                              : "fill-transparent text-border"
                          }`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                  <blockquote className="mt-7 flex-1">
                    <p className="text-lg leading-8 text-foreground">{review.review}</p>
                  </blockquote>
                  <footer className="mt-8 border-t border-border pt-5">
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Google review excerpt · {review.date}
                    </p>
                  </footer>
                </article>
              ))}
            </div>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md border border-border bg-card px-6 text-xs font-bold uppercase tracking-[0.18em] text-foreground transition-colors duration-200 hover:border-accent hover:text-primary"
            >
              Read all reviews on Google
            </a>
          </div>
        </section>

        <section id="contact" className="section-pad bg-background">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-10 xl:gap-14">
            <div className="reveal">
              <p className="eyebrow">Contact</p>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl">
                Ask availability directly.
              </h2>
              <p className="mt-7 leading-8 text-muted-foreground">
                For accommodation, private getaways, meetings, conferences and team retreats,
                WhatsApp is the clearest way to reach the Limon Ranch team.
              </p>
              <div className="mt-8 space-y-4 text-foreground">
                <ContactLine icon={WhatsAppIcon} label="WhatsApp" value={DISPLAY_PHONE} />
                <ContactLine icon={MapPin} label="Location" value={MAP_LOCATION} />
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={wa("Hello Limon Ranch, I'd like to plan a visit.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors duration-200 hover:bg-primary-hover"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
                </a>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border px-5 text-xs font-bold uppercase tracking-[0.18em] text-foreground transition-colors duration-200 hover:border-accent hover:text-primary"
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
              </div>
            </div>

            <div className="reveal" style={{ transitionDelay: "80ms" }}>
              <div className="border border-border bg-card p-7 shadow-sm md:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Location
                </p>
                <h3 className="mt-5 font-display text-3xl font-semibold text-foreground">
                  {MAP_PLUS_CODE}
                </h3>
                <p className="mt-4 leading-8 text-muted-foreground">
                  Use this plus code as the Limon Ranch map reference for directions to Lpartuk,
                  near Maralal in Samburu County, Kenya.
                </p>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-ranch-ink px-5 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-ranch-ink-soft"
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
      <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl">
        {title}
      </h2>
      <span className="gold-rule mt-6" />
      <p className="mx-auto mt-7 max-w-2xl leading-8 text-muted-foreground">{copy}</p>
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
    <article className="reveal group bg-card shadow-sm" style={{ transitionDelay: `${delay}ms` }}>
      <div className="relative h-80 overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="media-zoom absolute inset-0 h-full w-full object-cover transition-transform duration-300"
        />
        <div className="absolute left-0 top-8 bg-ranch-ink px-6 py-4 text-white">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="p-7">
        <h3 className="font-display text-2xl font-semibold text-foreground">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">{copy}</p>
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
      className="reveal group overflow-hidden bg-card"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="media-zoom absolute inset-0 h-full w-full object-cover transition-transform duration-300"
        />
        <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="p-7">
        <h3 className="font-display text-2xl font-semibold text-foreground">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">{copy}</p>
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
      <div className="mb-5 flex flex-col gap-2 border-b border-border pb-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="font-display text-2xl font-semibold text-foreground">{title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">{copy}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 [grid-auto-rows:150px] md:grid-cols-4 md:[grid-auto-rows:220px]">
        {items.length > 0 ? (
          items.map((item) => <GalleryItem key={`${title}-${item.alt}`} {...item} />)
        ) : (
          <div className="col-span-2 flex min-h-36 items-center border border-dashed border-border bg-card p-6 text-sm leading-7 text-muted-foreground md:col-span-4">
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
    <div className={`relative overflow-hidden bg-ranch-wash-strong ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="media-zoom absolute inset-0 h-full w-full object-cover transition-transform duration-300"
      />
    </div>
  );
}

function ContactLine({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-1 h-5 w-5 shrink-0 text-accent" />
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{label}</p>
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
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#16783e] text-white shadow-lg ring-2 ring-white/90 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#168a46]"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
      <a
        href={call}
        aria-label="Call Limon Ranch"
        className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
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
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-200 hover:border-accent hover:text-primary"
    >
      {children}
    </a>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ranch-ink px-5 pb-28 pt-14 text-white md:px-10 md:pb-16">
      <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/15 pb-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[1.15fr_0.85fr_1fr_0.85fr_1.1fr]">
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
            ["About Limon Ranch", "#about"],
            ["Booking enquiry", "#booking"],
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
          ]}
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Website by
          </p>
          <a
            href={EWASO_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-85"
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
            <span className="font-display text-xl font-semibold text-gold-soft">Ewaso Digital</span>
          </a>
          <p className="mt-4 max-w-[14rem] text-xs leading-6 text-white/70">
            Digital presence and marketing support.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl text-xs text-white/70">
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
      <h3 className="font-display text-xl font-semibold text-gold-soft">{title}</h3>
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
