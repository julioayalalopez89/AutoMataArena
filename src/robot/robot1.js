const WebSocket = require("ws");
const { v4: uuidv4 } = require("uuid");

const ROBOT_ID = "robot_1";  // ID único
const ws = new WebSocket("ws://localhost:3000");

ws.on("open", () => {
  console.log(`🤖 ${ROBOT_ID} connected to AutoMataArena`);
});

ws.on("message", (message) => {
  try {
    const msg = JSON.parse(message);
    
    // Solo responde a su propio ID
    if (msg.target === ROBOT_ID) {
      console.log(`🤖 ${ROBOT_ID} received command:`, msg.action);

      // Aquí luego controlaremos motores o simulación
      switch (msg.action) {
        case "FORWARD":
          console.log(`➡️ ${ROBOT_ID} moving forward`);
          break;
        case "LEFT":
          console.log(`⬅️ ${ROBOT_ID} turning left`);
          break;
        case "RIGHT":
          console.log(`➡️ ${ROBOT_ID} turning right`);
          break;
        case "ATTACK":
          console.log(`⚔️ ${ROBOT_ID} attacking`);
          break;
      }
    }
  } catch (err) {
    console.error("❌ Invalid message format:", message.toString());
  }
});
