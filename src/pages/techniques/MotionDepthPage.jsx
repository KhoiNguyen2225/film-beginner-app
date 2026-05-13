import React from 'react'

export default function MotionDepthPage() {
  return (
    <section className="space-y-6 px-4 text-left">
      <h1 className="font-serif text-4xl font-bold">Motion & Depth</h1>
      <p className="max-w-3xl text-justify text-slate-700">Your camera sees differently than your eyes. You can use that to your advantage. Let me show you how to play with depth and motion to tell better visual stories.</p>

      <div className="space-y-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold">Shallow Depth of Field</h2>
          <p className="mt-2 text-justify text-slate-600">You know that look where the subject is tack sharp but the background is just a beautiful blur? That's depth of field, and it's one of the best creative tools you have. Open your aperture up (that's a wider f-stop like f/2.8 or f/1.4) and everything behind your subject gets dreamy and blurred.</p>
          <p className="mt-2 text-justify text-sm text-slate-700"><strong>Here's the catch:</strong> Wider apertures need faster shutter speeds or lower ISO in bright light, or you'll overexpose. If you're shooting in daylight with a very wide aperture, you might need an ND filter to slow down your shutter. But it's worth it—that separation is powerful.</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold">Panning</h2>
          <p className="mt-2 text-justify text-slate-600">Here's a fun technique: track a moving subject as it comes toward or across you, using a slower shutter speed. Keep your camera's motion matching theirs. The subject stays relatively sharp but the background blurs to hell. It screams speed and motion in a way a frozen moment just can't.</p>
          <p className="mt-2 text-justify text-sm text-slate-700"><strong>Real talk:</strong> It takes practice. You'll probably mess up a bunch at first. But that's the fun part. Take dozens of frames, follow through smoothly, and you'll nail it eventually. Once you get one good panning shot, you'll be hooked.</p>
        </div>
      </div>
    </section>
  )
}
