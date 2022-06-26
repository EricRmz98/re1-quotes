import quotes from '../quotes.json'
import ReRandomizeBtn from './ReRandomizeBtn';

const QuoteBox = ({ quoteIndex, color, reRandomize }) => {
    return (
        <div>
            <div className='card'>
                <div className='card-top'>
                    <div className='icon-container' style={{ background: `${color}` }}>
                        <p ><i className="quote-icon fa-solid fa-quote-left "></i></p>
                    </div>
                    <div className='quote-container'>
                        <p className='quote txt-22 marginless' style={{ color: `${color}` }}>{quotes[quoteIndex].quote}</p>
                    </div>
                </div>
                <div className='card-bottom'>
                    <p className='txt-22 marginless' style={{ color: `${color}` }}>{quotes[quoteIndex].author}</p>
                    <ReRandomizeBtn reRandomize={reRandomize} color={color} />
                </div>
            </div>
        </div>
    );
};

export default QuoteBox;