{/* <script src="https://unpkg.com/lenis@1.1.2/dist/lenis.min.js"></script>

document.addEventListener ("DOMContentLoaded", function(){
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time)=>{
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0); */}
// });

// document.addEventListener("DOMContentLoaded", function() {
//     if (typeof Lenis === 'undefined') {
//         console.error('Lenis is not defined. Please check if the Lenis script is included correctly.');
//         return;
//     }

//     const lenis = new Lenis();

//     // Update ScrollTrigger on scroll
//     lenis.on("scroll", ScrollTrigger.update);

//     // Use GSAP's ticker to synchronize with Lenis
//     gsap.ticker.add((time) => {
//         lenis.raf(time * 1000);
//     });

//     gsap.ticker.lagSmoothing(0);

//     const services = gsap.utils.toArray (".servide");

//     const observerOptions = {
//         root: null,
//         rootMargin: "0px", 
//         threshold: 0.1, 
//     }

//     const observerCallback = (entries, observer) => {
//         entries.forEach ((entry)=>{
//             if (entry.isIntersecting) {
//                 const service = entry.target;
//                 const imgContainer = service.querySelector (".img");

//                 ScrollTrigger.create({
//                     trigger: service, 
//                     start: "bottom bottom",
//                     end: "top top",
//                     scrub: true,
//                     onUpdate: (self) => {
//                         let progress=self
//                         let newWidth= 30+70*progress
//                         gsap.to(imgContainer, {
//                             width: newWidth + "%",
//                             duration: 0.1,
//                             ease: "none",
//                         });
//                     }
//                 });

//                 ScrollTrigger.create ({
//                     trigger: service, 
//                     start: "top bottom",
//                     end: "top top", 
//                     scrub: true, 
//                     onUpdate: (self)=> {
//                         let progress = self.progress;
//                         let newHeight = 150 + 300 * progress;
//                         gsap.to(service, {
//                             height: newHeight + "px", 
//                             duration: 0.1, 
//                             ease: "none",
//                         });
//                     },
//                 });

//                 observer.unobserve(service);
//             }
//         });
//     };

//     const observer= new IntersectionObserver(observerCallback, observerOptions);

//     services.forEach((service)=>{
//         observer.observe(service);
//     });
// });












document.addEventListener("DOMContentLoaded", function() {
    // Check if Lenis is defined
    if (typeof Lenis === 'undefined') {
        console.error('Lenis is not defined. Please check if the Lenis script is included correctly.');
        return;
    }

    // Initialize Lenis
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false
    });

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Update ScrollTrigger on Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Use GSAP's ticker to synchronize with Lenis
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const services = gsap.utils.toArray(".service");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const service = entry.target;
                const imgContainer = service.querySelector(".img");

                ScrollTrigger.create({
                    trigger: service,
                    start: "bottom bottom",
                    end: "top top",
                    scrub: true,
                    onUpdate: (self) => {
                        let progress = self.progress;
                        let newWidth = 30 + 70 * progress;
                        gsap.to(imgContainer, {
                            width: newWidth + "%",
                            duration: 0.1,
                            ease: "none",
                        });
                    }
                });

                ScrollTrigger.create({
                    trigger: service,
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                    onUpdate: (self) => {
                        let progress = self.progress;
                        let newHeight = 150 + 300 * progress;
                        gsap.to(service, {
                            height: newHeight + "px",
                            duration: 0.1,
                            ease: "none",
                        });
                    },
                });

                observer.unobserve(service);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    services.forEach((service) => {
        observer.observe(service);
    });
});