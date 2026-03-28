document.getElementById("year").textContent = new Date().getFullYear();

function initAnimations() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        return;
    }

    const prefersReduced =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const easeOut = "power3.out";
    const easeSoft = "power2.out";

    const heroTl = gsap.timeline({ defaults: { ease: easeOut } });
    heroTl
        .from(".hero__frame", { opacity: 0, y: 32, duration: 0.65 })
        .from(".hero__title", { opacity: 0, y: 22, duration: 0.6 }, "-=0.38")
        .from(".hero__tagline", { opacity: 0, y: 18, duration: 0.5 }, "-=0.42")
        .from(".guns-link", { opacity: 0, y: 16, duration: 0.48 }, "-=0.36");

    gsap.utils.toArray(".section").forEach((section) => {
        const head = section.querySelector(".section__head");
        if (head) {
            gsap.from(head, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 88%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                y: 20,
                duration: 0.55,
                ease: easeSoft,
            });
        }
    });

    gsap.from(".project-card", {
        scrollTrigger: {
            trigger: ".projects",
            start: "top 84%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        y: 28,
        stagger: 0.09,
        duration: 0.58,
        ease: easeSoft,
    });

    gsap.from(".stats__figure", {
        scrollTrigger: {
            trigger: ".section--stats",
            start: "top 86%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        y: 24,
        stagger: 0.14,
        duration: 0.6,
        ease: easeSoft,
    });

    gsap.from(".footer", {
        scrollTrigger: {
            trigger: ".footer",
            start: "top 94%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        y: 12,
        duration: 0.45,
        ease: easeSoft,
    });

    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAnimations);
} else {
    initAnimations();
}
