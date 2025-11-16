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
/*
=========================================
 farmers.js
 - Accordion Logic
 - Slider Logic
 - Counter Logic
 - Scroll Animation Logic
=========================================
*/

document.addEventListener('DOMContentLoaded', function() {

    // ---------------------------------
    // 1. Accordion (FAQ) Logic
    // ---------------------------------
    const accItems = document.querySelectorAll('.acc-item');
    accItems.forEach(item => {
        const head = item.querySelector('.acc-head');
        head.addEventListener('click', () => {
            // Close all other items
            accItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.acc-body').style.maxHeight = null;
                    otherItem.querySelector('.acc-icon').textContent = '+';
                }
            });

            // Toggle the clicked item
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

    // ---------------------------------
    // 2. Slider (Success Stories) Logic
    // ---------------------------------
    // Note: This is a simple infinite slider logic
   /*
=========================================
 2. Slider (Success Stories) Logic
 (FIXED & UPGRADED)
=========================================
*/
try {
    const track = document.querySelector('.slider-track');
    if (!track) throw new Error("Slider track not found"); // Safety check

    const slides = Array.from(track.children);
    // Find the buttons by their class
    const nextButton = document.querySelector('.slider-controls .control-btn:last-child');
    const prevButton = document.querySelector('.slider-controls .control-btn:first-child');

    if (!nextButton || !prevButton) throw new Error("Slider controls not found");

    // Clone slides for infinite loop effect
    slides.forEach(slide => {
        track.appendChild(slide.cloneNode(true));
    });

    let currentSlideIndex = 0;
    
    // --- THIS IS THE BUG FIX ---
    // We explicitly set the width to match your CSS (320px + 20px gap).
    // This prevents the bug where offsetWidth is 0 before CSS loads.
    const slideWidth = 320 + 20;
    
    // This is now a local function, not a global 'window.moveSlide'
    function moveSlide(direction) {
        currentSlideIndex += direction;
        track.style.transition = 'transform 0.5s ease-in-out';
        track.style.transform = 'translateX(' + (-currentSlideIndex * slideWidth) + 'px)';

        // Reset for infinite loop
        if (currentSlideIndex >= slides.length) {
            // After the animation ends (500ms), jump back to the start
            setTimeout(() => {
                track.style.transition = 'none'; // No animation for the jump
                currentSlideIndex = 0;
                track.style.transform = 'translateX(0)';
            }, 500);
        }
        if (currentSlideIndex < 0) {
             // After the animation ends (500ms), jump to the end
            setTimeout(() => {
                track.style.transition = 'none';
                currentSlideIndex = slides.length - 1;
                track.style.transform = 'translateX(' + (-currentSlideIndex * slideWidth) + 'px)';
            }, 500);
        }
    }

    // --- THIS IS THE PROFESSIONAL UPGRADE ---
    // We add event listeners here instead of using onclick="" in the HTML.
    nextButton.addEventListener('click', () => moveSlide(1));
    prevButton.addEventListener('click', () => moveSlide(-1));

} catch (e) {
    console.log('Slider elements not found, skipping slider init:', e.message);
}

    // ---------------------------------
    // 3. Counter (Stats) Logic
    // ---------------------------------
    const counters = document.querySelectorAll('.counters .big');
    const speed = 200; // Speed of counting

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
    
    // Intersection Observer to start counter when visible
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


    // ---------------------------------
    // 4. ScrollReveal Animations
    // ---------------------------------
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '60px',
            duration: 1000,
            delay: 100,
            easing: 'ease-out',
            reset: false // Animations only happen once
        });

        // Hero Section
        sr.reveal('.hero .left h1', { origin: 'left', delay: 200 });
        sr.reveal('.hero .lead', { origin: 'left', delay: 300 });
        sr.reveal('.hero .hero-cta', { origin: 'left', delay: 400 });
        sr.reveal('.hero .hero-stats', { delay: 500 });
        sr.reveal('.hero .right .visual-box', { origin: 'right', delay: 300 });
        
        // Gallery
        sr.reveal('.gallery h2', { delay: 100 });
        sr.reveal('.gallery p', { delay: 200 });
        sr.reveal('.gallery-grid img', { interval: 100 });

        // Section Titles
        sr.reveal('.how-it-works-section h2, .support-system-section h2, .carbon-farmer-section h2, .crop-section h2, .slider h2, .testimonials h2, .faq h3, .download-section h2, .ready-to-transform-section h2', { delay: 100 });
        sr.reveal('.how-it-works-section .section-description, .support-system-section .section-description, .carbon-farmer-section .section-description, .crop-section .section-description, .download-section p, .ready-to-transform-section p', { delay: 200 });

        // How it Works
        sr.reveal('.steps-grid .step-card', { interval: 150 });
        
        // Support System (Your 2x2 grid)
        sr.reveal('.support-grid .support-card', { interval: 150 });

        // Carbon Credits
        sr.reveal('.carbon-step-card', { interval: 200 });
        sr.reveal('.carbon-farmer-section .learn-more-btn', { delay: 400 });

        // Crops We Support
        sr.reveal('.crop-grid .crop-item', { interval: 80, distance: '30px', scale: 0.9 });

        // Slider & Testimonials
        sr.reveal('.slider-track', { delay: 300 });
        sr.reveal('.test-grid .test-card', { interval: 150 });

        // FAQ
        sr.reveal('.acc-item', { interval: 100 });
        
        // Download & CTA
        sr.reveal('.download-section .phone-mock', { origin: 'left', delay: 200 });
        sr.reveal('.download-section .app-ctas', { origin: 'right', delay: 300 });
        sr.reveal('.ready-to-transform-section .btn', { delay: 300, scale: 1.1 });

    } else {
        console.log('ScrollReveal library not found.');
    }

});
/*
=========================================
 5. Crop Modal Logic
=========================================
*/

