import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider } from '@mantine/core'
import "@mantine/core/styles.css"
import './assets/styles/index.css'
import { BrowserRouter } from 'react-router'

function Root() {


  // return jsx
  return (
    <StrictMode>
      <BrowserRouter>
        <MantineProvider defaultColorScheme="light">
          <App />
        </MantineProvider>
      </BrowserRouter>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')!).render(<Root />)
