import React, {Component} from 'react';
import './topbar.css';

class Topbar extends Component {
  state = { clicked: false } 
  
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

  render () {
    return (
        <div className='topbar'>
            <div className="menuIcon" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={this.state.clicked ? "topList active" : "topList"}>
                <li className="topListItem"><a href="#i" className="link">HOME</a></li>
                <li className="topListItem"><a href="#s" className="link">SKILLS</a></li>
                <li className="topListItem"><a href="#pl" className="link">PROJECTS</a></li>
                <li className="topListItem"><a href="#c" className="link">CONTACT</a></li>
            </ul>
        </div>
    )
  }
}

export default Topbar