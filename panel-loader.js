(function() {
    const panelBaseURL = "https://cdn.jsdelivr.net/gh/UnkPlay/game-panel@main/";

    // Load CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = panelBaseURL + "panel.css";
    document.head.appendChild(link);

    // Load HTML
    fetch(panelBaseURL + "panel.html")
        .then(response => response.text())
        .then(html => {
            const div = document.createElement("div");
            div.id = "game-panel-container";
            div.innerHTML = html;
            div.style.position = "fixed";
            div.style.top = "50%";
            div.style.left = "50%";
            div.style.transform = "translate(-50%, -50%)";
            div.style.zIndex = 9999;
            document.body.appendChild(div);

            // Load JS after HTML is injected
            const script = document.createElement("script");
            script.src = panelBaseURL + "panel.js";
            document.body.appendChild(script);
        })
        .catch(err => console.error("Failed to load game panel:", err));
})();
