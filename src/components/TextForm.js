import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState("");
    // setText("You can change the value of text using setText");
    return (
        <div>
            <div className="mb-3">
                <h1 className="my-4">{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="textbox" rows="8"></textarea>
                <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Lowercase</button>
            </div>

            <h2 className="preview my-2">Your Text Summery</h2>
            <p>Total <b>{text.split(' ').length}</b> words and total{" "} <b>{text.length}</b> characters.</p>
            <h2 className="preview my-2">Preview</h2>
            <p>{text}</p>
        </div>
    );
}
