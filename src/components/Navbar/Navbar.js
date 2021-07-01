import React from 'react';
import SideBarToggle from '../SideBar/SideBarToggle';
import './Navbar.css';

const Navbar = (props) => {
  return (
    <header className="navbar" id="Navbar">
      <nav className="navbar_nav">
        <div className="togglesidebar">
          <SideBarToggle click={props.handleSideBarToggle}/>
        </div>
        <div className="navbar_name">
          <a href="#Navbar">Henry DelGlitch</a>
        </div>
        <div className="seperate"></div>
        <div className="navbar_items">
          <ul>
            <li><a href="#About">About</a></li>
            <li><a href="#Portfolio">Portfolio</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;