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
      <h1 className="font-serif text-4xl font-bold">Composition</h1>
      <p className="max-w-3xl text-justify text-slate-700">Here's the thing about composition—it's really just about deciding where to put things in your frame. Once you start thinking about it, you'll see it everywhere. Let me walk you through some simple tricks that'll make your photos feel more intentional.</p>

      <div className="space-y-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold">Rule of Thirds</h2>
          <p className="mt-2 text-justify text-slate-600">Imagine your frame divided into nine equal boxes, like a tic-tac-toe board. Instead of putting your subject dead center, place it along one of those lines or at the corners where they meet. Sounds weird, but it just feels better to your eye.</p>
          <p className="mt-2 text-justify text-sm text-slate-700"><strong>Try it with:</strong> Landscapes where you want to show sky and ground, portraits where you're leaving some breathing room, even street scenes where the subject isn't the only interesting thing.</p>
          <p className="mt-1 text-justify text-sm text-slate-700"><strong>Pro move:</strong> Most cameras have a grid overlay you can turn on in the viewfinder—it's literally there to help you with this.</p>
          <div className="mt-4">
            <Carousel images={rotGallery} />
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold">Leading Lines</h2>
          <p className="mt-2 text-justify text-slate-600">You know how your eye naturally follows a path? Roads, train tracks, fence lines, shadows—anything that has direction. Use that. Point those lines at your subject and they'll guide whoever's looking at your photo right where you want them to look.</p>
          <p className="mt-2 text-justify text-sm text-slate-700"><strong>Look for them in:</strong> A winding road leading to a house, architectural lines that point to a person, or even the edge of a shadow cutting across a landscape.</p>
          <div className="mt-4">
            <Carousel images={llGallery} />
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold">Framing</h2>
          <p className="mt-2 text-justify text-slate-600">Here's a subtle one that looks really cool: use something in the foreground—a window, a doorway, some branches, whatever—to create a frame within your frame around your actual subject. It adds depth and draws attention to what matters.</p>
          <p className="mt-2 text-justify text-sm text-slate-700"><strong>Works great for:</strong> Portraits where you want to show someone in their environment, or any shot where you want to add that sense of looking into a scene rather than just at it.</p>
          <div className="mt-4">
            <Carousel images={frGallery} />
          </div>
        </div>
      </div>
    </section>
  )
}
