import { gsap } from 'gsap';
import './style.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function App() {

  const component = useRef();
  const slider = useRef();
  const slider2 = useRef();
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        yPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetHeight
        }
      });
      let panels2 = gsap.utils.toArray(".panel2");
      gsap.to(panels, {
        yPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider2.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider2.current.offsetHeight
        }
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="App" ref={component}>
      {/* <div className="firstContainer">
        <h1>Testing horizontal scrolling w/ three sections</h1>
        <h2>First Container</h2>
      </div>
      <div className="firstContainer">
        <h1>Testing horizontal scrolling w/ three sections</h1>
        <h2>second Container</h2>
      </div>
      <div className="firstContainer">
        <h1>Testing horizontal scrolling w/ three sections</h1>
        <h2>third Container</h2>
      </div> */}
      <div ref={slider} className="container">
        {/* <div className="description panel blue">
          <div>
            SCROLL DOWN
            <div className="scroll-down">
              <div className="arrow"></div>
            </div>
          </div>
        </div> */}
        <div className="panel red">
          <div>left1</div>
        </div>
        <div className="panel orange">
          <div>left2</div>
        </div>
        <div className="panel purple">
          <div>left3</div>
        </div>
      </div>

      <div ref={slider2} className="container">
        {/* <div className="description panel blue">
          <div>
            SCROLL DOWN
            <div className="scroll-down">
              <div className="arrow"></div>
            </div>
          </div>
        </div> */}
        <div className="panels2 red">
          <div>demo1</div>
        </div>
        <div className="panels2 orange">
          <div>demo2</div>
        </div>
        <div className="panels2 purple">
          <div>demo3</div>
        </div>
      </div>

      <div className="lastContainer">Last Container</div>
      <div className="lastContainer">Last Container 1</div>
      <div className="lastContainer">Last Container 2</div>
    </div>
  );
}

export default App;
