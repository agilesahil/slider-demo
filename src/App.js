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

  useEffect(() => {
    let ctx = gsap.context(() => {
      let sections = gsap.utils.toArray(".panel");
      console.log("🚀 ~ file: App.js:18 ~ App ~ sections:", sections)
      gsap.to(sections, {
        yPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: 0.1,
            delay: 0.1,
            ease: "power1.inOut"
          },
          // base vertical scrolling on how wide the container is so it feels more natural.
          // start: "top 98px",
          end: "+=3500",
        }
      });
    });
    return () => ctx.revert();
  });

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {

  //     gsap.to(
  //       [sliderLeft.current , sliderRight.current ], 
  //       {
  //       y: - sliderLeft.current.offsetHeight + pel.current.offsetHeight,
  //       // duration:0.5,
  //       scrollTrigger:{
  //         trigger:container.current,
  //         pin:true,
  //         scrub:true,
  //         pinSpacing:true,
  //         snap: 0.5,
  //         markers:true,
  //         start:"top 98px",
  //         end:"bottom 98px",
  //         markers:true
  //        },
  //     });

  //   });
  //   return () => ctx.revert();
  // });

  return (
    <>
      <div>
        <header></header>
        <div className="div1"></div>
        <div className="div12"></div>
        <div className="div2" ref={container} style={{ overscrollBehavior: "none" }}>
          <div className=" phone div-box">
            <div style={{ border: "3px solid #000" , display:"flex" , flexDirection:"column" , justifyContent:"space-between" }} ref={sliderLeft}>
              <div className="panel">
                <p className="phone" style={{ backgroundColor: "red" }}>
                  text1
                </p>
                <p>right1</p>
              </div>
              <div className="panel">
                <p className="phone" style={{ backgroundColor: "yellow" }}>
                  text2
                </p>
                <p>right2</p>
              </div>
              <div className="panel">
                <p className="phone" style={{ backgroundColor: "orange" }}>
                  text3
                </p>
                <p>right3</p>
              </div>
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
