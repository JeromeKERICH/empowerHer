import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import ShopPage from './pages/Shop'
import About from './pages/About'
import SponsorPage from './pages/Sponsor'
import CartPage from './pages/Cart'
import SponsorSupportPage from './pages/SponsorPage'
import ContactPage from './pages/Contact'

export default function Router() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/sponsor" element={<SponsorPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/donate" element={<SponsorSupportPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        
        
      </Routes>
    <Footer/>
    
    </BrowserRouter>
  )
}
