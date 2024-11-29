import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import logo from '@/assets/react.svg'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <img src={logo} alt="react" />
  </StrictMode>,
)
