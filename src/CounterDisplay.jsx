import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

function CounterDisplay() {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <h2>Current Count: {count}</h2>
    </div>
  );
}

export default CounterDisplay;
