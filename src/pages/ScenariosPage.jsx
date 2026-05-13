const SCENARIOS = [
  {
    id: 'sunny-street',
    title: 'Sunny Street',
    difficulty: 'Easy',
    description: 'Bright midday sunlight with strong shadows and high contrast. Focus on managing highlights and shadows.',
    context: 'Midday outdoor shooting',
    challenges: ['Harsh shadows', 'High contrast', 'Bright highlights'],
    settings: {
      aperture: 'f/8 to f/16',
      shutter: '1/250 to 1/1000',
      iso: '100 to 200',
    },
    tips: 'Use narrow apertures to keep depth of field deep. Watch for blown-out highlights in bright areas.',
    gradient: 'from-amber-300 via-orange-200 to-sky-300',
  },
  {
    id: 'cloudy-day',
    title: 'Cloudy Day',
    difficulty: 'Easy',
    description: 'Soft, diffused light with minimal shadows. Great for learning consistent exposure.',
    context: 'Overcast outdoor shooting',
    challenges: ['Flat lighting', 'Low contrast', 'Muted colors'],
    settings: {
      aperture: 'f/4 to f/8',
      shutter: '1/125 to 1/500',
      iso: '200 to 400',
    },
    tips: 'Embrace the soft light. Look for compositional elements since shadows won\'t help separate subjects.',
    gradient: 'from-slate-300 via-slate-200 to-cyan-200',
  },
  {
    id: 'golden-hour',
    difficulty: 'Intermediate',
    title: 'Golden Hour',
    description: 'Low-angle warm light during sunrise or sunset. Beautiful but changing quickly.',
    context: 'Early morning or late afternoon',
    challenges: ['Changing light', 'Warm color cast', 'Long shadows'],
    settings: {
      aperture: 'f/2.8 to f/8',
      shutter: '1/60 to 1/500',
      iso: '100 to 400',
    },
    tips: 'Work fast—light changes every minute. Meter on the subject, not the sky.',
    gradient: 'from-orange-400 via-yellow-200 to-pink-300',
  },
  {
    id: 'indoor-cafe',
    title: 'Indoor Cafe',
    difficulty: 'Intermediate',
    description: 'Warm interior light with lower intensity. Requires careful metering and steady hands.',
    context: 'Indoor ambient lighting',
    challenges: ['Low light', 'Mixed color temps', 'Motion blur risk'],
    settings: {
      aperture: 'f/1.4 to f/4',
      shutter: '1/15 to 1/125',
      iso: '400 to 800',
    },
    tips: 'Use faster shutter speeds if hand-holding. Consider wider apertures for light gathering.',
    gradient: 'from-amber-900 via-amber-700 to-orange-500',
  },
  {
    id: 'backlit-scene',
    difficulty: 'Intermediate',
    title: 'Backlit Scene',
    description: 'Light source behind the subject creates silhouettes or rim-lit edges.',
    context: 'Subject between camera and light source',
    challenges: ['Exposure metering', 'Silhouettes', 'Flare risk'],
    settings: {
      aperture: 'f/2.8 to f/8',
      shutter: '1/125 to 1/500',
      iso: '100 to 400',
    },
    tips: 'Meter on the subject or use exposure compensation to avoid underexposure.',
    gradient: 'from-amber-200 via-yellow-100 to-slate-400',
  },
  {
    id: 'night-lights',
    title: 'Night with Lights',
    difficulty: 'Advanced',
    description: 'Low light with artificial light sources. Requires pushing film speed and accepting grain.',
    context: 'Urban nighttime or lit scenes',
    challenges: ['Very low light', 'Motion blur', 'High grain', 'Mixed lighting'],
    settings: {
      aperture: 'f/1.4 to f/2.8',
      shutter: '1/15 to 2s',
      iso: '400 to 800',
    },
    tips: 'Embrace the grain—it\'s part of film\'s character. Use tripod if possible.',
    gradient: 'from-slate-900 via-indigo-900 to-blue-900',
  },
]

export default function ScenariosPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="font-serif text-4xl font-bold">Practice Scenarios</h1>
        <p className="text-justify text-slate-700">
          Different shooting situations to help you understand how light and settings work together. Each scenario presents a real-world challenge.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SCENARIOS.map((scenario) => (
          <article
            key={scenario.id}
            className="group rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
          >
            {/* Gradient header */}
            <div
              className={`h-24 bg-gradient-to-br ${scenario.gradient}`}
            />

            {/* Content */}
            <div className="p-4 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-lg font-semibold text-slate-900">{scenario.title}</h2>
                <span className={[
                  'text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap',
                  scenario.difficulty === 'Easy' && 'bg-green-100 text-green-700',
                  scenario.difficulty === 'Intermediate' && 'bg-amber-100 text-amber-700',
                  scenario.difficulty === 'Advanced' && 'bg-red-100 text-red-700',
                ].join(' ')}>
                  {scenario.difficulty}
                </span>
              </div>

              <p className="text-justify text-sm text-slate-600">{scenario.description}</p>

              {/* Challenges */}
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Challenges</p>
                <div className="flex flex-wrap gap-1">
                  {scenario.challenges.map((challenge) => (
                    <span
                      key={challenge}
                      className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                    >
                      {challenge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recommended settings */}
              <div className="rounded-lg bg-slate-50 p-2 space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Suggested settings</p>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <p className="text-justify text-slate-500">Aperture</p>
                    <p className="text-justify font-semibold text-slate-900">{scenario.settings.aperture}</p>
                  </div>
                  <div>
                    <p className="text-justify text-slate-500">Shutter</p>
                    <p className="text-justify font-semibold text-slate-900">{scenario.settings.shutter}</p>
                  </div>
                  <div>
                    <p className="text-justify text-slate-500">ISO</p>
                    <p className="text-justify font-semibold text-slate-900">{scenario.settings.iso}</p>
                  </div>
                </div>
              </div>

              {/* Tip */}
              <div className="border-t border-slate-200 pt-2">
                <p className="text-justify text-xs text-slate-600"><span className="font-semibold">💡 Tip:</span> {scenario.tips}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
