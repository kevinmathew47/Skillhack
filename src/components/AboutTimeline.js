"use client";

import Link from "next/link";
import { useScrollAnimations } from "@/hooks/useScrollAnimations";

export default function AboutTimeline() {
  const steps = [
    {
      num: 1,
      title: "Born Into the Odds",
      text: (
        <>
          <p>
            Kulathummal village, Kerala. The year 2000. Syam entered the world with a
            right leg fused to his spine, three kidneys, neurogenic bladder, spinal tumour
            risk, and congenital scoliosis. His first surgery came 19 days after birth.
          </p>
          <p>
            By age eight, he had already survived twelve procedures - and then faced the
            defining choice: amputate the leg, or lose his life.
          </p>
          <p>He chose to live.</p>
          <p>
            What followed wasn&apos;t recovery. It was war - fought daily against a body in
            constant rebellion, a school system that excluded him, and a society that had
            already written his story for him. He cleaned classroom benches alone after
            school. He catheterised himself every two hours from age five. He had no friends.
          </p>
          <p>And then he got on a bicycle.</p>
        </>
      ),
      path: "M 0 0 C 10 -20, 30 -30, 40 -10", // SVG path for curved arrow
    },
    {
      num: 2,
      title: "Motion as Defiance",
      text: (
        <>
          <p>
            At sixteen, with kidney function at 25%, Syam bought a cycle with his
            disability pension savings and taught himself to ride. Within three years he
            was covering 100km in five hours. Then 250km in twelve - completing the ride
            with a catheter causing internal bleeding, draining blood-mixed urine twice
            mid-route, and finishing anyway.
          </p>
          <p>Movement became his answer to everything medicine couldn&apos;t fix.</p>
          <p>
            In 2020, his kidneys failed. Three years of dialysis followed - machines,
            immobility, and the quiet death of every athletic dream he had built.
          </p>
          <p>
            Depression set in. By his own account, the desire to live had all but
            disappeared.
          </p>
          <p>
            Then he watched an anime scene of a skydive and thought: let me die doing
            something worth dying for.
          </p>
        </>
      ),
      path: "M 0 0 C -20 -30, -50 -20, -60 10",
      isRight: true, // Number on right side
    },
    {
      num: 3,
      title: "The Sky as Reclamation",
      text: (
        <>
          <p>The United States Parachute Association rejected him 144 times.</p>
          <p>
            He jumped anyway - solo, on his first attempt. On his third jump, a
            catastrophic spin put him upside down with his canopy tangled around his
            head. For four seconds, he was certain he was dead. He untangled it. He
            landed.
          </p>
          <p>
            His chief instructor handed him his own label and said: &quot;Nothing is going to
            happen in your life. This is the ultimate test.&quot;
          </p>
          <p>
            Syam discarded his prosthetic entirely. Without bilateral symmetry, without a
            textbook body, he learned to fly and track - among the most technically
            demanding disciplines in skydiving.
          </p>
          <p>
            He now holds two International Book of Records titles: the youngest amputee
            to solo skydive from 13,000 feet, and the world&apos;s youngest amputee
            paragliding pilot.
          </p>
          <p>
            101+ solo jumps. B-license certified. And the sky, as he puts it, has become too
            small.
          </p>
        </>
      ),
      path: "M 0 0 C 15 -20, 35 -30, 45 -10",
    },
  ];

  return (
    <section className="about-timeline-section">
      <div className="about-timeline-header">
        <h2 className="hero-handwritten text-center" style={{ position: 'relative', margin: '0 0 3rem' }}>
          My story So Far
        </h2>
      </div>

      <div className="about-timeline-container">
        {steps.map((step, index) => (
          <div key={index} className={`about-timeline-card ${step.isRight ? 'right-aligned' : ''}`}>
            <div className="timeline-num-container">
              <div className="timeline-num-circle">
                <span className="timeline-num">{step.num}</span>
              </div>
              
              <svg 
                className={`timeline-arrow ${step.isRight ? 'arrow-right' : 'arrow-left'}`} 
                viewBox="0 0 100 100" 
                preserveAspectRatio="xMidYMid meet"
              >
                {step.isRight ? (
                   // Step 2 arrow
                  <path d="M 80 40 C 60 0, 40 10, 20 60" fill="none" stroke="black" strokeWidth="2" strokeDasharray="5,5" />
                ) : (
                  // Step 1 and 3 arrows
                  <path d="M 20 40 C 40 10, 60 10, 80 60" fill="none" stroke="black" strokeWidth="2" strokeDasharray="5,5" />
                )}
                
                {step.isRight ? (
                   <polygon points="15,55 25,65 15,65" fill="black" />
                ) : (
                  <polygon points="75,55 85,65 85,55" fill="black" />
                )}
                 
              </svg>

              <h3 className="timeline-title">{step.title}</h3>
            </div>
            
            <div className="timeline-content">
              {step.text}
            </div>
          </div>
        ))}
        
        <div className="timeline-cta-container">
            <Link href="/fund" className="btn-fund timeline-cta-btn">
              Be Part of What Comes Next
            </Link>
        </div>
      </div>
    </section>
  );
}
