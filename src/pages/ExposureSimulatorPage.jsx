import { useMemo, useState } from 'react'

const APERTURES = [1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22]
const SHUTTER_SPEEDS = [
  { label: '1/2000', seconds: 1 / 2000 },
  { label: '1/1000', seconds: 1 / 1000 },
  { label: '1/500', seconds: 1 / 500 },
  { label: '1/250', seconds: 1 / 250 },
  { label: '1/125', seconds: 1 / 125 },
  { label: '1/60', seconds: 1 / 60 },
  { label: '1/30', seconds: 1 / 30 },
  { label: '1/15', seconds: 1 / 15 },
  { label: '1/8', seconds: 1 / 8 },
  { label: '1/4', seconds: 1 / 4 },
  { label: '1/2', seconds: 1 / 2 },
  { label: '1s', seconds: 1 },
]
const ISOS = [100, 200, 400, 800, 1600, 3200, 6400]

const SCENARIOS = {
  brightStreet: {
    label: 'Bright outdoor',
    targetEv: 15,
    image: '/scenes/bright-outdoor.webp',
    gradient: 'from-amber-300 via-orange-200 to-sky-300',
    description: 'Midday outdoor scene with lots of light.',
  },
  overcast: {
    label: 'Overcast walk',
    targetEv: 12,
    image: '/scenes/overcast-walk.jpg',
    gradient: 'from-slate-300 via-slate-200 to-cyan-200',
    description: 'Cloudy day with soft, even light.',
  },
  partlyCloudy: {
    label: 'Partly cloudy',
    targetEv: 13,
    image: '/scenes/partly-cloudy.jpg',
    gradient: 'from-blue-300 via-sky-200 to-slate-100',
    description: 'Sun breaks through clouds with shifting contrast.',
  },
  indoorCafe: {
    label: 'Indoor cafe',
    targetEv: 8,
    image: '/scenes/indoor-cafe.jpg',
    gradient: 'from-amber-900 via-amber-700 to-orange-500',
    description: 'Warm interior light, but much dimmer than outdoors.',
  },
  nightStreet: {
    label: 'Night street',
    targetEv: 4,
    image: '/scenes/night-street.jpg',
    gradient: 'from-slate-900 via-indigo-900 to-blue-900',
    description: 'Low-light scene with mixed practical lighting.',
  },
}

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

function getExposureFeedback(deltaEv) {
  if (deltaEv > 1.5) return 'Overexposed by a lot'
  if (deltaEv > 0.5) return 'Slightly overexposed'
  if (deltaEv < -1.5) return 'Underexposed by a lot'
  if (deltaEv < -0.5) return 'Slightly underexposed'
  return 'Balanced exposure'
}

function getDepthOfFieldHint(aperture) {
  if (aperture <= 2) return 'Very shallow depth of field'
  if (aperture <= 4) return 'Shallow depth of field'
  if (aperture <= 8) return 'Medium depth of field'
  return 'Deep depth of field'
}

function getMotionHint(shutterSeconds) {
  if (shutterSeconds <= 1 / 500) return 'Strong motion freeze'
  if (shutterSeconds <= 1 / 125) return 'Mostly frozen motion'
  if (shutterSeconds <= 1 / 30) return 'Visible motion blur'
  return 'Heavy motion blur risk'
}

function getNoiseHint(iso) {
  if (iso <= 200) return 'Very clean grain/noise'
  if (iso <= 800) return 'Moderate grain/noise'
  if (iso <= 1600) return 'Noticeable grain/noise'
  return 'Heavy grain/noise'
}

