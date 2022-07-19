import React from 'react'
import './intro.css'
import Me from '../../img/me.png'
import Arrow from '../../img/arrow.png'

const Intro = () => {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <div className="i-left-upper-wrapper">
                  <h2 className="i-intro">Hi! My name is</h2>
                  <h1 className="i-name">Paulina Kopec</h1>
                  <div className="i-title">
                      <div className="i-title-wrapper">
                          <div className="i-title-item">Front-End Developer</div>
                          <div className="i-title-item">Postgraduate Student</div>
                          <div className="i-title-item">Financial Analyst</div>
                          <div className="i-title-item">Self-taught Ceramist</div>
                          <div className="i-title-item">Basketball Player</div>
                      </div>
                  </div>
                  <p className="i-desc">
                      Self-taught <b>Front-End Developer with a strong financial background</b> in Commercial Controlling in FMCG, Audit in Big4 and Accounting in Automotive company. 
                      <b> Postgraduate student of Front-End Development with React</b> at Kozminski University. Master and Bachelor graduate of Finance and Accounting course at Warsaw School of Economics. 
                      Open-minded and a fast learner with <b>good analytical and problem solving skills.</b>
                  </p>
                </div>
                <div className="i-left-lower-wrapper">
                  <a href="#s" className="lets-connect-link"><p className="i-text-connect">Find out more about me</p></a>
                  <a href="#s"><img src = {Arrow} alt="" className="i-arrow"/></a>
                </div>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img"/>
        </div>
    </div>
  )
}

export default Intro
