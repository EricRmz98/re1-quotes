import { useState } from 'react';
import './App.css'
import QuoteCard from './components/QuoteCard';
import quotes from './quotes.json'

function App() {
  
  const colors = [
    '#1A1333', '#262949', '#045459', '#087353', '#15C286', '#ABD96D',
    '#FBBF54', '#EE6B3B', '#EC0F47', '#A02C5D', '#700460', '#022C7A'
  ];
  
  const [quoteIndex, setQuoteIndex] = useState(Math.floor(Math.random() * quotes.length));
  const [colorIndex, setColorIndex] = useState(Math.floor(Math.random() * colors.length));
  
  console.log(quoteIndex);
  console.log(colorIndex);
  

  document.body.style = 'background: #1A1333'

  return (
    <>
      <div className='container'>
        <QuoteCard quoteIndex={quoteIndex} />
      </div>
    </>
  )
}

export default App
