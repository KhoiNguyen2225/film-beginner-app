import React from 'react'

export default function LightingPage() {
  return (
    <section className="space-y-6 px-4 text-left">
      <h1 className="text-4xl font-bold">Lighting</h1>
      <p className="max-w-3xl text-justify text-slate-700">Techniques for using light creatively and avoiding exposure pitfalls.</p>

      <div className="space-y-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">Backlighting</h2>
          <p className="mt-2 text-justify text-slate-600">Place the light source behind your subject to create rim light and separation.</p>
          <p className="mt-2 text-justify text-sm text-slate-700"><strong>Tip:</strong> Golden hour backlight produces warm rim tones—try shooting then.</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">Silhouettes</h2>
          <p className="mt-2 text-justify text-slate-600">Expose for a bright background to render your subject as a dark shape for graphic impact.</p>
          <p className="mt-2 text-justify text-sm text-slate-700"><strong>Tip:</strong> Choose subjects with recognizable outlines (hats, profiles, trees).</p>
        </div>
      </div>
    </section>
  )
}
