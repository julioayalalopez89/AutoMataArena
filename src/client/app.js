const ws = new WebSocket("ws://localhost:3000");

ws.onopen = () => {
  document.getElementById("status").innerText = "Connected to arena ✅";
};

ws.onclose = () => {
  document.getElementById("status").innerText = "Disconnected ❌";
};

ws.onerror = (err) => {
  console.error("WebSocket error:", err);
  document.getElementById("status").innerText = "Error ❌";
};

function sendCommand(action) {
  const message = {
    type: "COMMAND",
    target: "robot_1",
    action
  };
  ws.send(JSON.stringify(message));
}

// Botones
document.getElementById("forward").onclick = () => sendCommand("FORWARD");
document.getElementById("left").onclick    = () => sendCommand("LEFT");
document.getElementById("right").onclick   = () => sendCommand("RIGHT");
document.getElementById("attack").onclick  = () => sendCommand("ATTACK");
