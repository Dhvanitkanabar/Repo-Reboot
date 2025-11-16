const btn = document.querySelector("button");
if (btn) {
    btn.addEventListener("click", () => {
        btn.textContent = "Sending...";
        btn.style.opacity = "0.6";

        setTimeout(() => {
            btn.textContent = "Message Sent ✓";
            btn.style.background = "#1b7e2a";
            btn.style.opacity = "1";
        }, 1200);
    });
}
