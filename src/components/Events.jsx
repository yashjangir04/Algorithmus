import React, { useState, useRef, useEffect } from 'react';
import { FiCalendar, FiMapPin, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { MdLeaderboard } from "react-icons/md";
import gsap from 'gsap';

const EventsInfinite = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const cardsRef = useRef([]);

  const galleryEvents = [
    {
      id: 1,
      title: "WTF Algo",
      date: "6TH February 2026",
      location: "Computer Center",
      description: "A logic-based fun event designed to challenge your mind through creative, non-CP problem-solving rounds.",
      image: "./img2.JPG",
      leaderboard: "https://codeforces.com/gym/669397/standings"
    },
    {
      id: 2,
      title: "Endeavour 5.0",
      date: "6TH Februrary 2026",
      location: "Computer Center",
      description: "A 2-hour coding contest hosted on Codeforces featuring 6-7 algorithmic problems of increasing difficulty.",
      image: "./img1.JPG",
      leaderboard: "https://codeforces.com/gym/669860/standings"
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryEvents.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryEvents.length) % galleryEvents.length);
  };

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (index === currentIndex) {
        gsap.to(card, {
          x: '0%',
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          zIndex: 10,
          pointerEvents: 'auto'
        });

        gsap.fromTo(card.querySelectorAll('.stagger-item'),
          { 
            opacity: 0, 
            x: 40 
          },
          { 
            opacity: 1, 
            x: 0, 
            duration: 0.6, 
            stagger: 0.1, 
            ease: 'power3.out', 
            delay: 0.2 
          }
        );
      } else {
        const direction = index < currentIndex ? '-50%' : '50%';
        gsap.to(card, {
          x: direction,
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: 'power3.out',
          zIndex: 0,
          pointerEvents: 'none'
        });
      }
    });
  }, [currentIndex]);

  const handleMouseDown = (e) => {
    setStartX(e.pageX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.pageX - startX;
    
    if (diff > 50) {
      prevSlide();
      setIsDragging(false);
    } else if (diff < -50) {
      nextSlide();
      setIsDragging(false);
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id='events' className="cursor-pointer font-space relative w-full py-32 bg-black border-t border-white/10 selection:bg-white selection:text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="event-header mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 bg-white/5 mb-4">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span className="font-jetbrains text-neutral-300 tracking-widest uppercase text-xs">#include &lt;algorithmus.h&gt;</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest">
              Recent <span className="text-neutral-500">Events</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={prevSlide}
              className="cursor-pointer p-3 border border-white/20 text-white hover:bg-white hover:text-black transition-colors z-20 relative"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="cursor-pointer p-3 border border-white/20 text-white hover:bg-white hover:text-black transition-colors z-20 relative"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          className={`relative w-full h-150 lg:h-125 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
        >
          {galleryEvents.map((event, index) => (
            <div 
              key={event.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group absolute inset-0 w-full h-full flex flex-col lg:flex-row border border-white/10 bg-[#050505] overflow-hidden opacity-0"
            >
              <div className="stagger-item lg:w-3/5 relative h-64 lg:h-full border-b lg:border-b-0 lg:border-r border-white/10 pointer-events-none">
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={event.image} 
                  alt={event.title} 
                  draggable="false"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>

              <div className="lg:w-2/5 flex flex-col justify-center p-8 lg:p-12 pointer-events-none">
                <div className="stagger-item flex flex-wrap items-center gap-4 mb-6 font-jetbrains text-xs text-neutral-400 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="w-4 h-4 text-white" />
                    {event.date}
                  </div>
                  <div className="w-1 h-1 rounded-full bg-neutral-600"></div>
                  <div className="flex items-center gap-2">
                    <FiMapPin className="w-4 h-4 text-white" />
                    {event.location}
                  </div>
                </div>

                <h3 className="stagger-item text-3xl font-bold text-white mb-4 uppercase tracking-wide leading-tight">
                  {event.title}
                </h3>
                <p className="stagger-item font-jetbrains text-sm text-neutral-500 leading-relaxed font-light mb-8">
                  {event.description}
                </p>

                <div className="stagger-item w-max">
                  <a className="cursor-pointer pointer-events-auto px-6 py-3 border border-white text-white font-jetbrains text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 relative z-20"
                  href={`${event.leaderboard}`}>
                    Leaderboard
                    <MdLeaderboard className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-3 mt-8 relative z-20">
          {galleryEvents.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`cursor-pointer transition-all duration-300 h-1.5 ${idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/20 hover:bg-white/50'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default EventsInfinite;