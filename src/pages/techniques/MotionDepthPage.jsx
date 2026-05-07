import React from 'react'

export default function MotionDepthPage() {
  return (
    <section className="space-y-6 px-4 text-left">
      <h1 className="text-4xl font-bold">Motion & Depth</h1>
      <p className="max-w-3xl text-justify text-slate-700">Control motion and depth of field to tell different visual stories.</p>

      <div className="space-y-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">Shallow Depth of Field</h2>
          <p className="mt-2 text-justify text-slate-600">Use wide apertures (f/2.8 or wider) to blur backgrounds and isolate your subject.</p>
          <p className="mt-2 text-justify text-sm text-slate-700"><strong>Tip:</strong> Wider apertures need faster shutter speeds in bright light—adjust ISO or use ND filters.</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">Panning</h2>
          <p className="mt-2 text-justify text-slate-600">Follow a moving subject while using a slower shutter to blur the background and convey speed.</p>
          <p className="mt-2 text-justify text-sm text-slate-700"><strong>Tip:</strong> Practice smooth tracking and take many frames to increase keeper rate.</p>
        </div>
      </div>
    </section>
  )
}
