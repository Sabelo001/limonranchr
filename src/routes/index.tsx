import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MessageCircle,
  Facebook,
  Instagram,
  MapPin,
  Sun,
  Moon,
  Menu,
  X,
  Quote,
} from "lucide-react";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.jpg";
import wildlife from "@/assets/wildlife.jpg";
import giraffes from "@/assets/giraffes.jpg";
import cottages from "@/assets/cottages.jpg";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import patio from "@/assets/patio.jpg";
import events from "@/assets/events.jpg";
import conference from "@/assets/conference.jpg";
import ololokwe from "@/assets/ololokwe.jpg";
import reteti from "@/assets/reteti.jpg";
import cottageGarden from "@/assets/cottage-garden.jpg";
import bar from "@/assets/bar.jpg";
import warriors from "@/assets/samburu-warriors.avif";
import elephants from "@/assets/samburu-elephants.avif";
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
import chickenFries from "@/assets/chicken-fries.jpg";
import chickenCurry from "@/assets/chicken-curry.jpg";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Limon Ranch — The Pride of the North | Luxury Samburu Safari & Stays" },
      {
        name: "description",
        content:
          "Limon Ranch is a luxury safari, ranch stay and events destination in Samburu County, northern Kenya. Wild Africa, refined.",
      },
      { property: "og:title", content: "Limon Ranch — The Pride of the North" },
      {
        property: "og:description",
        content:
          "Luxury safari, ranch stays, weddings and conferences in Samburu County, Kenya.",
      },
      { property: "og:image", content: hero },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: hero },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Home,
});

const WHATSAPP = "254722207384";
const FB_URL = "https://www.facebook.com/profile.php?id=100070965084168";
const IG_URL = "https://instagram.com/limon_ranch";
const TIKTOK_URL = "https://tiktok.com/@limonranch";

const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

