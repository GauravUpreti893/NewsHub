import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
      let mode = this.props.mode;
    return (
        <footer className="text-center text-lg-start mt-auto" style={mode === 'Dark Mode'?{
            backgroundColor:'#F8F9FA'
        }:{
            backgroundColor:'#1F1F1F'
        }}>
            <div className={`text-center text-${mode === 'Dark Mode'?"secondary":"light"} p-3`}>
                © 2022 Copyright:
                <span className={`text-center text-${mode === 'Dark Mode'?"secondary":"white"} p-1`}>TextUtils.com</span>
            </div>
        </footer>
    )
  }
}

