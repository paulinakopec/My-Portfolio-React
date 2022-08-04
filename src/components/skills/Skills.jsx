import React from 'react'
import './skills.css'
import {MyTagCloud} from '../tagCloud/TagCloud'

const Skills = () => {
  return (
    <div className="s" id="s">
      <h2 className="s-title">Skills</h2>
      <div className="s-container">
        <div className="s-left">
          <h3 className="s-left-title">Technologies</h3>
          <div className="s-left-container" style={{position: "relative"}}>
            <MyTagCloud></MyTagCloud>
          </div>
        </div>
        <div className="s-right">
          <h3 className="s-right-title">Soft skills and other</h3>
          <div className="s-right-container">
            <div className="s-right-skill"><p className ="s-right-skill-text">Advanced English</p></div>
            <div className="s-right-skill"><p className ="s-right-skill-text">Native Polish</p></div>
            <div className="s-right-skill"><p className ="s-right-skill-text">Open - minded</p></div>
            <div className="s-right-skill"><p className ="s-right-skill-text">Good analytical skills</p></div>
            <div className="s-right-skill"><p className ="s-right-skill-text">Team player</p></div>
            <div className="s-right-skill"><p className ="s-right-skill-text">Fast learner</p></div>
            <div className="s-right-skill"><p className ="s-right-skill-text">Good communication skills</p></div>
            <div className="s-right-skill"><p className ="s-right-skill-text">Creative mind</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills