import React, { useState } from 'react'

export default function Maintool() {
   const [text,change] = useState("")
    const handleonchange = (event) => {
        change(event.target.value)
    }
    const valuechanger =()=>{
        let newtext = text.toUpperCase();
        change(newtext);
    }
    const valuechangerl =()=>{
        let newtext = text.toLowerCase();
        change(newtext);
    }
    const clear =()=>{
        change("");
    }
  return (
    <div>
        <div className="mb-3">
        <textarea value = {text} onChange={handleonchange}  className="form-control" id="textarea" rows="8" placeholder='Type Your Text Here..'></textarea>
        <button onClick={valuechanger} className='btn btn-primary mx-1 my-2'>
            Change Into UpperCase Latters
        </button>
        <button onClick={valuechangerl} className='btn btn-primary mx-1 my-2'>
            Change Into LowerCase Latters
        </button>
        <button onClick={clear} className='btn btn-primary mx-1 my-2'>
            Clear
        </button>

        <h2 className="text-center my-3">Text Summary </h2>
        <p className="text-center my-3 border border-1 ">
            <strong>Total Words :</strong> {text.split(" ").length} <strong>Total Charecters :</strong> {text.length} <strong>Estimated Reading Time : </strong> {0.008 * text.split(" ").length} min
        </p>

        <h3 className="text-center my-3"  > Preview Text Writen By You</h3>
        <p className="text-center my-3 border border-1 ">
            {text}
        </p>

        </div>
    </div>
  )
}
