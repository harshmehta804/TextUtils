import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

import React from "react";
// import {
//   BrowserRouter ,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0075c0';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - light Mode"

    }
  }
  return (
    <>
     {/* <BrowserRouter> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container '>
            <TextArea heading="This is a React App" showAlert={showAlert} mode={mode} />
        </div>
           {/* <Routes>
             <Route path="/about" element={<About />} />
             <Route path="/" element={<TextArea heading="This is a React App" showAlert={showAlert} mode={mode} />} />
            </Routes>
            
    </BrowserRouter> */}
    </>
  );
}

export default App;
