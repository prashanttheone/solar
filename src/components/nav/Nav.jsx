import React from 'react';
import "./nav.css";

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About Us', link: '/about' },
  { name: 'Solar Pump', link: '/solar-pump' },
  { name: 'Power Plant', link: '/power-plant' },
  { name: 'Blog', link: '/blog' },
  { name: 'FAQ\'s', link: '/faqs' },
  { name: 'Support', link: '/support' },
  { name: 'Contact Us', link: '/contact' }
];

function Nav() {
  return (
    <nav className="nav-container">
      {navItems.map((item, index) => (
        <a key={index} href={item.link} className="nav-item">
          {item.name}
        </a>
      ))}
    </nav>
  );
}

export default Nav;
