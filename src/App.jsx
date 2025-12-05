import { useState } from "react";
import "./App.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 20 }}>
      <h1>Mini React Uygulaması 🚀</h1>
      <p>Butona {count} kez tıkladın.</p>
      <button onClick={() => setCount(count + 1)}>
        Tıkla!
      </button>
    </div>
  );
}

export default App;
