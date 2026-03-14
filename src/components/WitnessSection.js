import Link from "next/link";

export default function WitnessSection() {
  return (
    <section id="about" className="witness-section">
      {/* Left: stats + buttons */}
      <div className="witness-left">
        <div className="witness-stats">
          <p><span className="stat-num yellow">16</span> Surgeries</p>
          <p><span className="stat-num yellow">100+</span> Solo Skydiving</p>
          <p><span className="stat-num yellow">42000ft</span> Wingsuit Flying</p>
          <p>Tom Cruise Cliff Jump</p>
        </div>
        <div className="witness-btns">
          <Link href="/fund" className="btn-fund">Fund my dream</Link>
          <a href="#journey" className="btn-outline-dark">View all records</a>
        </div>
      </div>

      {/* Center: Kerala map shape + Syam's photo */}
      <div className="witness-center">
        {/* Accurate Kerala state silhouette SVG */}
        <svg className="kerala-svg" viewBox="0 0 220 520" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fill="#FFD313" d={`
            M148,4 L155,6 L160,10 L157,16 L162,20 L158,26 L163,30 L165,36
            L160,42 L166,48 L162,55 L168,60 L165,67 L170,73 L167,80
            L172,86 L168,93 L174,99 L171,107 L176,113 L173,120
            L178,127 L175,135 L180,141 L176,149 L181,155 L178,163
            L183,170 L178,178 L184,185 L179,193 L185,200 L180,208
            L186,215 L181,223 L187,230 L182,238 L188,245 L183,252
            L188,260 L184,267 L189,274 L184,282 L190,289 L185,296
            L190,303 L185,311 L191,318 L186,325 L191,332 L186,340
            L191,347 L186,354 L192,361 L186,368 L192,375 L186,382
            L191,389 L186,396 L192,403 L186,410 L191,416 L186,422
            L191,428 L186,434 L190,440 L185,445 L188,450 L183,455
            L187,460 L182,465 L185,470 L180,474 L183,478 L178,482
            L180,486 L175,489 L178,493 L173,496 L175,500 L170,503
            L165,505 L160,507 L155,508 L150,509 L145,510 L140,509
            L135,508 L130,506 L125,504 L128,500 L123,497 L126,493
            L121,490 L124,486 L119,483 L122,479 L117,476 L120,472
            L115,469 L118,465 L113,462 L116,458 L111,455 L113,450
            L108,447 L122,445 L128,443 L130,438 L125,435 L120,432
            L115,430 L110,427 L105,424 L100,421 L95,418 L92,414
            L88,410 L85,406 L82,402 L80,398 L78,393 L76,389
            L74,384 L72,379 L71,374 L70,369 L69,364 L68,359
            L67,354 L67,348 L67,342 L68,336 L69,330 L71,324
            L72,318 L74,312 L77,306 L80,300 L83,295 L87,289
            L91,284 L95,279 L99,274 L104,269 L108,265 L113,260
            L117,256 L121,251 L124,247 L128,242 L131,238 L134,233
            L136,229 L138,224 L140,220 L141,215 L142,211 L143,206
            L143,201 L143,196 L142,191 L140,186 L138,181 L136,177
            L134,172 L131,168 L128,163 L125,159 L122,154 L120,150
            L117,145 L114,141 L112,136 L110,131 L108,126 L107,121
            L105,116 L104,111 L103,106 L102,100 L101,95 L100,90
            L99,84 L99,78 L98,72 L99,66 L100,60 L102,54
            L104,48 L107,42 L110,36 L113,31 L117,26 L121,21
            L125,17 L130,13 L135,9 L140,6 L145,4 L148,4 Z
          `} />
        </svg>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="witness-photo"
          src="https://framerusercontent.com/images/wQsWTDxmQkztYSuYxvoHp0IgiE.png"
          alt="Syam Kumar"
          loading="lazy"
        />
      </div>

      {/* Right: heading */}
      <div className="witness-right">
        <h2 className="witness-title">
          Witness The Journey:<br />From Biological Mutiny<br />to Sky Mastery
        </h2>
      </div>
    </section>
  );
}
