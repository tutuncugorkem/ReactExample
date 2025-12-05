import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  // ⬇⬇⬇ Backend'e istek atan FETCH burada ⬇⬇⬇
  useEffect(() => {
    fetch("http://localhost:3001/api/message")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((err) => {
        console.error("Backend bağlantı hatası:", err);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Mini React Uygulaması 🚀</h1>

      <p><strong>Backend Mesajı:</strong> {message}</p>

      <p>Butona {count} kez tıkladın.</p>

      <button className="pulse-button" onClick={() => setCount(count + 1)}>
        Tıkla!
      </button>
    </div>
  );
}

export default App;
