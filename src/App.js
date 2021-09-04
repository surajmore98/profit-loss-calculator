import './App.css';
import { useState } from 'react';

function App() {
  const [intialPrice, setIntialPrice] = useState(0);
  const [stockQuantity, setStockQuantity] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [result, setResult] = useState("");

  const calculate = (event) => {
      event.preventDefault();
      const profit  = (currentPrice - intialPrice) * stockQuantity;
      const profitPercentage = (Math.abs(profit) / intialPrice) * 100;
      if(profit < 0) {
        setResult(`Hey, the loss is ${Math.abs(profit)} and the percent is ${profitPercentage}%`);
      } else if(profit === 0) {
        setResult(`No pain no gain and no gain no pain`);
      }else {
        setResult(`Hey, the profit is ${Math.abs(profit)} and the percent is ${profitPercentage}%`);
      }
  };

  return (
    <div className="App">
      <div>
        <h1 className="label">Stock Profile & Loss Calculator</h1>
      </div>
      <form onSubmit={calculate}>
      <div className="input-section">
        <h3 className="label">Intial Price</h3>
        <input type="number"  className="input-field" id="initial-price" name="initial-price"  onChange= {(event) => setIntialPrice(event.target.value)} />
      </div>
      <div className="input-section">
        <h3 className="label">Quantity of Stocks</h3>
        <input type="number" min="0" className="input-field" id="stocks" name="stocks" onChange= {(event) => setStockQuantity(event.target.value)} />
      </div>
      <div className="input-section">
        <h3 className="label">Current Price</h3>
        <input type="number"  className="input-field" id="current-price" name="current-price" onChange= {(event) => setCurrentPrice(event.target.value)} />
      </div>
      <div>
        <button>Tell me!!!</button>
      </div>
      </form>
      
      <div className="result-section">
        <h2>{result}</h2>
      </div>
    </div>
  );
}

export default App;
