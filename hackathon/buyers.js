

document.addEventListener('DOMContentLoaded', function() {

    try {
        const accItems = document.querySelectorAll('.acc-item');
        accItems.forEach(item => {
            const head = item.querySelector('.acc-head');
            head.addEventListener('click', () => {
                accItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.acc-body').style.maxHeight = null;
                        otherItem.querySelector('.acc-icon').textContent = '+';
                    }
                });
                item.classList.toggle('active');
                const body = item.querySelector('.acc-body');
                const icon = item.querySelector('.acc-icon');
                if (item.classList.contains('active')) {
                    body.style.maxHeight = body.scrollHeight + 'px';
                    icon.textContent = '–';
                } else {
                    body.style.maxHeight = null;
                    icon.textContent = '+';
                }
            });
        });
    } catch (e) {
        console.log('Accordion elements not found.');
    }

 
    
    try {
        const track = document.querySelector('.slider-track');
        if (!track) throw new Error("Slider track not found");

        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.slider-controls .control-btn:last-child');
        const prevButton = document.querySelector('.slider-controls .control-btn:first-child');

        if (!nextButton || !prevButton) throw new Error("Slider controls not found");

        slides.forEach(slide => {
            track.appendChild(slide.cloneNode(true));
        });

        let currentSlideIndex = 0;
        const slideWidth = 320 + 20;
        
        function moveSlide(direction) {
            currentSlideIndex += direction;
            track.style.transition = 'transform 0.5s ease-in-out';
            track.style.transform = 'translateX(' + (-currentSlideIndex * slideWidth) + 'px)';

            if (currentSlideIndex >= slides.length) {
                setTimeout(() => {
                    track.style.transition = 'none';
                    currentSlideIndex = 0;
                    track.style.transform = 'translateX(0)';
                }, 500);
            }
            if (currentSlideIndex < 0) {
                 setTimeout(() => {
                    track.style.transition = 'none';
                    currentSlideIndex = slides.length - 1;
                    track.style.transform = 'translateX(' + (-currentSlideIndex * slideWidth) + 'px)';
                }, 500);
            }
        }
        nextButton.addEventListener('click', () => moveSlide(1));
        prevButton.addEventListener('click', () => moveSlide(-1));

    } catch (e) {
        console.log('Slider elements not found, skipping slider init:', e.message);
    }


    try {
        const counters = document.querySelectorAll('.counters .big');
        if (counters.length === 0) throw new Error("Counters not found");
        
        const speed = 200; 

        const animateCounter = (counter) => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(() => animateCounter(counter), 10);
            } else {
                counter.innerText = target;
            }
        };
        
        const counterSection = document.querySelector('.counters');
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    counters.forEach(animateCounter);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(counterSection);
    } catch (e) {
        console.log('Counter elements not found.');
    }


    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '60px',
            duration: 1000,
            delay: 100,
            easing: 'ease-out',
            reset: false
        });

    sr.reveal('.hero .left h1', { origin: 'left', delay: 200 });
        sr.reveal('.hero .lead', { origin: 'left', delay: 300 });
        sr.reveal('.hero .hero-cta', { origin: 'left', delay: 400 });
        sr.reveal('.hero .hero-stats', { delay: 500 });
        sr.reveal('.hero .right .visual-box', { origin: 'right', delay: 300 });
        sr.reveal('.counters .counter', { interval: 100 });
        sr.reveal('.slider h2, .testimonials h2, .faq h2, .download-section h2, .ready-to-transform-section h2', { delay: 100 });
        sr.reveal('.slider-track', { delay: 300 });
        sr.reveal('.test-grid .test-card', { interval: 150 });
        sr.reveal('.acc-item', { interval: 100 });
        sr.reveal('.download-section .phone-mock', { origin: 'left', delay: 200 });
        sr.reveal('.download-section .app-ctas', { origin: 'right', delay: 300 });
        sr.reveal('.ready-to-transform-section .btn', { delay: 300, scale: 1.1 });
        sr.reveal('.how-it-works-section .steps-grid .step-card', { interval: 150 });

     sr.reveal('.gallery-grid img', { interval: 100 });
        sr.reveal('.support-grid .support-card', { interval: 150 });
        sr.reveal('.carbon-step-card', { interval: 200 });
        sr.reveal('.crop-grid .crop-item', { interval: 80, distance: '30px', scale: 0.9 });

     sr.reveal('.empower-grid .empower-card', { interval: 150 });
        
 sr.reveal('.sourcing-grid .sourcing-card', { interval: 150 });

    } else {
        console.log('ScrollReveal library not found.');
    }

    
    
    try {
        const modal = document.getElementById('crop-modal');
        if (!modal) throw new Error("Crop modal not found");

        const closeBtn = document.getElementById('modal-close-btn');
        const cropButtons = document.querySelectorAll('.crop-item');
        const modalImage = document.getElementById('modal-crop-image');
        const modalTitle = document.getElementById('modal-crop-title');
        const modalTestimonial = document.getElementById('modal-crop-testimonial');
        const modalBenefitsList = document.getElementById('modal-crop-benefits');
        const modalCta = document.getElementById('modal-crop-cta');

        const cropData = {
            "Pomegranate": { image: "assets/crops/pomegranate.jpg", testimonial: "“Our pomegranates are bigger and have fewer spots since joining Rupiya.” — R. Patel, Nashik", benefits: ["Avg. 20% increase in fruit size", "Reduced fungal infections & spots", "Guaranteed buy-back for export quality"], ctaText: "Get Advisory for Pomegranate" },
            "Grapes": { image: "assets/crops/grapes.jpg", testimonial: "“Rupiya’s advisory helped me achieve the perfect sugar level for my grapes.” — S. Devi, Sangli", benefits: ["Improved berry uniformity (TSS)", "100% Residue-free for export", "Access to premium wine and table buyers"], ctaText: "Get Advisory for Grapes" },
            "Tomato": { image: "assets/crops/tomato.jpg", testimonial: "“No more leaf curl virus. My yield has doubled and the fruit is high quality.” — H. Kumar", benefits: ["Drastic reduction in pests & viruses", "Longer shelf-life (15+ days)", "Certified for institutional buyers (ITC, etc.)"], ctaText: "Get Advisory for Tomato" },
            "Default": { image: "assets/crops/default.jpg", testimonial: "“Rupiya’s inputs work for all my vegetables and improve my soil.” — Farmer", benefits: ["Improved soil organic carbon (SOC)", "Lower input costs across all crops", "Access to our full expert network"], ctaText: "Ask About This Crop" }
        };
        ["Chilli", "Potato", "Cotton", "Onion", "Sugarcane", "Soybean", "Turmeric"].forEach(crop => {
            cropData[crop] = { ...cropData["Default"], image: `assets/crops/${crop.toLowerCase()}.jpg`, ctaText: `Get Advisory for ${crop}` };
        });

        function openModal(cropName) {
            const data = cropData[cropName] || cropData["Default"];
            modalImage.src = data.image;
            modalImage.alt = cropName;
            modalTitle.textContent = cropName;
            modalTestimonial.textContent = data.testimonial;
            modalCta.textContent = data.ctaText;
            modalBenefitsList.innerHTML = '';
            data.benefits.forEach(text => {
                const li = document.createElement('li');
                li.textContent = text;
                modalBenefitsList.appendChild(li);
            });
            modal.classList.add('active');
        }

        function closeModal() {
            modal.classList.remove('active');
        }

        cropButtons.forEach(button => {
            button.addEventListener('click', () => {
                const cropName = button.dataset.crop;
                openModal(cropName);
            });
        });

        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    } catch (e) {
        console.log("Crop modal logic skipped (not on this page).");
    }

});
