"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navbarRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        navbarRef.current.style.top = window.scrollY > 60 ? "6px" : "16px";
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header id="navbar" ref={navbarRef}>
      <nav className="nav-inner">
        <a href="#home" className="nav-logo">Syam</a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#journey">Journey</a></li>
          <li><a href="#mission">Mission</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#news">News</a></li>
        </ul>
        <Link href="/fund" className="btn-fund nav-cta">Fund my dream</Link>
        <button
          className="hamburger"
          id="hamburger"
          aria-label="Toggle menu"
          onClick={toggleMenu}
          ref={hamburgerRef}
        >
          <span style={mobileOpen ? { transform: "rotate(45deg) translate(5px, 5px)" } : {}}></span>
          <span style={mobileOpen ? { opacity: 0 } : {}}></span>
          <span style={mobileOpen ? { transform: "rotate(-45deg) translate(5px, -5px)" } : {}}></span>
        </button>
      </nav>
      <div className={`nav-mobile${mobileOpen ? " open" : ""}`} id="navMobile">
        <ul>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#journey" onClick={closeMenu}>Journey</a></li>
          <li><a href="#mission" onClick={closeMenu}>Mission</a></li>
          <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
          <li><a href="#news" onClick={closeMenu}>News</a></li>
          <li><Link href="/fund" className="btn-fund" onClick={closeMenu}>Fund my dream</Link></li>
        </ul>
      </div>
    </header>
  );
}
