
const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:8080");

ws.on("open", () => {
  console.log("🤖 Robot connected to AutoMataArena");
});

ws.on("message", (message) => {
  const command = message.toString();
  console.log("🤖 Robot received command:", command);

  // Aquí luego controlas motores reales
  switch (command) {
    case "forward":
      console.log("➡️ Robot moving forward");
      break;
    case "left":
      console.log("⬅️ Robot turning left");
      break;
    case "right":
      console.log("➡️ Robot turning right");
      break;
    case "attack":
      console.log("⚔️ Robot attacking");
      break;
  }
});
