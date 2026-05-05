import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import ExposureSimulatorPage from './pages/ExposureSimulatorPage'
import HomePage from './pages/HomePage'
import ScenariosPage from './pages/ScenariosPage'
import TechniquesPage from './pages/TechniquesPage'

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
            <NavLink to="/techniques" className={navLinkClass}>
              Techniques
            </NavLink>
            <NavLink to="/scenarios" className={navLinkClass}>
              Scenarios
            </NavLink>
          </nav>
        </header>

        <main className="mx-auto w-full max-w-6xl px-4 py-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/simulator" element={<ExposureSimulatorPage />} />
            <Route path="/techniques" element={<TechniquesPage />} />
            <Route path="/scenarios" element={<ScenariosPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
