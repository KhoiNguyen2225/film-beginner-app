import React from 'react'

export default function FilmHandlingPage() {
  return (
    <section className="space-y-6 px-4 text-left">
      <h1 className="font-serif text-4xl font-bold">Film Selection & Handling</h1>
      <p className="max-w-3xl text-justify text-slate-700">Film is delicate but not as scary as it sounds. Let me break down how to pick the right stuff and keep it happy, from the moment you buy it to the moment you shoot it.</p>

      <div className="space-y-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold">Choosing Film</h2>
          <p className="mt-2 text-justify text-slate-600">Here's the quick version: ISO 100 is your friend for sunny outdoor days where light is plentiful. ISO 400 is the Goldilocks choice—works in most situations without too much grain. ISO 800 is for when you're indoors or it's getting cloudy, and you don't want to use a tripod.</p>
          <p className="mt-2 text-justify text-sm text-slate-700">Think of ISO like turning up the sensitivity. Higher numbers gather more light but add visible grain—and honestly, that grain is part of film's charm. Don't be afraid of it.</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold">Storage & Handling</h2>
          <p className="mt-2 text-justify text-slate-600">Film doesn't like heat or humidity. If you're shooting it soon, keep it in a cool, dry place. If you're stockpiling, pop it in the fridge (seriously). Just remember to let it come to room temperature before you open the canister—you don't want condensation inside.</p>
          <p className="mt-2 text-justify text-sm text-slate-700">When you're loading and unloading, be gentle and try to work in low light. Your film's been waiting for you—treat it right.</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold">The Sunny 16 Rule</h2>
          <p className="mt-2 text-justify text-slate-600">This is a handy rule of thumb when you're not sure what settings to use. On a sunny day, set your aperture to f/16 and your shutter speed to the reciprocal of your film's ISO. So if you're shooting ISO 100, use 1/100 shutter (or 1/125, which is close enough). This almost always gets you a properly exposed shot in bright light.</p>
          <p className="mt-2 text-justify text-sm text-slate-700">And here's permission to break the rules a little: if you're not sure, bracket. Take one at what you think is correct, then one slightly brighter and one slightly darker. You'll learn fast, and you'll have backups.</p>
        </div>
      </div>
    </section>
  )
}
