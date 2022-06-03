import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import Footer from './Components/Footer';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      mode:'Dark Mode'
    }
  }
  togglemode = ()=> {
    if (this.state && this.state.mode === 'Dark Mode') {
      this.setState(
        {mode:'Light Mode'}
        );
    }
    else {
      this.setState({
        mode:'Dark Mode'
      });
    }
    console.log(this.state);
  }
  render() {
    return (
      <div className='container-fluid px-0 py-0 d-flex flex-column' style={this.state.mode === "Light Mode" ? { backgroundColor: "#212529", minHeight: "100vh" } : { backgroundColor: "white", minHeight: "100vh" }}>
        <Navbar mode = {this.state.mode} togglemode = {this.togglemode}/>
        <News mode = {this.state.mode}/>
        <Footer mode = {this.state.mode}/>
      </div>
    )
  }
}
