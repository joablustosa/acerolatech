import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import Seo from '../components/Seo'

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Seo />
      <Header />
      <main className="w-full flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
