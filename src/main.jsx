import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Triki from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Triki />
  </StrictMode>,
)
