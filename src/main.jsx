import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/barfiller.css';
import './assets/css/nowfont.css';
import './assets/css/rockville.css';
import './assets/css/magnific-popup.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/slicknav.min.css';
import './assets/css/style.css';
  


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
