import React, { useState } from "react";


export default function TextArea(props) {
  const [Text, setText] = useState("");
  
  const texttouppercase = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Text UpperCase Successfully","info");
  };

  const texttolowercase = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Text LowerCase Successfully","info");
  };

  const textclear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Was Clear Successfully","warning");
  };

  const onchanging = (event) => {
    setText(event.target.value);
  };

  const copyText = () => {
    // let text = document.getElementById("floatingTextarea");
      // text.select();
      navigator.clipboard.writeText(Text);/*add.value*/
      // document.getSelection().removeAllRanges();
      props.showAlert("Text Was Copied Successfully","success");
  }

  return (
    <>
      <div className="my-2 mx-4" style={{color : props.mode === "light"?"black":"white"}}>
        <h1>Input Any Text to Convert to UpperCase :-</h1>
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          value={Text} rows="8" onChange={onchanging}
          style={{backgroundColor : props.mode ==="light"?"white":"rgba(104, 101, 99, 0.49)",color : props.mode === "light"?"black":"white"}}
          
        ></textarea>
        
      </div>
      <div>
        <button disabled={Text.length===0} className="btn btn-warning my-3 mx-4" onClick={texttouppercase}>
          Convert to UPPERCASE
        </button>
        <button disabled={Text.length===0} className="btn btn-warning my-3 mx-4" onClick={texttolowercase}>
          Convert to LOWERCASE
        </button>
        <button disabled={Text.length===0} className="btn btn-warning my-3 mx-4" onClick={textclear}>
          Clear Text
        </button>
        <button disabled={Text.length===0} className="btn btn-warning my-3 mx-4" onClick={copyText}>
          Copy Text
        </button>

        <div
          className="container mx-4 my-4"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h2>Text RunTime</h2>
          <p>
            <b>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> Words <b>{Text.length}</b>{" "}
            Characters
          </p>
          <p>
            {0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} Read Per Minute
          </p>
          <h2>Preview</h2>
          <p>{Text.length>0 ?Text:`< Nothing ?? in TextArea >`}</p>
        </div>
      </div>
    </>
  );
}
