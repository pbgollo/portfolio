import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss'
import { resetScrollOnLoad } from './utils/scrollRestoration'
import App from './App.tsx'

resetScrollOnLoad()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
