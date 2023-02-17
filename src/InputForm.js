import React, { useState } from 'react';
import './InputForm.css';

function InputForm() {
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInput1Submit = (event) => {
    event.preventDefault();

    // handle input1 form submit here
  };

  const handleInput2Submit = (event) => {
    event.preventDefault();
    setOutputValue(input2Value);
  };

  return (
    <div className="input-form">
      <form onSubmit={handleInput1Submit}>
        <input
          type="text"
          value={input1Value}
          onChange={(event) => setInput1Value(event.target.value)}
          placeholder="Enter text for input1 here"
        />
        <button type="submit">Submit1</button>
      </form>
      <form onSubmit={handleInput2Submit}>
        <input
          type="text"
          value={input2Value}
          onChange={(event) => setInput2Value(event.target.value)}
          placeholder="Enter text for input2 here"
        />
        <button type="submit">Submit2</button>
      </form>
      <div className="output-box">{outputValue}</div>
    </div>
  );
}

export default InputForm;
