
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import SearchContextShare from './context/SearchContextShare.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <SearchContextShare>
        <App />
      </SearchContextShare>
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
