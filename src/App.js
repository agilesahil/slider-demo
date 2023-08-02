import { gsap } from "gsap";
import "./style.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const a = ["text1", "text2", "text3"];
const b = ["right1", "right2", "right3"];

function App() {

  const sliderLeft = useRef();
  const sliderRight = useRef();
  const container = useRef();
  const pel = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      gsap.to(
        [sliderLeft.current , sliderRight.current ], 
        {
        y: - sliderLeft.current.offsetHeight + pel.current.offsetHeight,
        // duration:0.5,
        scrollTrigger:{
          trigger:container.current,
          pin:true,
          scrub:true,
          pinSpacing:true,
          snap: 0.5,
          markers:true,
          start:"top 98px",
          end:"bottom 98px",
          markers:true
         },
      });

    });
    return () => ctx.revert();
  });

  return (
    <>
      <div>
        <header></header>
        <div className="div1"></div>
        <div className="div12"></div>
        <div className="div2" ref={container}>
          <div className=" phone div-box">
            <div style={{border:"3px solid #000"}} ref={sliderLeft}>
              <p ref={pel} className="panel" style={{ backgroundColor: "red" }}>
                text1
              </p>
              <p className="panel" style={{ backgroundColor: "yellow" }}>
                text2
              </p>
              <p className="panel" style={{ backgroundColor: "orange" }}>
                text3
              </p>
            </div>
          </div>
          <div className=" phone div-box2">
            <div style={{border:"3px solid #000"}} ref={sliderRight}>
            <p className="panel">right1</p>
            <p className="panel">right2</p>
            <p className="panel">right3</p>
            </div>
          </div>
        </div>
        <div className="div1"></div>
        <div className="div12"></div>
      </div>
    </>
  );
}

export default App;