export default function ExposureSimulatorPage() {
  const [scenarioKey, setScenarioKey] = useState('brightStreet')
  const [apertureIndex, setApertureIndex] = useState(4)
  const [shutterIndex, setShutterIndex] = useState(4)
  const [isoIndex, setIsoIndex] = useState(0)
  const [imageLoadFailed, setImageLoadFailed] = useState({})

  const aperture = APERTURES[apertureIndex]
  const shutter = SHUTTER_SPEEDS[shutterIndex]
  const iso = ISOS[isoIndex]
  const scenario = SCENARIOS[scenarioKey]
  const shouldUseGradientFallback = !scenario.image || imageLoadFailed[scenarioKey]

  const computed = useMemo(() => {
    const evAtIso100 = Math.log2((aperture * aperture) / shutter.seconds)
    const exposureCompensationFromIso = Math.log2(iso / 100)
    const adjustedEv = evAtIso100 - exposureCompensationFromIso
    const deltaEv = adjustedEv - scenario.targetEv

    const brightness = clamp(1 + deltaEv * 0.22, 0.35, 1.85)
    const blurPx = clamp((shutter.seconds - 1 / 250) * 10, 0, 12)
    const grainOpacity = clamp((iso - 100) / 8000, 0.06, 0.55)

    return {
      evAtIso100,
      adjustedEv,
      deltaEv,
      brightness,
      blurPx,
      grainOpacity,
      exposureText: getExposureFeedback(deltaEv),
      dofText: getDepthOfFieldHint(aperture),
      motionText: getMotionHint(shutter.seconds),
      noiseText: getNoiseHint(iso),
    }
  }, [aperture, iso, scenario.targetEv, shutter.seconds])

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Exposure Triangle Simulator</h1>
        <p className="text-slate-700">
          Pick a scene, adjust aperture, shutter speed, and ISO, then observe
          how exposure and image character change.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="space-y-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold">Scene preset</h2>
          <div className="flex flex-wrap gap-2">
            {Object.entries(SCENARIOS).map(([key, value]) => (
              <button
                key={key}
                type="button"
                className={[
                  'rounded-md border px-3 py-2 text-sm font-medium transition-colors',
                  scenarioKey === key
                    ? 'border-slate-900 bg-slate-900 text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100',
                ].join(' ')}
                onClick={() => setScenarioKey(key)}
              >
                {value.label}
              </button>
            ))}
          </div>
          <p className="text-sm text-slate-600">{scenario.description}</p>

          <div className="relative h-80 overflow-hidden rounded-lg">
            {shouldUseGradientFallback ? (
              <div
                className={[
                  'absolute inset-0 bg-gradient-to-br',
                  scenario.gradient,
                ].join(' ')}
                style={{
                  filter: `brightness(${computed.brightness}) blur(${computed.blurPx}px)`,
                }}
              />
            ) : (
              <img
                src={scenario.image}
                alt={`${scenario.label} scene`}
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                  filter: `brightness(${computed.brightness}) blur(${computed.blurPx}px)`,
                }}
                onError={() => {
                  setImageLoadFailed((prev) => ({ ...prev, [scenarioKey]: true }))
                }}
              />
            )}
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.2)_0,rgba(255,255,255,0)_35%),repeating-radial-gradient(circle_at_center,rgba(0,0,0,0.08)_0,rgba(0,0,0,0.08)_1px,transparent_1px,transparent_3px)]"
              style={{ opacity: computed.grainOpacity }}
            />
            <div className="absolute bottom-3 left-3 rounded-md bg-white/85 px-2 py-1 text-xs font-semibold text-slate-800 backdrop-blur-sm">
              {computed.exposureText}
            </div>
          </div>
        </article>

        <article className="space-y-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold">Camera settings</h2>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-slate-700">
              Aperture: f/{aperture}
            </span>
            <input
              type="range"
              min="0"
              max={String(APERTURES.length - 1)}
              value={apertureIndex}
              onChange={(event) => setApertureIndex(Number(event.target.value))}
              className="w-full"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-slate-700">
              Shutter: {shutter.label}
            </span>
            <input
              type="range"
              min="0"
              max={String(SHUTTER_SPEEDS.length - 1)}
              value={shutterIndex}
              onChange={(event) => setShutterIndex(Number(event.target.value))}
              className="w-full"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-slate-700">ISO: {iso}</span>
            <input
              type="range"
              min="0"
              max={String(ISOS.length - 1)}
              value={isoIndex}
              onChange={(event) => setIsoIndex(Number(event.target.value))}
              className="w-full"
            />
          </label>

          <div className="grid gap-2 rounded-lg bg-slate-100 p-3 text-sm text-slate-700">
            <p>
              Target EV for scene: <span className="font-semibold">{scenario.targetEv}</span>
            </p>
            <p>
              Your adjusted EV: <span className="font-semibold">{computed.adjustedEv.toFixed(1)}</span>
            </p>
            <p>
              Difference: <span className="font-semibold">{computed.deltaEv.toFixed(1)} EV</span>
            </p>
          </div>
        </article>
      </div>

      <article className="grid gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm md:grid-cols-3">
        <p className="rounded-lg bg-slate-100 p-3 text-slate-700">
          <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
            Depth of field
          </span>
          <span className="mt-1 block font-semibold text-slate-900">
            {computed.dofText}
          </span>
        </p>
        <p className="rounded-lg bg-slate-100 p-3 text-slate-700">
          <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
            Motion rendering
          </span>
          <span className="mt-1 block font-semibold text-slate-900">
            {computed.motionText}
          </span>
        </p>
        <p className="rounded-lg bg-slate-100 p-3 text-slate-700">
          <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
            Grain and noise
          </span>
          <span className="mt-1 block font-semibold text-slate-900">
            {computed.noiseText}
          </span>
        </p>
      </article>
    </section>
  )
}
