
document.addEventListener("DOMContentLoaded", () => {
    
    const accItems = document.querySelectorAll('.acc-item');

    accItems.forEach(item => {
        const head = item.querySelector('.acc-head');
        const body = item.querySelector('.acc-body');
        
        if (head && body) { 
            head.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                accItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.acc-body').style.display = 'none';
                    }
                });

                if (isActive) {
                    item.classList.remove('active');
                    body.style.display = 'none';
                } else {
                    item.classList.add('active');
                    body.style.display = 'block';
                }
            });
        }
    });

    const counters = document.querySelectorAll('.big[data-target]');
    if (counters.length > 0) {
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
        }, { threshold: 0.8 });
        counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    const calculateBtn = document.getElementById('calculate-btn');
    if (calculateBtn) {
        const hectaresInput = document.getElementById('hectares');
        const practiceSelect = document.getElementById('practice');
        const resultDiv = document.getElementById('calculator-result');
        
        calculateBtn.addEventListener('click', () => {
            const hectares = parseFloat(hectaresInput.value);
            const practice = practiceSelect.value;
            const pricePerCredit = 800;
            if (isNaN(hectares) || hectares <= 0) {
                resultDiv.innerHTML = `<p style="color: red;">Please enter a valid number of hectares.</p>`;
                return;
            }
            let creditsPerHectare = 0;
            if (practice === 'no-till') creditsPerHectare = 0.5;
            else if (practice === 'cover-crops') creditsPerHectare = 0.8;
            else if (practice === 'full-regen') creditsPerHectare = 1.2;
            
            const totalCredits = hectares * creditsPerHectare;
            const totalEarnings = totalCredits * pricePerCredit;
            
            resultDiv.innerHTML = `
                <p>Estimated Annual Credits: <strong>${totalCredits.toFixed(1)}</strong></p>
                <p>Estimated Annual Earnings: <strong>₹${totalEarnings.toLocaleString('en-IN')}</strong></p>
                <p style="font-size: 0.9rem; margin-top: 10px;">This is an estimate. Actual earnings depend on market prices and verification.</p>
            `;
        });
    }
});