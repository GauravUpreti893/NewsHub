import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Navbar from './Components/Navbar';
import News from './Components/News';
import Footer from './Components/Footer';
import About from './Components/About';

export default function App() {
  const [mode, setmode] = useState(localStorage.getItem('mode') ? localStorage.getItem('mode') : 'Dark Mode');
  const [pagetitle, setpagetitle] = useState('general');
  const [progress, setprogress] = useState(0);
  const apikey = process.env.REACT_APP_APIKEY;
  const pageSize = 18;
  const country = 'us';
  const togglemode = () => {
    if (mode === 'Dark Mode') {
      setmode('Light Mode');
      localStorage.setItem('mode', 'Light Mode');
    }
    else {
      setmode('Dark Mode');
      localStorage.setItem('mode', 'Dark Mode');
    }
  }
  const changepagetitle = (params) => {
    setpagetitle(params);
  }
  const changeprogress = (prog) => {
    setprogress(prog);
  }
    return (
      <div className='container-fluid px-0 py-0 d-flex flex-column' style={mode === "Light Mode" ? { backgroundColor: "#212529", minHeight: "100vh" } : { backgroundColor: "white", minHeight: "100vh" }}>
        <Router>
          <LoadingBar
            color='#29FD53'
            progress={progress}
            height={3}
          />
          <Navbar title={pagetitle} mode={mode} togglemode={togglemode} />
          <Routes>
            <Route path="/" element={<News changeprogress = {changeprogress}  key="general" changepagetitle={changepagetitle} mode={mode} pageSize={pageSize} category="general" country={country} apikey={apikey} />}> </Route>
            <Route path="/business" element={<News changeprogress = {changeprogress}  key="business" changepagetitle={changepagetitle} mode={mode} pageSize={pageSize} category="business" country={country} apikey={apikey} />}> </Route>
            <Route path="/entertainment" element={<News changeprogress = {changeprogress}  key="entertainment" changepagetitle={changepagetitle} mode={mode} pageSize={pageSize} category="entertainment" country={country} apikey={apikey} />}> </Route>
            <Route path="/health" element={<News changeprogress = {changeprogress}  key="health" changepagetitle={changepagetitle} mode={mode} pageSize={pageSize} category="health" country={country} apikey={apikey} />}> </Route>
            <Route path="/science" element={<News changeprogress = {changeprogress}  key="science" changepagetitle={changepagetitle} mode={mode} pageSize={pageSize} category="science" country={country} apikey={apikey} />}> </Route>
            <Route path="/sports" element={<News changeprogress = {changeprogress}  key="sports" changepagetitle={changepagetitle} mode={mode} pageSize={pageSize} category="sports" country={country} apikey={apikey} />}> </Route>
            <Route path="/technology" element={<News changeprogress = {changeprogress}  key="technology" changepagetitle={changepagetitle} mode={mode} pageSize={pageSize} category="technology" country={country} apikey={apikey} />}> </Route>
            <Route path="/about" element={<About changeprogress = {changeprogress} changepagetitle={changepagetitle} mode={mode} category="about" />}> </Route>
          </Routes>
          <Footer mode={mode} />
        </Router>
      </div>
    )
}
