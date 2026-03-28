import React, { useCallback, useRef } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Register the GSAP plugin
gsap.registerPlugin(useGSAP);

const Hero = () => {
  const container = useRef(null);

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } }); 
    tl.fromTo('.hero-badge', 
        { y: 20, autoAlpha: 0 }, 
        { y: 0, autoAlpha: 1, duration: 1, delay: 0.2 }
      )
      .fromTo('.hero-title', 
        { y: 40, autoAlpha: 0, filter: 'blur(12px)', scale: 0.98 }, 
        { y: 0, autoAlpha: 1, filter: 'blur(0px)', scale: 1, duration: 1.5 }, 
        "-=0.6"
      )
      .fromTo('.hero-subtitle', 
        { y: 20, autoAlpha: 0 }, 
        { y: 0, autoAlpha: 1, duration: 1 }, 
        "-=1.2"
      )
      .fromTo('.hero-desc', 
        { y: 20, autoAlpha: 0 }, 
        { y: 0, autoAlpha: 1, duration: 1 }, 
        "-=1.0"
      )
      .fromTo('.hero-btn', 
        { y: 20, autoAlpha: 0 }, 
        { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.15 }, 
        "-=0.8"
      )
      .fromTo('.hero-glow', 
        { autoAlpha: 0, scale: 0.8 }, 
        { autoAlpha: 1, scale: 1, duration: 2 }, 
        0 
      );
  }, { scope: container });

  return (
    <section ref={container} className="font-space relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-neutral-200 overflow-hidden pt-20 selection:bg-white selection:text-black">

      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false, zIndex: 0 },
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            interactivity: {
              detectsOn: "window",
              events: {
                onHover: { enable: true, mode: "grab" },
                resize: true,
              },
              modes: {
                grab: { distance: 180, links: { opacity: 0.5 } },
              },
            },
            particles: {
              color: { value: "#ffffff" },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.15,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 0.4,
                straight: false,
              },
              number: { density: { enable: true, area: 800 }, value: 40 },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 2 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 w-full h-full pointer-events-auto"
        />
        
        <div className="hero-glow absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-white/5 blur-[120px] pointer-events-none invisible"></div>
        <div className="hero-glow absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-white/5 blur-[120px] pointer-events-none invisible"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 pointer-events-none w-full max-w-4xl mx-auto">
        
        <div className="hero-badge invisible inline-flex items-center px-4 py-1.5 rounded-none border border-white/20 bg-white/5 backdrop-blur-sm mb-8 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          <span className="font-jetbrains text-neutral-300 tracking-widest uppercase text-xs flex items-center gap-1">
            <MdOutlineKeyboardArrowRight className="w-4 h-4 text-white" /> Ready to Code...
          </span>
        </div>
        
        <h1 className="hero-title invisible text-5xl md:text-7xl lg:text-8xl font-black tracking-widest mb-4 uppercase bg-linear-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent pb-2 drop-shadow-lg">
          Algorithmus
        </h1>
        
        <h3 className="hero-subtitle invisible text-xl md:text-2xl text-neutral-400 font-light tracking-wide mt-2">
          Competitive Programming Club of <span className="font-semibold text-white">IIIT Kota</span>
        </h3>
        
        <p className="hero-desc invisible font-jetbrains max-w-2xl mx-auto mt-8 text-sm md:text-base text-neutral-500 font-light leading-relaxed">
          "Let the friction of brain and code generate heat until we return"
        </p>

        <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-5 pointer-events-auto w-full sm:w-auto">
          
          <a href='https://www.instagram.com/algorithmus.iiitkota/' className="hero-btn invisible group cursor-pointer font-jetbrains w-full sm:w-auto px-8 py-4 rounded-none bg-white hover:bg-neutral-200 text-black font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            FOLLOW US
            <FiChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          
        </div>
      </div>

    </section>
  );
};

export default Hero;