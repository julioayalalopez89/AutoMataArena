const WebSocket = require("ws");
const { v4: uuidv4 } = require("uuid");

function initWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  console.log("🟢 WebSocket server initialized");

  wss.on("connection", (ws) => {
    const clientId = uuidv4();
    ws.clientId = clientId;

    console.log(`🔌 Client connected: ${clientId}`);

    ws.on("message", (message) => {
        try {
            const msg = JSON.parse(message);
            console.log(`📨 Message from ${clientId}:`, msg);

            // Por ahora solo log
            // Más adelante: reenviar a robot correcto, validar type, etc.

        } catch (err) {
            console.error("❌ Invalid message format:", message.toString());
        }
    });

    ws.on("close", () => {
      console.log(`❌ Client disconnected: ${clientId}`);
    });
  });
}

module.exports = initWebSocket;
