import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import ObserverProvider from './component/observerprovide';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ObserverProvider>
      <App />
    </ObserverProvider>
  </StrictMode>,
)
