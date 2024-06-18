import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);
  let countColor = count > 0 ? "green" : count < 0 ? "red" : "black";

  return (
    <div class="container">
      <h1>Counter</h1>
      <span id="value" style={{ color: countColor }}>
        {count}
      </span>
      <div class="btn-group">
        <button onClick={decrease} class="btn btn-decrease">
          DECREASE
        </button>
        <button onClick={reset} class="btn btn-reset">
          RESET
        </button>
        <button onClick={increment} class="btn btn-increase">
          INCREASE
        </button>
      </div>
    </div>
  );
}

export default App;
