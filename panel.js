// Fullscreen functionality
document.getElementById("fullscreen-btn")?.addEventListener("click", () => {
  const container = document.getElementById("game-container");
  if (container.requestFullscreen) container.requestFullscreen();
});

// Back button
document.getElementById("back-btn")?.addEventListener("click", () => {
  window.history.back();
});

// Collapse / Expand main panel
const panel = document.getElementById("button-container");
const toggleBtn = document.getElementById("toggle-btn");
let collapsed = false;
toggleBtn?.addEventListener("click", () => {
  collapsed = !collapsed;
  if (collapsed) {
    panel.style.transform = "translateX(78%)"; 
    panel.style.background = "rgba(255, 255, 255, 0.1)";
    toggleBtn.innerHTML = "&#10095;";
  } else {
    panel.style.transform = "translateX(0)";
    panel.style.background = "rgba(255, 255, 255, 0.25)";
    toggleBtn.innerHTML = "&#10094;";
  }
});

// Tools toggle
const toolspanel = document.getElementById("tools-container");
const tooltoggleBtn = document.getElementById("tools-btn");
let toolcollapsed = true;
tooltoggleBtn?.addEventListener("click", () => {
  toolcollapsed = !toolcollapsed;
  if (toolcollapsed) {
    toolspanel.style.transform = "translateX(-105%)";
    tooltoggleBtn.style.background = "rgba(0, 0, 0, 0.2)";
    tooltoggleBtn.style.outline = "0 solid rgba(255, 255, 255, 0)";
  } else {
    toolspanel.style.transform = "translateX(0)";
    tooltoggleBtn.style.background = "rgba(20, 20, 20, 0.2)";
    tooltoggleBtn.style.outline = "1.5px solid rgba(255, 255, 255, 0.30)";
  }
});