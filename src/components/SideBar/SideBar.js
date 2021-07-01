import React from 'react';
import './SideBar.css';

const SideBar = props => {
    let drawerClasses = ['sidebar'];

    if(props.show) {
        drawerClasses = ['sidebar open'];
    }

    return(
        <nav className={drawerClasses}>
            <ul>
                <li><a href="#About">About Me</a></li>
                <li><a href="#Portfolio">Portfolio</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default SideBar;