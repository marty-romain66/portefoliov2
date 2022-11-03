import logo from "./logo.svg";
import "./sass/index.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import Moi from "./componants/Moi";
import Competances from "./componants/Competances";
import Contact from "./componants/Contact";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [toggle, setToggle] = useState(false);
  const [competance, setCompetance] = useState(false);
  const [contact, setContact] = useState(false);
  useEffect(() => {
    const anim = () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".stagger",
        {
          opacity: 0,
        },
        {
          opacity: 1,

          stagger: 0.1,
        }
      );
      tl.fromTo(
        "h2",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        }
      );
      tl.fromTo(
        ".stagger2",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.1,
        }
      );
    };

    anim();
  }, []);
  if (toggle) {
    const tll = gsap.timeline();
    tll.fromTo(
      "img",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.5,
      }
    );
  }
  const change = () => {
    const tl = gsap.timeline();
    tl.to(".box3", {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        setToggle(false);
        setCompetance(!competance);
        setContact(false);
      },
    });
  };
  const change2 = () => {
    if (toggle) {
      const tl = gsap.timeline();
      tl.to(".competances", {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          setToggle(!toggle);
          setCompetance(false);
          setContact(false);
        },
      });
    } else {
      setToggle(!toggle);
      setCompetance(false);
      setContact(false);
    }
  };
  const text = "Romain Marty";
  const animTitle = () => {
    // create span for each letter
    const letters = text.split("").map((letter, index) => {
      return (
        <span key={index} id="gsap" className="stagger">
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={50}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={1.8}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          "h2",
          "p",
        ]}
      />
<header>
      <div className="box" id="box">
        <h1>{animTitle()}</h1>
        <h2>developpeur web</h2>
        
        <div className="box2">
          <p className="stagger2" onClick={() => change2()}>
            Qui suis-je?
          </p>
          <p className="stagger2" onClick={() => change()}>
            Mes compétances
          </p>
          <p className="stagger2">Mes projets</p>
          <p
            className="stagger2"
            onClick={() => {
              setContact(!contact);
              setCompetance(false);
              setToggle(false);
            }}
          >
            Me contacter
          </p>
        </div>
        {toggle ? <Moi /> : null}
        {competance ? <Competances /> : null}
        {contact ? <Contact /> : null}
      </div>
      </header>
    </>
  );
}

export default App;
