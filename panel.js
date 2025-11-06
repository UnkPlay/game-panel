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

// ====================== TIMER ======================
(function initTimer() {
  function startTimer() {
    const timerDisplay = document.getElementById("timer-tick");
    if (!timerDisplay) {
      // Retry after 100ms if element isn't ready
      setTimeout(startTimer, 100);
      return;
    }

    let seconds = 0;
    setInterval(() => {
      seconds++;
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }, 1000);

    console.log("Timer started!");
  }

  startTimer();
})();

// ====================== FPS ======================
(function initFPS() {
  function startFPS() {
    const fpsDisplay = document.getElementById("fps-tick");
    if (!fpsDisplay) {
      // Retry after 100ms if element isn't ready
      setTimeout(startFPS, 100);
      return;
    }

    let last = performance.now(), frames = 0;

    function tick(now) {
      frames++;
      if (now - last >= 500) {
        const fps = Math.round((frames * 1000) / (now - last));
        fpsDisplay.textContent = 'FPS: ' + fps;
        frames = 0;
        last = now;
      }
      requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
    console.log("FPS counter started!");
  }

  startFPS();
})();





