import React,{ useState } from "react";
export default function TextForm({heading}) {
const handleUpClick=()=>
{
  console.log(`Uppercase was clicked ${text}`);
  let newText=text.toUpperCase();
  setText(newText)
}

const handleOnChange=(event)=>
  {
    console.log("On change");
    setText(event.target.value);
  }
const[text,setText]=useState('Enter text here');
    return(
        <div>
          <div>
            <h2>{heading}</h2>
             
            <textarea className="form-control" id="myBox" value={text} rows={8} onChange={handleOnChange}></textarea>
          </div>
          <button className="Convertbtn" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}