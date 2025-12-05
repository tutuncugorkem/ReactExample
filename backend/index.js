const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/api/message", (req, res) => {
  res.json({ message: "Backend'den selamlar! 🚀" });
});

app.listen(3001, () => {
  console.log("Backend çalışıyor: http://localhost:3001");
});
