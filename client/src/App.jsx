import React from 'react'
import AppRoutes from './routes/AppRoutes'
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <ThemeProvider>
      <div style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
        <ThemeToggle />
        <AppRoutes />
      </div>
    </ThemeProvider>
  )
}

export default App
