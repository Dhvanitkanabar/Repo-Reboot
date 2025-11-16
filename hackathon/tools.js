/* -----------------------------------
   SOIL ANALYZER FUNCTION
----------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    
    const analyzeBtn = document.getElementById('analyze-soil-btn');
    
    // Only run this code if the button exists on the page
    if (analyzeBtn) {
        const nInput = document.getElementById('soil-n');
        const pInput = document.getElementById('soil-p');
        const kInput = document.getElementById('soil-k');
        const resultDiv = document.getElementById('soil-result');

        analyzeBtn.addEventListener('click', () => {
            const n = parseFloat(nInput.value);
            const p = parseFloat(pInput.value);
            const k = parseFloat(kInput.value);

            if (isNaN(n) || isNaN(p) || isNaN(k)) {
                resultDiv.innerHTML = `<p style="color: red;">Please enter valid numbers for N, P, and K.</p>`;
                return;
            }

            let recommendations = [];

            // Simple "if" logic - you can make this more complex
            if (n < 280) {
                recommendations.push("<strong>Nitrogen (N) is low.</strong> Consider adding compost or a nitrogen-rich fertilizer.");
            } else {
                recommendations.push("<strong>Nitrogen (N) levels are adequate.</strong>");
            }

            if (p < 45) {
                recommendations.push("<strong>Phosphorus (P) is low.</strong> Consider bone meal or a phosphate fertilizer.");
            } else {
                recommendations.push("<strong>Phosphorus (P) levels are adequate.</strong>");
            }

            if (k < 140) {
                recommendations.push("<strong>Potassium (K) is low.</strong> Consider adding potash or wood ash.");
            } else {
                recommendations.push("<strong>Potassium (K) levels are adequate.</strong>");
            }

            // Build the final HTML to show the user
            resultDiv.innerHTML = `
                <h4>Analysis Results:</h4>
                <ul style="text-align: left; margin: 1rem 0 0 1rem;">
                    <li>${recommendations[0]}</li>
                    <li>${recommendations[1]}</li>
                    <li>${recommendations[2]}</li>
                </ul>
                <p style="font-size: 0.9rem; margin-top: 15px;">*This is a demo. Always consult with a soil expert for precise recommendations.</p>
            `;
        });
    }
    
    // ... (Keep your other "DOMContentLoaded" code like counters, calculator, and language here)
});
/* -----------------------------------
    ANIMATED COUNTERS
----------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    // --- COUNTER ANIMATION ---
    const counters = document.querySelectorAll('.big[data-target]');
    const speed = 200; // Adjust animation speed (higher = slower)

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // Check if the counter is in view
            if (entry.isIntersecting) {
                const counter = entry.target;
                
                const animate = () => {
                    const target = +counter.getAttribute('data-target');
                    // Remove commas/formatting before parsing
                    const currentText = counter.innerText.replace(/,/g, '');
                    const current = +currentText;
                    const increment = target / speed;

                    if (current < target) {
                        counter.innerText = Math.ceil(current + increment).toLocaleString('en-US');
                        setTimeout(animate, 10); // Run again in 10ms
                    } else {
                        counter.innerText = target.toLocaleString('en-US'); // Set final target with commas
                    }
                };
                
                animate(); // Start the animation
                observer.unobserve(counter); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.8 // Start when 80% of the counter is visible
    });

    // Observe each counter
    counters.forEach(counter => {
        observer.observe(counter);
    });

    // --- FAQ ACCORDION ---
    const accItems = document.querySelectorAll('.acc-item');

    accItems.forEach(item => {
        const head = item.querySelector('.acc-head');
        const body = item.querySelector('.acc-body');
        const icon = item.querySelector('.acc-icon');

        head.addEventListener('click', () => {
            // Close all other items
            accItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.acc-body').style.display = 'none';
                    otherItem.querySelector('.acc-icon').innerText = '+';
                }
            });

            // Toggle the clicked item
            const isActive = item.classList.toggle('active');
            if (isActive) {
                body.style.display = 'block';
                icon.innerText = '-';
            } else {
                body.style.display = 'none';
                icon.innerText = '+';
            }
        });
    });

    // --- SLIDER (Optional, if you need JS control) ---
    // This is a simple JS for the slider buttons.
    // Your HTML has onclick="", but this is a cleaner way.
    // You can add this if you remove the onclick="" from your HTML.

    /*
    const sliderTrack = document.querySelector('.slider-track');
    const controlBtns = document.querySelectorAll('.control-btn');

    if (sliderTrack && controlBtns.length) {
        controlBtns.forEach(button => {
            button.addEventListener('click', (e) => {
                // Get direction from a data-attribute or button value
                // For this to work, update HTML:
                // <button class="control-btn" data-dir="-1">‹</button>
                // <button class="control-btn" data-dir="1">›</button>
                
                // const dir = parseInt(e.target.dataset.dir);
                // const scrollAmount = sliderTrack.clientWidth * 0.8; // Scroll 80%
                // sliderTrack.scrollBy({ left: scrollAmount * dir, behavior: 'smooth' });
            });
        });
    }
    */
});