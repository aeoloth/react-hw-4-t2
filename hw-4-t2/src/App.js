import React, { useState } from 'react';
import "./App.css";

export default function App(props) {
  const [counter, setCounter] = useState(0);

  return (
  <button onClick={() => setCounter(counter + 1)}>
    На меня нажали {counter} раз (func)
  </button>
    );
};

