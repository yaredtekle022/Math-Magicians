import React from 'react';
import Calculator from './components/Calculator';
import Quotes from './components/fetchQuotes';

function App() {
  return (
    <div className="folder">
      <Calculator />
      <Quotes />
    </div>
  );
}
export default App;
