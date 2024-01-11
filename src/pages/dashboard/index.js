import React from 'react';
import './index.scss'
import NavBar from '../../component/navBarMenu';

const Dashboard = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <div className='home-navbar'>
          <NavBar />
        </div>
        <div className='home-section'>
          <div className='home-section-left'>

          </div>
          <div className='home-section-right'>

          </div>
        </div>
        <div className='home-text'>
            <h3>
                Hello
            </h3>
            <h1>
              I'm Suresh Thangavel
            </h1>
            <h3>
              FrontEnd Developer
            </h3>
            <h4>
              Contact Me
            </h4>
          </div>
      </div>
    </div>
  )
}

export default Dashboard
