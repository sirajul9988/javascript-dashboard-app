function updateTime() {
  const now = new Date();
  document.getElementById("time").innerText = now.toLocaleTimeString();
}

function showStatus() {
  document.getElementById("status").innerText = "System running normally";
}

setInterval(updateTime, 1000);
updateTime();
