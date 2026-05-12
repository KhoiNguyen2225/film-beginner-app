import React, { useEffect, useRef, useState } from 'react'

import rot1 from '../../assets/images/rule_of_thirds/justin-main-lqDEShklfBc-unsplash.webp'
import rot2 from '../../assets/images/rule_of_thirds/morgane-le-breton-gqeE7WtCekQ-unsplash.webp'
import rot3 from '../../assets/images/rule_of_thirds/serhii-maksymiv-gtTvzktprn0-unsplash.webp'
import ll1 from '../../assets/images/leading_line/birk-enwald-jS0w5jYWvXA-unsplash.webp'
import ll2 from '../../assets/images/leading_line/timothy-werner-hQR-ORv31uI-unsplash.webp'
import fr1 from '../../assets/images/framing/pine-watt-pF3BfaLGhqw-unsplash.webp'
import fr2 from '../../assets/images/framing/enes-karabacak-SggekubkGaU-unsplash.webp'

export default function CompositionPage() {
  const rotGallery = [
    { src: rot1, alt: 'Rule of Thirds 1' },
    { src: rot2, alt: 'Rule of Thirds 2' },
    { src: rot3, alt: 'Rule of Thirds 3' },
  ]

  const llGallery = [
    { src: ll1, alt: 'Leading Lines 1' },
    { src: ll2, alt: 'Leading Lines 2' },
  ]

  const frGallery = [
    { src: fr1, alt: 'Framing 1' },
    { src: fr2, alt: 'Framing 2' },
  ]

  function Carousel({ images }) {
    const [index, setIndex] = useState(0)
    const ref = useRef(null)

    function prev() {
      setIndex((i) => (i - 1 + images.length) % images.length)
    }
    function next() {
      setIndex((i) => (i + 1) % images.length)
    }

    return (
      <div
        ref={ref}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') prev()
          if (e.key === 'ArrowRight') next()
        }}
        className="mt-4"
      >
        <div className="relative rounded-md flex items-center justify-center">
          <img src={images[index].src} alt={images[index].alt} className="max-w-full max-h-96 rounded-md object-contain shadow-sm" />

          <button
            type="button"
            aria-label="Previous"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Next"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
          >
            ›
          </button>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2">
          {images.map((g, i) => (
            <button
              key={g.alt}
              type="button"
              onClick={() => setIndex(i)}
              className={['overflow-hidden rounded-md transition-ring', i === index ? 'ring-2 ring-slate-900' : 'ring-1 ring-transparent'].join(' ')}
            >
              <img src={g.src} alt={g.alt} className="h-12 w-20 object-cover" />
            </button>
          ))}
        </div>
      </div>
    )
  }

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
          <div className="mt-4">
            <Carousel images={rotGallery} />
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">Leading Lines</h2>
          <p className="mt-2 text-justify text-slate-600">Use roads, rails, shadows or architectural lines to guide the viewer to your subject.</p>
          <p className="mt-2 text-justify text-sm text-slate-700"><strong>When to use:</strong> Landscapes, architecture, street.</p>
          <div className="mt-4">
            <Carousel images={llGallery} />
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">Framing</h2>
          <p className="mt-2 text-justify text-slate-600">Use foreground elements like windows, doorways, or branches to create a frame around your subject.</p>
          <p className="mt-2 text-justify text-sm text-slate-700"><strong>When to use:</strong> Portraits and environmental shots.</p>
          <div className="mt-4">
            <Carousel images={frGallery} />
          </div>
        </div>
      </div>
    </section>
  )
}
