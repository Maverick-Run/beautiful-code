import React, { useState, useEffect,useRef  } from 'react'
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import CodeBox from './Components/CodeBox';
import Settings from './Components/Settings';
import html2canvas from 'html2canvas';
function App() {
  const urlParams = new URLSearchParams(window.location.search);
  
  const [selected, setSelected] = React.useState(urlParams.get("style") || 'monokaiSublime');
  const [language, setLanguage] = React.useState(urlParams.get("language") || 'javascript');
  const [title, setTitle] = React.useState(urlParams.get("title") || 'Untitled-1');
  const [codeString, setCodeString] = React.useState(urlParams.get("code") || 'public static void main(String[] args){\n\tSystem.out.println("Hello World!");\n}');

  const imageRef = useRef();
  useEffect(() =>{
    const urlParams = new URLSearchParams(window.location.search);
    console.log("Hello")
    console.log(urlParams.get("style"))
  },[])
  const handleCapture = () => {
    html2canvas(imageRef.current, {
      scale:1.5,
      backgroundColor: null, // Set background color to null for transparency
    })
      .then((canvas) => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'image.png';
        link.click();
      })
      .catch((error) => {
        console.error('Error capturing image:', error);
      });
  };
  return (
    <>
    <Analytics />
      <div className="app">
        <div ref={imageRef} className='centeredBox code'>
          <CodeBox selected={selected} title={title} codeString={codeString} language={language}/>
        </div>
        <div className='centeredBox sett'>
          <Settings setLanguage={setLanguage} language={language} setSelected={setSelected} selected={selected} handleCapture={handleCapture}/>
        </div>
      </div>

    </>
  )
}

export default App