// --- IMPORTANT: UPDATE YOUR CROP INFO HERE ---
// 1. Add your crop images to a new folder: /assets/crops/
// 2. Update the text and image paths for each crop.
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
    // Add default info for other crops
    "Default": {
        image: "assets/crops/sugarcane.jpeg",
        testimonial: "“Rupiya’s inputs work for all my vegetables and improve my soil.” — Farmer",
        benefits: ["Improved soil organic carbon (SOC)", "Lower input costs across all crops", "Access to our full expert network"],
        ctaText: "Ask About This Crop"
    }
};
// Add entries for Sugarcane, Soybean, Turmeric...
cropData["Sugarcane"] = { ...cropData["Default"], ctaText: "Get Advisory for Sugarcane" };
cropData["Soybean"] = { ...cropData["Default"], ctaText: "Get Advisory for Soybean" };
cropData["Turmeric"] = { ...cropData["Default"], ctaText: "Get Advisory for Turmeric" };


// --- Modal Logic ---
document.addEventListener('DOMContentLoaded', () => {
    // Check if modal elements exist (so it doesn't break other pages)
    const modal = document.getElementById('crop-modal');
    if (!modal) return; // Exit if modal isn't on this page

    const closeBtn = document.getElementById('modal-close-btn');
    const cropButtons = document.querySelectorAll('.crop-item');

    // Modal content elements
    const modalImage = document.getElementById('modal-crop-image');
    const modalTitle = document.getElementById('modal-crop-title');
    const modalTestimonial = document.getElementById('modal-crop-testimonial');
    const modalBenefitsList = document.getElementById('modal-crop-benefits');
    const modalCta = document.getElementById('modal-crop-cta');

    // Function to open the modal
    function openModal(cropName) {
        // Find data, or use default
        const data = cropData[cropName] || cropData["Default"];

        // 1. Populate modal with data
        modalImage.src = data.image;
        modalImage.alt = cropName;
        modalTitle.textContent = cropName;
        modalTestimonial.textContent = data.testimonial;
        modalCta.textContent = data.ctaText;

        // 2. Clear and populate benefits
        modalBenefitsList.innerHTML = ''; // Clear old benefits
        data.benefits.forEach(text => {
            const li = document.createElement('li');
            li.textContent = text;
            modalBenefitsList.appendChild(li);
        });

        // 3. Show the modal
        modal.classList.add('active');
    }

    // Function to close the modal
    function closeModal() {
        modal.classList.remove('active');
    }

    // Add click listeners to all crop buttons
    cropButtons.forEach(button => {
        button.addEventListener('click', () => {
            const cropName = button.dataset.crop;
            openModal(cropName);
        });
    });

    // Add click listeners to close button and overlay
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        // Close modal ONLY if overlay background is clicked
        if (e.target === modal) {
            closeModal();
        }
    });
});