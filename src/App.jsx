import React, { useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';

const App = () => {
  const outputColorRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    genHexCode();
  }, []);

  const genHexCode = () => {
    const hexString = "0123456789abcdef";
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
      hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    outputRef.current.value = hexCode;
    outputColorRef.current.classList.remove("show-color");
    setTimeout(() => {
      outputColorRef.current.classList.add("show-color");
    }, 10);
    outputColorRef.current.style.backgroundColor = hexCode;
  };

  const handleCopy = () => {
    outputRef.current.select();
    document.execCommand("copy");
    showToast();
  };

  const showToast = () => {
    toast.info("Code copied!", { autoClose: 2000 });
  };

  return (
    <div className="section">
      <div className="container glass">
        <h2 className="title">Simple Hex Color Generator</h2>
        <div className="color-output" ref={outputColorRef}>
          <span ></span>
        </div>
        <input type="text" id="output" readOnly ref={outputRef} />
        <div className="btn-box">
        <Button variant="contained"  id="gen-btn" onClick={genHexCode}>Generate</Button>
        <Button variant="contained" id="copy-btn" onClick={handleCopy}>Copy</Button>
        
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;