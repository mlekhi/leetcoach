import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <a href="#home" className="menu-link">Home</a>
        </li>
        <li className="menu-item">
          <a href="#features" className="menu-link">Features</a>
        </li>
        <li className="menu-item">
          <a href="#pricing" className="menu-link">Pricing</a>
        </li>
        <li className="menu-item">
          <a href="#contact" className="menu-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;