import React from 'react';
import './SideBarToggle.css';

const SideBarToggle = (props) => (
    <button className="sidebarToggle" onClick={props.click}>
        <div className="sidebarline"></div>
        <div className="sidebarline"></div>
        <div className="sidebarline"></div>
    </button>
);

export default SideBarToggle;