import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const Moi = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const anim = () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".cont",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.25,
        }
      );
      tl.fromTo(".text" , {
        opacity: 0,
        y: 100,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
      
      })
    };
    anim();
  }, []);

  return (
    <>
    <div className="box3">
      <div className="cont">
        <img className="stagger3" src="./1.jpg" alt="" />
        <p>Aventurier</p>
      </div>
      <div className="cont">
        <img src="./2.jpg" alt="" className="stagger3" />
        <p>Papa poule</p>
      </div>
      <div className="cont">
        <video
          src="./video.mp4"
          className="stagger3"
          autoPlay
          loop
          muted
        ></video>
       <span>Maraicher du dimanche</span>
      </div>

    </div>
      <div className="text"><p>"Je m’appelle Romain Marty, j'ai 29 ans. Je suis en reconversion professionnelle afin de vivre de ma passion le développement. Je passe des heures devant mon ordi et j'adore ça mais régulièrement je coupe tout pour prendre l'air des montagnes. J'aspire aussi à une vie saine j'ai découvert que j'avais la main verte, j'ai donc aménagé un grand potager qui nourrit ma famille de bons légumes."</p></div>
 </>
      );
};

export default Moi;
