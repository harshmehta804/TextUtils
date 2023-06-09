import { useState } from "react";

export default function TextArea(props){
   const [text,setText]=useState("");

    const handleOnClick=()=>{
        console.log('onClick');
        // setText("you have clicked on handleOnClick");
        let nw=text.toUpperCase();
        setText(nw);
        props.showAlert("Converted to UpperCase","success")
    }
    
    const handleLoClick=()=>{
        console.log('LoClick');
        // setText("you have clicked on handleOnClick");
        let nw=text.toLowerCase();
        setText(nw);
        props.showAlert("Converted to lowerCase","success")

    }

    const handleLoLo=()=>{
        let nn=text.toLocaleUpperCase();
        setText(nn);
    }
    
    const handleOnChange=(e)=>{
        console.log("onChnage");
        setText(e.target.value);
        console.log(text);
    }

    
    // text ="new Text"; This is the wrong way to update state
    // setText("new Text"); 
    return(
    <>
        <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3 ">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'grey':'white', Color: props.mode==='light'?'grey':'white' }} id="ControlTextarea" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleOnClick}>Convert to Uppercase</button>
        <button className='btn btn-primary' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoLo}>Convert to LocalLowercase</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p >{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Preview of entered text"}</p>
        </div>
</>
    )
}