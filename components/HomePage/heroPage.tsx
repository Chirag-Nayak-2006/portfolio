'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrambleTextPlugin} from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import ProjectsComponent from "./projectsComponent";
import MyFooter from "./footerComponent";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleTextPlugin);


export default function HeroComponent() {
  const containerRef = useRef(null);

  const helloRef = useRef(null);

  useGSAP(() => {
    const t1 = gsap.timeline({delay: 0.7});

    t1.set(helloRef.current, {
    opacity: 1,
    scale: 1.25,
    });

    t1.to(helloRef.current, {
      scale: 1,
      duration: 0.15,
      ease: "back.out(3)",
    });

  });

  const mathRef = useRef(null);
  const compRef = useRef(null); 

  useGSAP(() => {
    console.log("mathRef:", mathRef.current)
    gsap.to(mathRef.current, {
      duration: 2, 
      scrollTrigger: {
        trigger: mathRef.current,
        scroller: containerRef.current,
        start: "top bottom",
        once: true,
      },
      scrambleText: {
        text: "Mathematics",
        chars: "xyzXYZπΣΔ√∞+-=*/123456789",
        revealDelay: 0.2,
      }
    })

    gsap.to(compRef.current, {
      duration: 2,
      scrollTrigger: {
        trigger: compRef.current,
        scroller: containerRef.current,
        start: "top bottom",
        once: true,
      },
      scrambleText: {
        text: "Computing",
        chars: "01",
        revealDelay: 0.2,
      }
    })
  })

  const footerRef = useRef(null);

  useGSAP(() => {
    gsap.to(footerRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: mathRef.current,
        scroller: containerRef.current,
        start: "top bottom",
        once: true,
      },
      ease: "power2",
      delay: 2,
    })
  })

  return (
    <>
      <div ref={containerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar">
        <div className="h-screen w-full flex items-center justify-center snap-start">
          <h1 className="text-9xl text-center opacity-0" ref={helloRef}>Hello.</h1>
        </div>
        <div className="h-screen w-full items-center flex flex-row snap-start" id="about-me">
          <div className="flex-1 justify-center items-center">
            <p className="text-7xl text-center mb-2.5">I am Chirag.</p>
            <p className="text-2xl text-center px-10">
              A <strong className="font-mono-heading px-1">
                  <span ref={mathRef} className="text-destructive">Mathematics</span>
                  {" "} 
                  and
                  {" "}
                  <span ref={compRef} className="text-destructive">Computing</span>
                </strong> bachelor at <br/>
              <em>Indian Institute of Technology, Goa</em>
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <Image
              src="/next.svg"
              alt="image of me standing"
              width="100"
              height="20"
            />
          </div>
        </div>
        <div className="h-screen w-full flex flex-row snap-start">
          <div className="flex-1">
            
          </div>
          <div className="flex flex-2 items-center justify-center">
            <p className="text-2xl text-center p-5">
                I'm interested in how things work—from mathematical abstractions to computational systems. <br/>
                This portfolio documents that exploration.
            </p>
          </div>
        </div>
        <div className="min-h-full snap-start">
          <ProjectsComponent/>
          <div ref={footerRef} className="fixed bottom-0 opacity-0 w-full">
            <MyFooter/>
          </div>
        </div>
      </div>
    </>
  );
}
