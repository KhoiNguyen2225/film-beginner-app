import React, { useState, useEffect } from 'react'
import { BrowserRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import ExposureSimulatorPage from './pages/ExposureSimulatorPage'
import HomePage from './pages/HomePage'
import ScenariosPage from './pages/ScenariosPage'
// TechniquesPage removed — categories are separate pages
import CompositionPage from './pages/techniques/CompositionPage'
import LightingPage from './pages/techniques/LightingPage'
import MotionDepthPage from './pages/techniques/MotionDepthPage'
import FilmHandlingPage from './pages/techniques/FilmHandlingPage'

const navLinkClass = ({ isActive }) =>
  [
    'rounded-md px-3 py-2 text-sm font-semibold transition-colors',
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
      className="relative pb-2"
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
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <nav className="mx-auto flex w-full max-w-6xl flex-wrap gap-8 px-4 py-4">
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
          </nav>
        </header>

        <main className="mx-auto w-full max-w-6xl px-4 py-10">
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
        </main>
      </div>
    </BrowserRouter>
  )
}
