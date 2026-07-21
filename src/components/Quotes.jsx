import React, { useEffect, useState } from "react";
import GlassCard from "./GlassCard";
import axios from "axios";

const Quotes = () => {
  const [quote, setQuote] = useState([]);
  const [quoteNumber, setQuoteNumber] = useState(0)

  const changeQuote = () => {
    const randomQuote = Math.floor(Math.random() * 30);
    setQuoteNumber(randomQuote)
 }


   function getQuote() {
     axios.get("https://dummyjson.com/quotes").then((res) => {      
     setQuote(res.data.quotes[quoteNumber]);
    });
  }
  useEffect(() => {
      getQuote();
   },[])
  
  return (
    <GlassCard className="flex justify-between">
      <p className="text-sm font-semibold text-slate-100">Motivational Quote</p>
      <p className="mt-3 text-lg font-medium italic text-slate-200">
        “{quote.quote}.”
      </p>
      <div className="flex justify-between items-center">
        <p className="mt-3 text-sm text-slate-400">— {quote.author} </p>
        <button onClick={changeQuote} className="px-3 py-1.5 active:scale-95 active:shadow-[0_6px_15px_rgba(56,189,248,0.35)] border border-orange-400 rounded-xl">
          Change Quote
        </button>
      </div>
    </GlassCard>
  );
};

export default Quotes;
