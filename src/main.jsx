import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import store from './store/index.js'
import { ThemeProvider } from '@mui/material'
import theme from './utils/theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme} >
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
