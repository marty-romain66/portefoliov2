import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function anim() {
    const tl = gsap.timeline({
        scrollTrigger: {
        trigger: ".box",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        pin: true,
        pinSpacing: false,
        },
    });
    
    tl.to(".box", {
        backgroundColor: "#000",
        duration: 1,
    });
    }