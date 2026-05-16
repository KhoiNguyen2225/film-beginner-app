import React, { Suspense, lazy, useState, useEffect } from 'react'
import { BrowserRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import mainLogo from './assets/main_logo.svg'

const HomePage = lazy(() => import('./pages/HomePage'))
const ExposureSimulatorPage = lazy(() => import('./pages/ExposureSimulatorPage'))
const ScenariosPage = lazy(() => import('./pages/ScenariosPage'))
const CompositionPage = lazy(() => import('./pages/techniques/CompositionPage'))
const LightingPage = lazy(() => import('./pages/techniques/LightingPage'))
const MotionDepthPage = lazy(() => import('./pages/techniques/MotionDepthPage'))
const FilmHandlingPage = lazy(() => import('./pages/techniques/FilmHandlingPage'))

const navLinkClass = ({ isActive }) =>
  [
    'rounded-md px-3 py-2 text-sm font-semibold transition-colors',
    isActive
      ? 'bg-slate-900 text-white'
      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900',
  ].join(' ')

const mobileNavLinkClass = ({ isActive }) =>
  [
    'rounded-md px-3 py-2 text-base font-semibold transition-colors',
    isActive
      ? 'bg-slate-900 text-white'
      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900',
  ].join(' ')

function NotFoundPage() {
  return (
    <section className="space-y-3">
      <h1 className="text-3xl font-bold">Page Not Found</h1>
      <p className="text-slate-700">
        The page you requested does not exist.
      </p>
    </section>
  )
}

function TechniquesDropdown() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // close menu on navigation
    setOpen(false)
  }, [location.pathname])

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <button
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((s) => !s)}
        className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      >
        Techniques
      </button>

      <div
        className={`${open ? 'visible' : 'invisible'} absolute left-0 top-full z-50 mt-0 w-56 rounded-md border border-slate-200 bg-white shadow-lg`}
      >
        <nav className="flex flex-col p-2">
          <NavLink to="/techniques/composition" className={navLinkClass} onClick={() => setOpen(false)}>
            Composition
          </NavLink>
          <NavLink to="/techniques/lighting" className={navLinkClass} onClick={() => setOpen(false)}>
            Lighting
          </NavLink>
          <NavLink to="/techniques/motion-depth" className={navLinkClass} onClick={() => setOpen(false)}>
            Motion & Depth
          </NavLink>
          <NavLink to="/techniques/film-handling" className={navLinkClass} onClick={() => setOpen(false)}>
            Film Handling
          </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Analytics />
        <header className="border-b border-slate-200 bg-white">
          <nav className="relative mx-auto flex w-full max-w-6xl items-center px-4 py-4">
            <NavLink to="/" end className="shrink-0" aria-label="Home">
              <img src={mainLogo} alt="Main logo" className="h-auto w-40" />
            </NavLink>

            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              onClick={() => setMobileMenuOpen((s) => !s)}
              className="ml-auto flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 text-slate-700 transition-colors hover:bg-slate-100 min-[900px]:hidden"
            >
              <span className="sr-only">Toggle navigation menu</span>
              <span className="relative block h-5 w-5">
                <span
                  className={[
                    'absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-current transition-transform duration-300',
                    mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5 rotate-0',
                  ].join(' ')}
                />
                <span
                  className={[
                    'absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-current transition-all duration-300',
                    mobileMenuOpen ? 'opacity-0' : 'opacity-100',
                  ].join(' ')}
                />
                <span
                  className={[
                    'absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-current transition-transform duration-300',
                    mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5 rotate-0',
                  ].join(' ')}
                />
              </span>
            </button>

            <div className="ml-4 hidden flex-wrap items-center gap-2 min-[900px]:absolute min-[900px]:left-1/2 min-[900px]:ml-0 min-[900px]:flex min-[900px]:-translate-x-1/2">
              <NavLink to="/" end className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/simulator" className={navLinkClass}>
                Exposure Simulator
              </NavLink>
              <TechniquesDropdown />
              <NavLink to="/scenarios" className={navLinkClass}>
                Scenarios
              </NavLink>
            </div>

            <div
              id="mobile-nav-menu"
              className={[
                'absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden border-y border-slate-200 bg-white transition-all duration-300 ease-out min-[900px]:hidden',
                mobileMenuOpen
                  ? 'max-h-[32rem] translate-y-0 opacity-100'
                  : 'pointer-events-none max-h-0 -translate-y-2 opacity-0',
              ].join(' ')}
            >
              <nav className="flex flex-col gap-2 p-4">
                <NavLink to="/" end className={mobileNavLinkClass} onClick={() => setMobileMenuOpen(false)}>
                  Home
                </NavLink>
                <NavLink to="/simulator" className={mobileNavLinkClass} onClick={() => setMobileMenuOpen(false)}>
                  Exposure Simulator
                </NavLink>
                <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Techniques</p>
                <NavLink to="/techniques/composition" className={mobileNavLinkClass} onClick={() => setMobileMenuOpen(false)}>
                  Composition
                </NavLink>
                <NavLink to="/techniques/lighting" className={mobileNavLinkClass} onClick={() => setMobileMenuOpen(false)}>
                  Lighting
                </NavLink>
                <NavLink to="/techniques/motion-depth" className={mobileNavLinkClass} onClick={() => setMobileMenuOpen(false)}>
                  Motion & Depth
                </NavLink>
                <NavLink to="/techniques/film-handling" className={mobileNavLinkClass} onClick={() => setMobileMenuOpen(false)}>
                  Film Handling
                </NavLink>
                <NavLink to="/scenarios" className={mobileNavLinkClass} onClick={() => setMobileMenuOpen(false)}>
                  Scenarios
                </NavLink>
              </nav>
            </div>
          </nav>
        </header>

        <main className="mx-auto w-full max-w-6xl px-4 py-10">
          <Suspense fallback={<div className="py-10 text-center text-slate-600">Loading page...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/simulator" element={<ExposureSimulatorPage />} />
              {/* Techniques overview removed; individual category routes remain */}
              <Route path="/techniques/composition" element={<CompositionPage />} />
              <Route path="/techniques/lighting" element={<LightingPage />} />
              <Route path="/techniques/motion-depth" element={<MotionDepthPage />} />
              <Route path="/techniques/film-handling" element={<FilmHandlingPage />} />
              <Route path="/scenarios" element={<ScenariosPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  )
}
