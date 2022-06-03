import React, { Component } from 'react'
import './Navbar.css'
export default class Navbar extends Component {
  togglefunction = ()=> {
    if (this.props.mode === 'Light Mode') {
      this.setState({
        backgroundColor: '#F8F9FA',
        color: 'black'
      });
      document.getElementById('navc').classList.remove('addtonav');
    }
    else {
      this.setState({
        backgroundColor: '#1F1F1F',
        color: 'white'
      });
      document.getElementById('navc').classList.add('addtonav');
    }
    this.props.togglemode();
  }
  toggle(param) {
    if (param === 'home') {
      document.getElementById('homelink').classList.add('active');
      document.getElementById('aboutlink').classList.remove('active');
    }
    else {
      document.getElementById('homelink').classList.remove('active');
      document.getElementById('aboutlink').classList.add('active');
    }
  }
  render() {
    let {mode} = this.props;
    return (
      <nav id="navc" className="navbar navbar-expand-lg navbar-light text-danger" style={this.state?this.state:{
        backgroundColor: '#F8F9FA',
        color: 'black'
      }}>
        <div className="container-fluid mx-1">
          <span className="navbar-brand active" >NewsHub</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className={`navbar-toggler-icon ${mode === 'Dark Mode' ? "" : "active"}`}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a id="homelink" className={`nav-link active`} aria-current="page" href="/" onClick={() => this.toggle("home")}>Home</a>
              </li>
              <li className="nav-item">
                <a id="aboutlink" className={`nav-link`} href="/about" onClick={() => this.toggle("about")}>About</a>
              </li>
            </ul>
            <div className="form-check form-switch form-check-reverse mx-2">
              <label className={`form-check-label text-${(mode === 'Dark Mode') ? 'black' : 'white'}`} htmlFor="flexSwitchCheckReverse">{mode}</label>
              <input className="form-check-input" role="button" type="checkbox" id="flexSwitchCheckReverse" onClick={()=>{this.togglefunction()}} />
            </div>
          </div>
        </div>
      </nav>

    )
  }
}