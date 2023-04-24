import React,{useState} from "react";

export default function Textform(props) {
    
const [text,setText]=useState("");

const handleOnUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success");
}

const handleOnLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");
}

const handleOnClearClick=()=>{
    let newText='';
    setText(newText);
    props.showAlert("textarea is cleared","success");
}

const handleCopy=()=>{
    let text=document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("copied to clipboard","success");
}

const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra spaces removed","success");
}

const handleOnChange=(event)=>{
    setText(event.target.value)
}
  return (
    <>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button className="btn btn-primary " onClick={handleOnUpClick}>convert to uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleOnLoClick}>convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleOnClearClick}>clear text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>copy text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Text summary</h2>
        <p>{text.length===0?"0":text.split(" ").length} words and {text.length} characters and {text.split(".").length} sentences</p>
        <p>{0.008 * text.split(" ").length} per minutes for read</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
