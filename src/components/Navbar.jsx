import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>AVASH</h2>
          <span>نوین آوش</span>
        </div>
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home">خانه</a></li>
          <li><a href="#about">درباره ما</a></li>
          <li><a href="#services">خدمات</a></li>
          <li><a href="#projects">پروژه‌ها</a></li>
          <li><a href="#vision">چشم‌انداز</a></li>
          <li><a href="#contact">تماس با ما</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
