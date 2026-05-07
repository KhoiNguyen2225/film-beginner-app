import React from 'react'

export default function CompositionPage() {
  return (
    <section className="space-y-6 px-4 text-left">
      <h1 className="text-4xl font-bold">Composition</h1>
      <p className="max-w-3xl text-justify text-slate-700">Fundamental framing and layout techniques to improve your shots.</p>

      <div className="space-y-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">Rule of Thirds</h2>
          <p className="mt-2 text-justify text-slate-600">Divide your frame into a 3×3 grid and place key subjects along the lines or intersections.</p>
          <p className="mt-2 text-justify text-sm text-slate-700"><strong>When to use:</strong> Landscapes, portraits, street photography.</p>
          <p className="mt-1 text-justify text-sm text-slate-700"><strong>Tip:</strong> Use your camera's grid overlay while composing.</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">Leading Lines</h2>
          <p className="mt-2 text-justify text-slate-600">Use roads, rails, shadows or architectural lines to guide the viewer to your subject.</p>
          <p className="mt-2 text-justify text-sm text-slate-700"><strong>When to use:</strong> Landscapes, architecture, street.</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">Framing</h2>
          <p className="mt-2 text-justify text-slate-600">Use foreground elements like windows, doorways, or branches to create a frame around your subject.</p>
          <p className="mt-2 text-justify text-sm text-slate-700"><strong>When to use:</strong> Portraits and environmental shots.</p>
        </div>
      </div>
    </section>
  )
}