function Home() {
  useReveal();
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") root.classList.add("light");
    else root.classList.remove("light");
  }, [theme]);

  const nav = [
    { label: "About", href: "#about" },
    { label: "Experiences", href: "#experiences" },
    { label: "Gallery", href: "#gallery" },
    { label: "Stories", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Limon Ranch" className="h-9 md:h-11 w-auto" />
            <span className="hidden sm:block font-display text-lg tracking-wide">
              Limon Ranch
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-9 text-sm">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-foreground/75 hover:text-gold transition-colors tracking-wide"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="p-2 rounded-full border border-border/60 hover:border-gold/60 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-gold" />
              ) : (
                <Moon className="h-4 w-4 text-gold" />
              )}
            </button>
            <a
              href={wa("Hello Limon Ranch, I'd like to make a booking.")}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.2em] uppercase border border-gold/70 text-gold hover:bg-gold hover:text-primary-foreground transition-all"
            >
              Reserve
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden p-2 text-foreground"
              aria-label="Menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-lg">
            <div className="px-6 py-6 flex flex-col gap-5">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-foreground/80 hover:text-gold text-sm tracking-wide"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={wa("Hello Limon Ranch, I'd like to make a booking.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs tracking-[0.2em] uppercase border border-gold/70 text-gold"
              >
                Reserve via WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={hero}
          alt="Samburu landscape at golden hour"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="reveal">
            <img
              src={logo}
              alt="Limon Ranch"
              className="mx-auto h-28 md:h-44 w-auto drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
            />
          </div>

          <div className="reveal mt-8 max-w-3xl" style={{ transitionDelay: "120ms" }}>
            <p className="eyebrow text-[#C9A84C]">Samburu County · Northern Kenya</p>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-7xl text-white leading-[1.05] text-balance">
              The Pride <span className="italic text-[#C9A84C]">of the North</span>
            </h1>
            <p className="mt-6 text-white/75 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              A luxury safari, ranch stay and events sanctuary where wild Africa
              meets refined hospitality.
            </p>
          </div>

          <div
            className="reveal mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-none sm:w-auto"
            style={{ transitionDelay: "240ms" }}
          >
            <a
              href={wa("Hello Limon Ranch, I'd like to book a stay.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A84C] text-black text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#d8b962] transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> Book via WhatsApp
            </a>
            <a
              href="#experiences"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white text-xs tracking-[0.25em] uppercase font-medium hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
            >
              Explore Experiences
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 text-[10px] tracking-[0.4em] uppercase">
          Scroll
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="reveal order-2 md:order-1">
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-5 font-display text-3xl md:text-5xl leading-tight text-balance">
              A sanctuary carved from the soul of Samburu.
            </h2>
            <span className="gold-rule mt-6" />
            <div className="mt-8 space-y-5 text-foreground/75 leading-relaxed">
              <p>
                Set against the rugged, sun-drenched plains of northern Kenya,
                Limon Ranch is a quiet escape for those who seek the
                extraordinary. Here, the rhythm of the bush meets the comfort
                of a private retreat — every sunrise an invitation, every night
                a constellation.
              </p>
              <p>
                Owned and run by people who call this land home, the ranch
                weaves Samburu warmth into every detail — from warrior-led bush
                walks to long evenings around the fire pit, beneath skies
                heavy with stars.
              </p>
            </div>
          </div>

          <div className="reveal order-1 md:order-2 relative" style={{ transitionDelay: "120ms" }}>
            <div className="absolute -inset-4 border border-gold/30 -z-10" />
            <img
              src={cottages}
              alt="Limon Ranch cottages overlooking the Samburu hills"
              loading="lazy"
              className="w-full h-[420px] md:h-[560px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section id="experiences" className="py-24 md:py-36 px-6 md:px-10 bg-card/40 border-y border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center max-w-2xl mx-auto">
            <p className="eyebrow">Experiences</p>
            <h2 className="mt-5 font-display text-3xl md:text-5xl leading-tight text-balance">
              Three ways to live the Pride.
            </h2>
            <span className="gold-rule mt-6" />
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Safari & Wildlife",
                img: elephants,
                copy:
                  "Game drives, walking safaris and warrior-guided bush encounters across some of Kenya's wildest country.",
                cta: "Safari & Wildlife",
              },
              {
                title: "Ranch Stays",
                img: room1,
                copy:
                  "Four-poster beds, private cottages and slow mornings — refined comfort in the heart of the savanna.",
                cta: "Ranch Stay",
              },
              {
                title: "Restaurant & Bar",
                img: foodPlatter,
                copy:
                  "From sizzling nyama choma platters to handcrafted milkshakes — a kitchen and bar built around long, golden meals.",
                cta: "Restaurant & Bar",
              },
              {
                title: "Events & Conferences",
                img: eventsHall,
                copy:
                  "Weddings, birthdays, retreats and conferences hosted in elegant halls and open-air settings.",
                cta: "Events & Conferences",
              },
            ].map((card, i) => (
              <article
                key={card.title}
                className="reveal group relative overflow-hidden bg-background border border-border/50"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl">{card.title}</h3>
                  <span className="gold-rule mt-4" />
                  <p className="mt-5 text-sm text-foreground/70 leading-relaxed">
                    {card.copy}
                  </p>
                  <a
                    href={wa(
                      `Hello Limon Ranch, I'd like to enquire about ${card.cta}.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> Enquire
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OLOLOKWE FEATURE */}
      <section className="relative h-[70vh] min-h-[460px] w-full overflow-hidden">
        <img
          src={ololokwe}
          alt="Mount Ololokwe — the sacred table mountain of the Samburu"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-10 pb-16 md:pb-24">
            <div className="reveal max-w-2xl text-white">
              <p className="eyebrow text-[#C9A84C]">Land of Legend</p>
              <h2 className="mt-5 font-display text-3xl md:text-5xl leading-tight text-balance">
                In the shadow of Ololokwe.
              </h2>
              <span className="gold-rule mt-6 bg-[#C9A84C]" />
              <p className="mt-6 text-white/80 leading-relaxed">
                The sacred table mountain of the Samburu watches over our land — a
                landmark of the north, alongside the elephants of Reteti, the
                singing wells, and a culture as old as the hills themselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESTAURANT FEATURE */}
      <section className="py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="reveal relative">
            <div className="absolute -inset-4 border border-gold/30 -z-10" />
            <img
              src={foodPlatter}
              alt="Signature Limon Ranch nyama choma platter"
              loading="lazy"
              className="w-full h-[420px] md:h-[560px] object-cover"
            />
          </div>
          <div className="reveal" style={{ transitionDelay: "120ms" }}>
            <p className="eyebrow">The Restaurant</p>
            <h2 className="mt-5 font-display text-3xl md:text-5xl leading-tight text-balance">
              A kitchen built for long, golden meals.
            </h2>
            <span className="gold-rule mt-6" />
            <div className="mt-8 space-y-5 text-foreground/75 leading-relaxed">
              <p>
                From sizzling nyama choma platters and slow-simmered curries to
                crisp salads in the sun and handcrafted milkshakes by the fire —
                our restaurant celebrates the flavours of the north with quiet
                confidence.
              </p>
              <p>
                Pair every meal with a thoughtful bar list, then linger over a
                game of pool in the lounge as the day slips into Samburu dusk.
              </p>
            </div>
            <a
              href={wa("Hello Limon Ranch, I'd like to book a table at the restaurant.")}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" /> Reserve a Table
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-36 px-6 md:px-10 bg-card/40 border-y border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center max-w-2xl mx-auto">
            <p className="eyebrow">Gallery</p>
            <h2 className="mt-5 font-display text-3xl md:text-5xl leading-tight text-balance">
              Moments at the ranch.
            </h2>
            <span className="gold-rule mt-6" />
          </div>

          <div className="reveal mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 [grid-auto-rows:160px] md:[grid-auto-rows:220px]">
            <GalleryItem src={ololokwe} alt="Mount Ololokwe rising over the Samburu plains" className="col-span-2 row-span-2" />
            <GalleryItem src={warriors} alt="Samburu warriors at dusk" />
            <GalleryItem src={reteti} alt="Elephants at Reteti sanctuary" />
            <GalleryItem src={campingGround} alt="Open camping ground and lawns" className="col-span-2" />
            <GalleryItem src={playground} alt="Playground in the gardens" />
            <GalleryItem src={lounge} alt="Lounge and bar" />
            <GalleryItem src={chickenCurry} alt="Slow-simmered chicken curry" className="col-span-2" />
            <GalleryItem src={chickenFries} alt="Crispy chicken and fries in the sun" />
            <GalleryItem src={milkshake} alt="Handcrafted chocolate milkshake" />
            <GalleryItem src={giraffes} alt="Giraffes at sunset" className="col-span-2" />
            <GalleryItem src={cottageGarden} alt="Private cottage surrounded by gardens" />
            <GalleryItem src={room2} alt="Suite interior with four-poster bed" />
            <GalleryItem src={buffet} alt="Buffet service on the patio" className="col-span-2" />
            <GalleryItem src={bar} alt="The ranch bar" />
            <GalleryItem src={gamesLounge} alt="Games lounge with pool table" />
            <GalleryItem src={eventsHall2} alt="Events hall styled for a celebration" className="col-span-2" />
            <GalleryItem src={patio} alt="Outdoor dining patio" />
            <GalleryItem src={wildlife} alt="Lioness at golden hour" />
            <GalleryItem src={cottages} alt="Cottages on the hill" className="col-span-2" />
            <GalleryItem src={events} alt="Events hall set for a celebration" />
            <GalleryItem src={room1} alt="Four-poster bedroom" />
            <GalleryItem src={conferenceExterior} alt="Conference centre exterior" className="col-span-2" />
            <GalleryItem src={conference} alt="Conference centre interior" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="py-24 md:py-36 px-6 md:px-10 bg-card/40 border-y border-border/40"
      >
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center max-w-2xl mx-auto">
            <p className="eyebrow">Guest Stories</p>
            <h2 className="mt-5 font-display text-3xl md:text-5xl leading-tight">
              Words from the wild.
            </h2>
            <span className="gold-rule mt-6" />
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                q: "The most quietly magnificent stay we've ever had in Africa. Limon Ranch feels like a private secret of the north.",
                a: "Amelia & James — London",
              },
              {
                q: "From the warrior-guided walk to dinner under the stars, every moment was intentional. Wild luxury at its finest.",
                a: "Wanjiku M. — Nairobi",
              },
              {
                q: "We hosted our wedding here. Guests are still talking about the sunsets, the food, and the soul of the place.",
                a: "The Lekishon Family",
              },
            ].map((t, i) => (
              <figure
                key={i}
                className="reveal bg-background border border-border/50 p-8 md:p-10 flex flex-col"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Quote className="h-7 w-7 text-gold/70" />
                <blockquote className="mt-5 font-display text-lg md:text-xl leading-relaxed text-foreground/90 italic">
                  "{t.q}"
                </blockquote>
                <span className="gold-rule mt-6" />
                <figcaption className="mt-5 text-xs tracking-[0.25em] uppercase text-foreground/60">
                  {t.a}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center reveal">
          <p className="eyebrow">Plan your visit</p>
          <h2 className="mt-5 font-display text-3xl md:text-6xl leading-tight text-balance">
            Begin your Samburu story.
          </h2>
          <span className="gold-rule mt-6" />
          <p className="mt-8 text-foreground/70 max-w-xl mx-auto leading-relaxed">
            Reservations, private events and bespoke safaris — speak with our
            team directly. We respond personally, within hours.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <a
              href={wa("Hello Limon Ranch, I'd like to plan a visit.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-gold text-primary-foreground text-xs tracking-[0.25em] uppercase font-medium hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <a
              href="tel:+254722207384"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 border border-border text-foreground text-xs tracking-[0.25em] uppercase font-medium hover:border-gold hover:text-gold transition-colors"
            >
              +254 722 207 384
            </a>
          </div>

          <div className="mt-14 flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 text-foreground/60 text-sm">
              <MapPin className="h-4 w-4 text-gold" />
              Samburu County · Maralal, Kenya
            </div>
            <div className="flex items-center gap-5">
              <Social href={FB_URL} label="Facebook">
                <Facebook className="h-4 w-4" />
              </Social>
              <Social href={IG_URL} label="Instagram">
                <Instagram className="h-4 w-4" />
              </Social>
              <Social href={TIKTOK_URL} label="TikTok">
                <TikTokIcon />
              </Social>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/40 px-6 md:px-10 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0 justify-between">
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={logo} alt="Limon Ranch" className="h-12 w-auto" />
            <p className="text-xs tracking-[0.3em] uppercase text-gold">
              The Pride of the North
            </p>
          </div>

          <div className="flex items-center gap-5">
            <Social href={FB_URL} label="Facebook">
              <Facebook className="h-4 w-4" />
            </Social>
            <Social href={IG_URL} label="Instagram">
              <Instagram className="h-4 w-4" />
            </Social>
            <Social href={TIKTOK_URL} label="TikTok">
              <TikTokIcon />
            </Social>
          </div>

          <p className="text-xs text-foreground/50 tracking-wide">
            © {new Date().getFullYear()} Limon Ranch. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
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
    <div className={`relative overflow-hidden group ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
    </div>
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
      className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border hover:border-gold hover:text-gold text-foreground/80 transition-colors"
    >
      {children}
    </a>
  );
}

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.83a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-1.26Z" />
    </svg>
  );
}
