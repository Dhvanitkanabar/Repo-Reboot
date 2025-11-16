const steps = document.querySelectorAll(".timeline-step");

steps.forEach(step => {
    step.style.opacity = "0";
    step.style.transform = "translateX(-20px)";
    step.style.transition = "0.6s ease";
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0)";
        }
    });
}, { threshold: 0.2 });

steps.forEach(step => observer.observe(step));

gsap.from(".hero h1", { y: 40, opacity: 0, duration: 1 });
gsap.from(".hero p", { y: 40, opacity: 0, duration: 1, delay: 0.3 });
gsap.from(".hero-btn", { y: 20, opacity: 0, duration: 1, delay: 0.6 });

gsap.to(".float-item", {
    rotation: 10,
    yoyo: true,
    repeat: -1,
    duration: 3,
    ease: "easeInOut"
});

ScrollReveal().reveal(".contact", { distance: "40px", duration: 900 });
ScrollReveal().reveal('.flow-card', { interval: 200, distance: '40px', origin: 'bottom', duration: 900 });
ScrollReveal().reveal('.stat-box', { interval: 200, distance: '40px', origin: 'bottom', duration: 900 });
