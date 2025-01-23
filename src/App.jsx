import React from 'react';
import './App.css'
import { CounterContext,CounterProvider } from './CounterContext';
import CounterControls from './CounterControl';
import CounterDisplay from './CounterDisplay';

function App() {
  return (
    <CounterProvider>
      <CounterControls/>
      <CounterDisplay/>
    </CounterProvider>
  );
}

export default App;
