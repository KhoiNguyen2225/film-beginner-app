import React, { useRef, useState } from 'react'

import bl1 from '../../assets/images/backlighting/alice-kotlyarenko-9nmReTKwQ3U-unsplash.webp'
import bl2 from '../../assets/images/backlighting/fantine-chance-HfHn0lFaeD8-unsplash.webp'
import bl3 from '../../assets/images/backlighting/tuaans-MKUa6AITtq0-unsplash.webp'
import sil1 from '../../assets/images/silhouettes/000055.webp'
import sil2 from '../../assets/images/silhouettes/san-htun-DEYsVK8qcRs-unsplash.webp'
import sil3 from '../../assets/images/silhouettes/sergio-kian-qio49nsUBII-unsplash.webp'

export default function LightingPage() {
  const backlightingGallery = [
    { src: bl1, alt: 'Backlighting 1' },
    { src: bl2, alt: 'Backlighting 2' },
    { src: bl3, alt: 'Backlighting 3' },
  ]

  const silhouettesGallery = [
    { src: sil1, alt: 'Silhouette 1' },
    { src: sil2, alt: 'Silhouette 2' },
    { src: sil3, alt: 'Silhouette 3' },
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
      <h1 className="text-4xl font-bold">Lighting</h1>
      <p className="max-w-3xl text-justify text-slate-700">Techniques for using light creatively and avoiding exposure pitfalls.</p>

      <div className="space-y-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">Backlighting</h2>
          <p className="mt-2 text-justify text-slate-600">Place the light source behind your subject to create rim light and separation.</p>
          <p className="mt-2 text-justify text-sm text-slate-700"><strong>Tip:</strong> Golden hour backlight produces warm rim tones—try shooting then.</p>
          <div className="mt-4">
            <Carousel images={backlightingGallery} />
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">Silhouettes</h2>
          <p className="mt-2 text-justify text-slate-600">Expose for a bright background to render your subject as a dark shape for graphic impact.</p>
          <p className="mt-2 text-justify text-sm text-slate-700"><strong>Tip:</strong> Choose subjects with recognizable outlines (hats, profiles, trees).</p>
          <div className="mt-4">
            <Carousel images={silhouettesGallery} />
          </div>
        </div>
      </div>
    </section>
  )
}
