import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Prefetch the HomePage chunk on idle so it doesn't block initial render
if (typeof window !== 'undefined') {
  const prefetchHome = () => import('./pages/HomePage')
  if ('requestIdleCallback' in window) {
    // @ts-ignore
    requestIdleCallback(() => {
      prefetchHome().catch(() => {})
    })
  } else {
    setTimeout(() => {
      prefetchHome().catch(() => {})
    }, 2000)
  }
}
