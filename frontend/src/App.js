import { React, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import logo from './logo.svg';
import './App.css';

function App() {
  // const client = new W3CWebSocket('ws://127.0.0.1:3001');
  const ws = new WebSocket("ws://localhost:8001");
  useEffect(() => {
    ws.onmessage = message => console.log(`Message from server: ${message.data}`);
    
    ws.onopen = () => ws.send("Hello, it's me the client");
  }, []);
  return (
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
  );
}

export default App;
