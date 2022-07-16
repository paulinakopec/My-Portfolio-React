import React from 'react'
import './about.css'
import photography from '../../img/photography.jpg'
import award from '../../img/award.jpeg'

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src={photography} alt="" className="a-img" />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">It is a long established fact that a reader will be distracted by the readable content.</p>
          <p className="a-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Blanditiis nobis autem cumque rerum tempore atque minus laudantium eius eligendi. 
            Ratione sapiente, repellat dolores mollitia quasi maiores illo recusandae sed laborum.
          </p>
          <div className="a-award">
            <img src={award} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">Best Website Award</h4>
              <p className="a-award-desc">
                Sint ipsa quam beatae quo suscipit maiores dolore architecto autem numquam voluptates.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
