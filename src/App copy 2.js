import { gsap } from 'gsap';
import './style.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useLayoutEffect, useMemo, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function App() {

  const slider = useRef();
  const slider2 = useRef();
  // const timeline = useMemo(() => gsap.timeline({ paused: true }), [])
  
  useEffect(() => {
    const el = slider.current;
    gsap.to( el , 
      {
      y:() => `-${slider.current.clientHeight}`,
      duration:10,
      scrollTrigger:{
        trigger:".div-box" ,
        markers:true,
        start:"0 10%" ,
        end:() => `-${slider.current.clientHeight}`,
        scrub:1,
        pin:".div2",
        // pinSpacing:false,
      }
    } )
  },[]);

  useEffect(() => {
    const el = slider2.current;
    gsap.to( el , 
      {
      y:() => `-${slider2.current.clientHeight}`,
      duration:1,
      delay:5,
      scrollTrigger:{
        trigger:".div-box2" ,
        markers:true,
        start:"0 10%" ,
        end:() => `-${slider2.current.clientHeight}`,
        scrub:1,
        pin:".div2",
        // pinSpacing:false,
      }
    } )
  },[]);

  // useEffect(() => {
  //   timeline
  //     .to(slider2.current, {
  //       x: 5,
  //       duration:3,
  //     })
  //   return () => {
  //     timeline.kill()
  //   }
  // }, [timeline])

  return (
    <>
        <div className='div1'></div>
        <div className='div12'></div>
        <div className='div2'>
            <div className='div-box' >
              <p ref={slider2} >text1</p>
              <p>text2</p>
              <p>text3</p>
            </div>
            <div className='div-box2'>
              <p ref={slider} >right1</p>
              <p>right2</p>
              <p>right3</p>
            </div>
        </div>
        <div className='div1'></div>
        <div className='div12'></div>
    </>
  );
}

export default App;
