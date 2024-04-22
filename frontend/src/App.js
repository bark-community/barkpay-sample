import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Web3 from 'web3';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch message from Express
    axios.get('/api')
      .then(response => setMessage(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
