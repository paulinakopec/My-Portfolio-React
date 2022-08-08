import React from 'react';
import './topbar.css';

const Topbar = () => {
  return (
    <div className='topbar'>
        <ul className="topList">
            <li className="topListItem"><a href="#i" className="link">HOME</a></li>
            <li className="topListItem"><a href="#s" className="link">SKILLS</a></li>
            <li className="topListItem"><a href="#pl" className="link">PROJECTS</a></li>
            <li className="topListItem"><a href="#c" className="link">CONTACT</a></li>
        </ul>
    </div>
  )
}

export default Topbar