import { useEffect, useState } from "react";
import "./Style.css";

function App() {
  const [quote, setQuote] = useState("");
  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())

      .then((res) => {
        let randomNumber = Math.floor(Math.random() * res.length);
        setQuote(res[randomNumber]);
      });
  };
  useEffect(()=>{
    getQuote()
  },[])

  return (
    <div className="App">
      <h1 style={{
        marginTop:'100px'
      }}>Random Quote Generator</h1>
      <div className="content">
        <p > Quote : <span style={{fontWeight:'bold',fontFamily:'initial'}}>{quote.text}</span> </p>
        <p>Author : <span style={{fontWeight:'bold',fontFamily:'initial'}}>{quote.author}</span></p>
        <div className="btnquote">
          <button onClick={getQuote}>Get Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
