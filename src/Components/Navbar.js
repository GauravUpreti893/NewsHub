import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
export default function Navbar(props) {
  let mode  = props.mode;
  let title = props.title;
  const [customcolor, setcustomcolor] = useState(props.mode === 'Light Mode' ? {
    backgroundColor: '#1F1F1F',
    color: 'white'
  }:{
    backgroundColor: '#F8F9FA',
    color: 'black'
  });
  const togglefunction = () => {
    if (props.mode === 'Light Mode') {
      setcustomcolor({
        backgroundColor: '#F8F9FA',
        color: 'black'
      });
      document.getElementById('navc').classList.remove('addtonav');
    }
    else {
      setcustomcolor({
        backgroundColor: '#1F1F1F',
        color: 'white'
      });
      document.getElementById('navc').classList.add('addtonav');
    }
    props.togglemode();
  }
  const removeclasses = () => {
    document.getElementById('generallink').classList.remove('active');
    document.getElementById('businesslink').classList.remove('active');
    document.getElementById('entertainmentlink').classList.remove('active');
    document.getElementById('healthlink').classList.remove('active');
    document.getElementById('sciencelink').classList.remove('active');
    document.getElementById('sportslink').classList.remove('active');
    document.getElementById('technologylink').classList.remove('active');
    document.getElementById('aboutlink').classList.remove('active');
  }
  const toggle = (param)=> {
    removeclasses();
    document.getElementById(`${param}link`).classList.add('active');
  }
  useEffect(() => {
    if (props.mode === 'Light Mode') {
      document.getElementById('navc').classList.add('addtonav');
      document.getElementById('flexSwitchCheckReverse').checked = true;
    }
  }, [props])
  return (
    <nav id="navc" className="navbar navbar-expand-lg navbar-light sticky-top" style={customcolor} >
      <div className="container-fluid mx-1">
        <span className="navbar-brand active" >NewsHub</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className={`navbar-toggler-icon ${mode === 'Dark Mode' ? "" : "active"}`}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link id="generallink" className={`nav-link ${title === 'general' ? 'active' : ''}`} aria-current="page" to="/" onClick={() => toggle("general")}>Home</Link>
            </li>
            <li className="nav-item">
              <Link id="businesslink" className={`nav-link ${title === 'business' ? 'active' : ''}`} to="/business" onClick={() => toggle("business")}>Business</Link>
            </li>
            <li className="nav-item">
              <Link id="entertainmentlink" className={`nav-link ${title === 'entertainment' ? 'active' : ''}`} to="/entertainment" onClick={() => toggle("entertainment")}>Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link id="healthlink" className={`nav-link ${title === 'health' ? 'active' : ''}`} to="/health" onClick={() => toggle("health")}>Health</Link>
            </li>
            <li className="nav-item">
              <Link id="sciencelink" className={`nav-link ${title === 'science' ? 'active' : ''}`} to="/science" onClick={() => toggle("science")}>Science</Link>
            </li>
            <li className="nav-item">
              <Link id="sportslink" className={`nav-link ${title === 'sports' ? 'active' : ''}`} to="/sports" onClick={() => toggle("sports")}>Sports</Link>
            </li>
            <li className="nav-item">
              <Link id="technologylink" className={`nav-link ${title === 'technology' ? 'active' : ''}`} to="/technology" onClick={() => toggle("technology")}>Technology</Link>
            </li>
            <li className="nav-item">
              <Link id="aboutlink" className={`nav-link ${title === 'about' ? 'active' : ''}`} to="/about" onClick={() => toggle("about")}>About</Link>
            </li>
          </ul>
          <div className="form-check form-switch form-check-reverse mx-2">
            <label className={`form-check-label text-${(mode === 'Dark Mode') ? 'black' : 'white'}`} htmlFor="flexSwitchCheckReverse">{mode}</label>
            <input className="form-check-input" role="button" type="checkbox" id="flexSwitchCheckReverse" onClick={() => { togglefunction() }} />
          </div>
        </div>
      </div>
    </nav>

  )
}