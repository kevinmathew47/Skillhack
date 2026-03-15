"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

function MissionCard({ mission, index }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Vertical parallax: cards move slightly up/down with scroll
  const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yParallaxSpring = useSpring(yParallax, { stiffness: 100, damping: 20 });

  return (
    <div className="framer-card-outer" ref={cardRef} style={{ zIndex: index + 10 }}>
      <motion.div
        className="framer-card-inner"
        style={{ y: yParallaxSpring }}
        initial={{ 
          rotate: mission.rotation, 
          opacity: 0,
          scale: 0.95
        }}
        whileInView={{ 
          opacity: 1,
          scale: 1,
          transition: { 
            type: "spring", 
            stiffness: 100, 
            damping: 15,
            delay: index * 0.1 
          }
        }}
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{ 
          rotate: 0, 
          scale: 1.02,
          boxShadow: "0 25px 90px rgba(0,0,0,0.15)",
          transition: { 
            type: "spring", 
            stiffness: 400, 
            damping: 25 
          }
        }}
      >
        <div className="framer-marker">
          <div className="framer-marker-circle">{mission.id}</div>
        </div>

        <h2 className="framer-card-title">{mission.title}</h2>
        
        <div className="framer-card-text">
          <p>{mission.text}</p>
          {mission.extraText && <p style={{ marginTop: '1rem' }}>{mission.extraText}</p>}
        </div>

        <div className="framer-card-media">
          <img 
            src={mission.image} 
            alt={mission.title} 
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function MissionSection() {
  const sectionRef = useRef(null);

  const missions = [
    {
      id: 1,
      title: "Mission 1: The Tom Cruise Cliff Jump & Cinematic Proof of Concept",
      text: "A custom high-impact prosthetic leg - built from scratch for motocross landings, not walking. Engineered to absorb extreme forces, protect a vulnerable spine, and enable a live cinematic jump in Norway inspired by Mission: Impossible - captured for a documentary with global reach. One jump. Real risk. Real engineering. A blueprint for adaptive action sports worldwide.",
      image: "https://images.unsplash.com/photo-1601024445121-e294b4116d4a?w=1200&q=80",
      rotation: -3,
    },
    {
      id: 2,
      title: "Mission 2: Wingsuit Flight at 42,000ft - Spinal Protection & Survival",
      text: "Wingsuit flight demands perfect bilateral symmetry. Syam has one leg and severe scoliosis - making this mission widely considered impossible. The solution: a hand-controlled mechanical leg that dynamically balances mass and restores aerodynamic control mid-flight, paired with a custom thermal suit and redundant oxygen systems.",
      extraText: "Three years of preparation. Wind tunnel testing in Sweden. Progressive jump validation. And a target of 42,000ft - where aerospace begins.",
      image: "https://images.unsplash.com/photo-1532452119098-a3650b3c46d3?w=1200&q=80",
      rotation: 3,
    },
  ];

  return (
    <section id="mission" className="mission-section" ref={sectionRef}>
      <div className="mission-bg-text-framer" aria-hidden="true">
        MISSION
      </div>
      
      <div className="framer-mission-container">
        {missions.map((mission, index) => (
          <MissionCard mission={mission} index={index} key={mission.id} />
        ))}
      </div>
    </section>
  );
}
