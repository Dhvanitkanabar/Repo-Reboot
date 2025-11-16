
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

document.addEventListener('DOMContentLoaded', function() {

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


try {
    const track = document.querySelector('.slider-track');
    if (!track) throw new Error("Slider track not found"); // Safety check

    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.slider-controls .control-btn:last-child');
    const prevButton = document.querySelector('.slider-controls .control-btn:first-child');

    if (!nextButton || !prevButton) throw new Error("Slider controls not found");

    slides.forEach(slide => {
        track.appendChild(slide.cloneNode(true));
    });

    let currentSlideIndex = 0;
 
    
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


    const counters = document.querySelectorAll('.counters .big');
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
    if (counterSection) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    counters.forEach(animateCounter);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(counterSection);
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
        
        sr.reveal('.gallery h2', { delay: 100 });
        sr.reveal('.gallery p', { delay: 200 });
        sr.reveal('.gallery-grid img', { interval: 100 });

        sr.reveal('.how-it-works-section h2, .support-system-section h2, .carbon-farmer-section h2, .crop-section h2, .slider h2, .testimonials h2, .faq h3, .download-section h2, .ready-to-transform-section h2', { delay: 100 });
        sr.reveal('.how-it-works-section .section-description, .support-system-section .section-description, .carbon-farmer-section .section-description, .crop-section .section-description, .download-section p, .ready-to-transform-section p', { delay: 200 });

        sr.reveal('.steps-grid .step-card', { interval: 150 });
        
        sr.reveal('.support-grid .support-card', { interval: 150 });

        sr.reveal('.carbon-step-card', { interval: 200 });
        sr.reveal('.carbon-farmer-section .learn-more-btn', { delay: 400 });

        sr.reveal('.crop-grid .crop-item', { interval: 80, distance: '30px', scale: 0.9 });

        sr.reveal('.slider-track', { delay: 300 });
        sr.reveal('.test-grid .test-card', { interval: 150 });

        sr.reveal('.acc-item', { interval: 100 });
        
        sr.reveal('.download-section .phone-mock', { origin: 'left', delay: 200 });
        sr.reveal('.download-section .app-ctas', { origin: 'right', delay: 300 });
        sr.reveal('.ready-to-transform-section .btn', { delay: 300, scale: 1.1 });

    } else {
        console.log('ScrollReveal library not found.');
    }

});



const cropData = {
    "Pomegranate": {
        image: "assets/crops/pomogranate.jpeg",
        testimonial: "“Our pomegranates are bigger and have fewer spots since joining Rupiya.” — R. Patel, Nashik",
        benefits: ["Avg. 20% increase in fruit size", "Reduced fungal infections & spots", "Guaranteed buy-back for export quality"],
        ctaText: "Get Advisory for Pomegranate"
    },
    "Grapes": {
        image: "assets/crops/grapes.jpeg",
        testimonial: "“Rupiya’s advisory helped me achieve the perfect sugar level for my grapes.” — S. Devi, Sangli",
        benefits: ["Improved berry uniformity (TSS)", "100% Residue-free for export", "Access to premium wine and table buyers"],
        ctaText: "Get Advisory for Grapes"
    },
    "Tomato": {
        image: "assets/crops/tomato.jpeg",
        testimonial: "“No more leaf curl virus. My yield has doubled and the fruit is high quality.” — H. Kumar",
        benefits: ["Drastic reduction in pests & viruses", "Longer shelf-life (15+ days)", "Certified for institutional buyers (ITC, etc.)"],
        ctaText: "Get Advisory for Tomato"
    },
    "Chilli": {
        image: "assets/crops/chilli.jpeg",
        testimonial: "“I got a 30% higher price for my residue-free chillies at the market.” — V. Singh",
        benefits: ["Better fruit color and size", "Control over thrips and mites", "Higher market value"],
        ctaText: "Get Advisory for Chilli"
    },
    "Potato": {
        image: "assets/crops/potato.jpeg",
        testimonial: "“Uniform, large potatoes with no black spots. The buyers were very happy.” — L. Bai",
        benefits: ["Uniform tuber size", "Disease-free and longer storage life", "Pre-set contracts with processing companies"],
        ctaText: "Get Advisory for Potato"
    },
    "Cotton": {
        image: "assets/crops/cotton.jpeg",
        testimonial: "“My soil is finally healthy, and the cotton bolls are larger and cleaner.” — K. Reddy",
        benefits: ["Reduced pink bollworm attacks", "Improved soil health for crop rotation", "Better lint quality"],
        ctaText: "Get Advisory for Cotton"
    },
    "Onion": {
        image: "assets/crops/onion.jpeg",
        testimonial: "“Rupiya helped me save my crop from humidity and got me a great price.” — A. Pradhan",
        benefits: ["Uniform bulb size and color", "Reduced storage rot", "Parametric insurance against excess rain"],
        ctaText: "Get Advisory for Onion"
    },
    "Default": {
        image: "assets/crops/sugarcane.jpeg",
        testimonial: "“Rupiya’s inputs work for all my vegetables and improve my soil.” — Farmer",
        benefits: ["Improved soil organic carbon (SOC)", "Lower input costs across all crops", "Access to our full expert network"],
        ctaText: "Ask About This Crop"
    }
};
cropData["Sugarcane"] = { ...cropData["Default"], ctaText: "Get Advisory for Sugarcane" };
cropData["Soybean"] = { ...cropData["Default"], ctaText: "Get Advisory for Soybean" };
cropData["Turmeric"] = { ...cropData["Default"], ctaText: "Get Advisory for Turmeric" };


document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('crop-modal');
    if (!modal) return; 

    const closeBtn = document.getElementById('modal-close-btn');
    const cropButtons = document.querySelectorAll('.crop-item');

    const modalImage = document.getElementById('modal-crop-image');
    const modalTitle = document.getElementById('modal-crop-title');
    const modalTestimonial = document.getElementById('modal-crop-testimonial');
    const modalBenefitsList = document.getElementById('modal-crop-benefits');
    const modalCta = document.getElementById('modal-crop-cta');

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
});