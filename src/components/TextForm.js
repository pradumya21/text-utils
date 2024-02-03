import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success")
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success")
  };
  const handleReverseClick = () => {
    let newText = text.split("").reverse().join("").split(" ").reverse().join(" ");
    setText(newText);
    props.showAlert("Converted to Kejru","success")
  };
  const handleCopyClick = () => {
    let copyText = document.getElementById("myBox").value;
    navigator.clipboard.writeText(copyText)
    props.showAlert("Copied to clipboard","success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //  text="dhfsaiof" wronggggggg
  //  setText("sdhfdsf") fkn right
  return (
    <>
      <div className="container" style={{color: props.mode==='light' ? '#222232': 'white'}}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <label for="myBox" className="form-label"> Text area </label>
          <textarea className="form-control" value={text} style={{background: (props.mode==='dark') ? '#222232': (props.mode==='blue')?'#043242' :'white', color: (props.mode==='dark' || props.mode==='blue') ? 'white' : 'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled ={text.length===0} className={`btn ${(props.mode==='dark' || props.mode==='blue')? 'btn-dark' : 'btn-primary'} mx-2 my-2`} onClick={handleUpClick}> Convert to Uppercase</button>
        <button disabled ={text.length===0} className={`btn ${(props.mode==='dark' || props.mode==='blue')? 'btn-dark' : 'btn-primary'} mx-2 my-2`} onClick={handleLowClick}> Convert to Lowercase</button>
        <button disabled ={text.length===0} className={`btn ${(props.mode==='dark' || props.mode==='blue')? 'btn-dark' : 'btn-primary'} mx-2 my-2`} onClick={handleReverseClick}> Your own kejru </button>
        <button disabled ={text.length===0} className={`btn ${(props.mode==='dark' || props.mode==='blue')? 'btn-dark' : 'btn-primary'} mx-2 my-2`} onClick={handleCopyClick}> Copy to Clipboard </button>
      </div>

      <div className="container my-3" style={{color: (props.mode==='light') ? '#222232': 'white'}}>
        <h2 className="my-2">Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
           <p>Expected time to read : {Math.floor((Math.floor(text.split(" ").filter((element)=>{return element.length!==0}).length/3))/60)} Minutes {(Math.floor(text.split(" ").filter((element)=>{return element.length!==0}).length/3))%60} Seconds</p>
           <p>NOTE: the time is calculated by considering that an avg person reads at speed of 180 wpm</p>
           <h2>Preview</h2>
           <p>{text}</p>
      </div>
    </>
  );
}


// text.trim().split(/\s+/) to measure the actual length  ...............  str.split(' ').length counts spaces as words
