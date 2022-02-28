import React, { useState } from 'react';
import quotes from '../quotes.json';
import ActionButton from './ActionButton';



const quotesChage = () => Math.floor(Math.random() * quotes.length)
const varyColors = [ "#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871", "#008F7A", "#008E9B",
                      "#C34A36", "#4B4453", "#FF8066", "#936C00" ]
const QuoteBox = () => {

  const [quote, setQuote] = useState(quotes[quotesChage()])
  const changeQuotes = () => {
    setQuote(quotes[quotesChage()])
  }

  const colors = varyColors[Math.floor(Math.random() * varyColors.length)]

  document.body.style = `background: ${colors}`

    return (
        <div className="quote_box">
        <p className="text_paragraph" style={{color:colors}}>
        <i className="fas fa-quote-left"></i> {quote.quote} <i class="fas fa-quote-right"></i>
        </p>
        <h1 className="author"style={{color:colors}}>
         {quote.author}
        </h1 >
      <ActionButton changeQuotes={changeQuotes} colors={colors}/>
       </div>

    )
   
}

export default QuoteBox;