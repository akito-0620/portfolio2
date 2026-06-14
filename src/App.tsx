import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import DynamicProjectPage from './pages/DynamicProjectPage'
import SectionPage from './pages/SectionPage'
import PrintPage from './pages/PrintPage'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* PDF/print linear view — no nav chrome */}
        <Route path="/print" element={<PrintPage />} />

        {/* Normal browsing with nav */}
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path=":projectId" element={<DynamicProjectPage />} />
          <Route path=":projectId/:sectionId" element={<SectionPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
