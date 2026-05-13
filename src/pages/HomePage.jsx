import { Link } from 'react-router-dom'
import misc6 from '../assets/images/misc/000088.webp'
import misc7 from '../assets/images/misc/000081.webp'
import misc4 from '../assets/images/misc/000756170017.webp'
import misc5 from '../assets/images/misc/000756170018.webp'
import misc1 from '../assets/images/misc/000756170023.webp'
import misc8 from '../assets/images/misc/000756170027.webp'
import misc2 from '../assets/images/misc/IMG_9674.webp'
import misc9 from '../assets/images/misc/00837.webp'
import misc10 from '../assets/images/misc/IMG_9656.webp'
import misc3 from '../assets/images/misc/000756170029.webp'

const services = [
  {
    title: 'Exposure basics',
    text: 'Understand how shutter speed, aperture, and ISO work together to get the desired exposure to your liking.',
  },
  {
    title: 'Seeing composition',
    text: 'Learn how framing, leading lines, and balance help images feel intentional instead of accidental.',
  },
  {
    title: 'Handling film',
    text: 'Get comfortable with loading, shooting, and storing film so the process feels easy to follow.',
  },
]

const carouselSlides = [
  { src: misc4, alt: '' },
  { src: misc5, alt: '' },
  { src: misc6, alt: '' },
  { src: misc7, alt: '' },
  { src: misc8, alt: '' },
  { src: misc9, alt: '' },
  { src: misc10, alt: '' },
]

const sprocketHoles = Array.from({ length: 20 }, (_, index) => index)

export default function HomePage() {
  return (
    <section className="space-y-20 pb-10">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="max-w-3xl space-y-8">
          <p className="text-sm font-semibold uppercase tracking-[0.38em] text-slate-500">
            Since 2026 / Made for new generations
          </p>

          <div className="space-y-6">
            <h1 className="font-serif text-5xl leading-none tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Film photography, made welcoming for the next generation.
            </h1>
            <p className="max-w-2xl text-justify text-lg leading-8 text-slate-700 sm:text-xl">
              This platform is a calm starting point for anyone curious about
              film. If you are new to cameras, new to creative photography, or
              just drawn to the slower rhythm of analog, you will find clear
              guidance here.
            </p>
            <p className="max-w-2xl text-justify text-lg leading-8 text-slate-700 sm:text-xl">
              The goal is simple: remove the intimidation, keep the craft
              approachable, and help new photographers build confidence one
              frame at a time.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row">
            <Link
              to="/simulator"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
            >
              Start with exposure
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)] sm:col-span-2 lg:col-span-1">
            <img
              src={misc1}
              alt="A wide film-style view of a bright coastline"
              width="1128"
              height="1337"
              fetchPriority="high"
              decoding="async"
              className="h-[28rem] w-full object-cover"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:col-span-2 lg:col-span-1">
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white">
              <img
                src={misc2}
                alt="A clock tower shot from below against a clear sky"
                width="1564"
                height="925"
                loading="lazy"
                decoding="async"
                className="h-56 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white">
              <img
                src={misc3}
                alt="Backlit outdoor scene with a person and horse"
                width="1760"
                height="1041"
                loading="lazy"
                decoding="async"
                className="h-56 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <section
        aria-label="Image carousel"
        className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-black/80 py-4 shadow-[0_24px_80px_rgba(15,23,42,0.24)] sm:py-5"
      >
        <div className="pointer-events-none absolute inset-x-0 top-1 flex justify-center sm:top-2">
          <div className="flex w-full max-w-[96rem] justify-between gap-1.5 px-2 sm:gap-3 sm:px-6 lg:px-10">
            {sprocketHoles.map((hole) => (
              <span
                key={`top-hole-${hole}`}
                className="h-4 w-4 rounded-[0.18rem] bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.92)] sm:h-7 sm:w-7"
              />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-1 flex justify-center sm:bottom-2">
          <div className="flex w-full max-w-[96rem] justify-between gap-1.5 px-2 sm:gap-3 sm:px-6 lg:px-10">
            {sprocketHoles.map((hole) => (
              <span
                key={`bottom-hole-${hole}`}
                className="h-4 w-4 rounded-[0.18rem] bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.92)] sm:h-7 sm:w-7"
              />
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-[96rem] px-2 py-4 sm:px-6 sm:py-8 lg:px-10">
          <div className="flex w-max gap-2 animate-carousel-scroll sm:gap-4">
            {[...carouselSlides, ...carouselSlides].map((slide, index) => (
              <article
                key={`${slide.src}-${index}`}
                className="relative h-[12rem] w-40 flex-none overflow-hidden rounded-[0.85rem] border border-white/10 bg-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] sm:h-[22rem] sm:w-80 sm:rounded-[1.25rem]"
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  width="1200"
                  height="900"
                  loading={index < 2 ? 'eager' : 'lazy'}
                  fetchPriority={index < 2 ? 'high' : 'low'}
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
            About
          </p>
          <h2 className="font-serif text-4xl leading-tight text-slate-950 sm:text-5xl">
            Everything you need to start shooting film, slowly and simply.
          </h2>
          <p className="max-w-xl text-justify text-base leading-7 text-slate-700 sm:text-lg">
            Film photography has a learning curve, but that curve is part of the
            appeal. We focus on the essentials: what the settings mean, how to
            read light, how to compose with intention, and how to shoot without
            feeling overwhelmed.
          </p>
          <Link
            to="/techniques/film-handling"
            className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
          >
            Learn how to handle film
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Guide
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                {service.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}