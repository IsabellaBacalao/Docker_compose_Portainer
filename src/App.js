import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [postId, setPostId]= useState();

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "model": "mistral", // installed model, mandatory
      "prompt": "Why is the sky blue?", // your prompt
      "stream": false // wait for the response to be complete before answering. You can use true, and implement streamed responses.
       })
    };
    fetch('http://gprrrr.co/ollama/api/generate', requestOptions)
        .then(response => response.json())
        .then(data => setPostId(data.id))
        .then(console.log(postId));
  })


  return (
    <BrowserRouter basename='/MichelleAndIsabella'>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
