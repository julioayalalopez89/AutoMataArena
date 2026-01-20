const express = require("express");
const cors = require("cors");

const http = require("http");
const initWebSocket = require("./websocket");
const config = require("../config");

const app = express();
const PORT = config.PORT;


// Middlewares
app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});


const server = http.createServer(app);

initWebSocket(server);

server.listen(PORT, () => {
  console.log(`🟢 HTTP + WebSocket running on http://localhost:${PORT}`);
});

