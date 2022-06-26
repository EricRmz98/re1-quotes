import { useState } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';
import quotes from './quotes.json';

const colors = [
  '#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff'
];

function App() {
  
  const [quoteIndex, setQuoteIndex] = useState(Math.floor(Math.random() * quotes.length));
  const [colorIndex, setColorIndex] = useState(Math.floor(Math.random() * colors.length));

  const reRandomize = () =>{
    setQuoteIndex(Math.floor(Math.random() * quotes.length));
    setColorIndex(Math.floor(Math.random() * colors.length));
  }

  document.body.style = `background: ${colors[colorIndex]}`

  return (
      <div className='container'>
        <QuoteBox quoteIndex={quoteIndex} color={colors[colorIndex]} reRandomize={reRandomize}/>
      </div>
  )
}

export default App
