import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('');

    const handleUpperClick =()=>{
        // console.log("uppercase was clicked:"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to Uppercase!","success");
    }

    const handleLowerClick =()=>{
      // console.log("uppercase was clicked:"+text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("converted to Lowercase!","success");
  }

  const handleCopyClick =()=>{
    // let newText = document.getElementById("myBox");
    // newText.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges()
    props.showAlert("Text copied successfully!","success");
  }

  const handleEmailClick = () => {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const extractedEmails = text.match(emailRegex) || [];
    setText(extractedEmails.join(', ')); // Join multiple emails if found
    props.showAlert("Email extracted!","success");
};
 
  const handleClearClick = () => {
    setText(""); // Directly setting empty string
    props.showAlert("Text cleared!", "success");
  };

    
  const handleExtraSpace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed!","success");
  }

    const handleOnChange =(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1 className='mb-3'>{props.heading}</h1>
      <div className="mb-3">
        
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleUpperClick}>Convert to upperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleLowerClick}>Convert to lowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleEmailClick}>Extract Email</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleCopyClick}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container mx-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.trim().split(/\s+/).filter((word) => word !== "").length} words and {text.length} characters</p>

      <p>{0.008 * text.split(" ").filter((element=>{return element.length!=0})).length} Minutes to Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!!"}</p>
    </div>
    </>
  )
}
