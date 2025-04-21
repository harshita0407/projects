import React,{ useState } from "react";

export default function TextForm({heading, mode}) {
const handleUpClick=()=>
{
  // console.log(`Uppercase was clicked ${text}`);
  let newText=text.toUpperCase();
  setText(newText)
}
const handleLoClick=()=>
{
  let newText=text.toLowerCase();
  setText(newText)
}
const handleOnChange=(event)=>
  {
    // console.log("On change");
    setText(event.target.value);
  }
  const handlecopy =()=>{
   
    let text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
  }

  const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
const[text,setText]=useState('');
    return(
      <>
        <div className="container">
        <h2 style={{color:mode === 'dark' ?'white': 'black'}}>{heading}</h2>
          <div>
          <textarea className="form-control" style={{backgroundColor: mode === 'dark' ?' #979797': 'white',
          border:mode === 'dark' ? '1px solid white' : '1px solid rgb(83, 83, 83)',
          color:mode === 'dark' ?'white': 'black'
          }} id="myBox" value={text} rows={8} onChange={handleOnChange}></textarea>
          </div>
          <button className="Convertbtn mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="Convertbtn mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="Convertbtn mx-2" onClick={handlecopy}>To copy the Text</button>
          <button className="Convertbtn mx-2" onClick={handleExtraSpaces}>Remove extra Spaces</button>
        </div>
        
        <div className="container">
         <h2 style={{color:mode === 'dark' ?'white': 'black'}}>Your text summary</h2>
         <p style={{color:mode === 'dark' ?'white': 'black'}}>{text.split(" ").length} words and {text.length} characters</p>
         <p style={{color:mode === 'dark' ?'white': 'black'}}>{0.008 * text.split(" ").length} Minute to read it</p>
         <h3 style={{color:mode === 'dark' ?'white': 'black'}}>Preview</h3>
         <p style={{color:mode === 'dark' ?'white': 'black'}}>{text}</p>
        
        </div>
        </>
    )
}