import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Menu from './App.jsx'



createRoot(document.getElementById('root')).render(
  <App />
)

createElement(document.getElementById('menu-div')).render(
  <Menu />
)
