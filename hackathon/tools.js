
document.addEventListener('DOMContentLoaded', () => {
    
    const analyzeBtn = document.getElementById('analyze-soil-btn');
    
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
    
});

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.big[data-target]');
    const speed = 200;
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                
                const animate = () => {
                    const target = +counter.getAttribute('data-target');
                    const currentText = counter.innerText.replace(/,/g, '');
                    const current = +currentText;
                    const increment = target / speed;

                    if (current < target) {
                        counter.innerText = Math.ceil(current + increment).toLocaleString('en-US');
                        setTimeout(animate, 10); 
                    } else {
                        counter.innerText = target.toLocaleString('en-US');
                    }
                };
                
                animate();
                observer.unobserve(counter); 
            }
        });
    }, {
        threshold: 0.8 
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });

    const accItems = document.querySelectorAll('.acc-item');

    accItems.forEach(item => {
        const head = item.querySelector('.acc-head');
        const body = item.querySelector('.acc-body');
        const icon = item.querySelector('.acc-icon');

        head.addEventListener('click', () => {
            accItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.acc-body').style.display = 'none';
                    otherItem.querySelector('.acc-icon').innerText = '+';
                }
            });

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

});