import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout'
import Home from './pages/Home'
import Servicos from './pages/Servicos'
import Metodologia from './pages/Metodologia'
import Sobre from './pages/Sobre'
import Showcase from './pages/Showcase'
import Monitriip from './pages/Monitriip'
import Contato from './pages/Contato'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="metodologia" element={<Metodologia />} />
          <Route path="monitriip" element={<Monitriip />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="showcase" element={<Showcase />} />
          <Route path="contato" element={<Contato />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
