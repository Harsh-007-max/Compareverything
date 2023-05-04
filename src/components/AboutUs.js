import React, { useState, useEffect } from 'react'
import './CSS/AboutUs.css';
import AboutImage from './Images/about-us-top-bar.jpg';
function AboutUs(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3005/login")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  const backgroundStyle={
    backgroundImage: `url(${AboutImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '300px',
    width: '100%',
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
  };
  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // black with 50% opacity
    position: 'absolute',
    width: '100%',
    height: '275px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <>
    <div className="about-us" style={backgroundStyle}>
      <div className="about-us-content" style={overlayStyle}>
        <htmlH1>`About Us`</htmlH1>
        
      </div>
    </div>
    {data.map((item, index) => (
      <div key={index} className="about-us-section">

      </div>
    ))}
    </>
  )
}

export default AboutUs
