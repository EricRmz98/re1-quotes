import quotes from '../quotes.json'

const QuoteCard = ({quoteIndex}) => {
    return (
        <div>
            <div className='card'>
                <div className='card-top'>
                    <div className='icon-container' style={{ background: '#1A1333' }}>
                        <p ><i class="quote-icon fa-solid fa-quote-left "></i></p>
                    </div>
                    <div className='quote-container'>
                        <p className='quote txt-22 marginless' style={{ color: '#1A1333' }}>{quotes[quoteIndex].quote}</p>
                    </div>
                </div>
                <div className='card-bottom'>
                    <p className='txt-22 marginless' style={{ color: '#1A1333' }}>{quotes[quoteIndex].author}</p>
                    <button className='reload-btn' style={{ background: '#1A1333' }}><i class="reload-icon fa-solid fa-arrows-rotate"></i></button>
                </div>
            </div>
        </div>
    );
};

export default QuoteCard;