import React from 'react'

export default function FilmHandlingPage() {
  return (
    <section className="space-y-6 px-4 text-left">
      <h1 className="text-4xl font-bold">Film Selection & Handling</h1>
      <p className="max-w-3xl text-justify text-slate-700">Practical film choices, storage, and processing tips for reliable results.</p>

      <div className="space-y-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">Choosing Film</h2>
          <p className="mt-2 text-justify text-slate-600">Select film based on grain, latitude, and color — ISO 100 for bright landscapes, 400 for general use, 800+ for low light.</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">Storage & Handling</h2>
          <p className="mt-2 text-justify text-slate-600">Store film in a cool, dry place (fridge recommended). Let reels warm to room temperature before use.</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">Sunny 16 & Bracketing</h2>
          <p className="mt-2 text-justify text-slate-600">Sunny 16: aperture f/16 and shutter reciprocal of film ISO. Bracket ±1 stop when unsure to ensure a usable exposure.</p>
        </div>
      </div>
    </section>
  )
}
