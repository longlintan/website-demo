import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          小微科技
        </Link>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" style={isActive('/') ? { color: '#0066ff' } : {}}>首页</Link></li>
          <li><Link to="/products" style={isActive('/products') ? { color: '#0066ff' } : {}}>产品</Link></li>
          <li><Link to="/contact" style={isActive('/contact') ? { color: '#0066ff' } : {}}>联系我们</Link></li>
          <li><Link to="/contact" className="btn btn-primary">免费咨询</Link></li>
        </ul>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
