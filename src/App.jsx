import { useState } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';
import quotes from './quotes.json';

const colors = [
  '#1A1333', '#262949', '#045459', '#087353', '#15C286', '#ABD96D',
  '#FBBF54', '#EE6B3B', '#EC0F47', '#A02C5D', '#700460', '#022C7A'
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
