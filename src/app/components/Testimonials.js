import { useEffect, useRef } from "react";

function Testimonials() {
  const slideRef = useRef(null);

  useEffect(() => {
    let position = 0;
    const speed = 0.5;

    const scroll = () => {
      if (!slideRef.current) return;

      position += speed;

      if (position >= slideRef.current.scrollWidth / 2) {
        position = 0;
      }

      slideRef.current.style.transform = `translateX(-${position}px)`;

      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  return (
    <section className="feedback" id="Testimonials" >
      <div className="container">

        <h2>Client <span>Testimonials</span></h2>
         <p className="subtitle">
      What our clients say about our work and dedication
    </p>

        <div className="slider">
          <div className="slides" ref={slideRef}>

            {[...Array(2)].map((_, i) => (
              <>
                <div className="card">
                  <p>
                    “Thank you Dear Mr Karthick & Dear Raga Team for all your support guidance and help in creating and launching our web site AURA GLOBAL INDIA this evening.
                  </p>
                  <div className="client">
                    <img src="/images/fed1.jpg" alt="" />
                    <h4>Jagadish KK - Aura Global India</h4>
                  </div>
                </div>

                <div className="card">
                  <p>
                   “They have one of the Best Designer Teams. Very Understanding, Approachable, Dedicated, and Honest members. Value for Money.”
                  </p>
                  <div className="client">
                    <img src="/images/fed2.png" alt="" />
                    <h4>Sree Bhagavathy Logistics</h4>
                  </div>
                </div>
                <div className="card">
                  <p>
                   “We are very pleased with Raga Designers level of commitment, dedication, and turnaround times on our projects. Their development team is very keen on change requests and communication.”
                  </p>
                  <div className="client">
                    <img src="/images/fed3.png" alt="" />
                    <h4>Prem Kumar</h4>
                  </div>
                </div>
                <div className="card">
                  <p>
                  “Work quality and responsiveness very good. Thank you Raga Designers and Team.”
                  </p>
                  <div className="client">
                    <img src="/images/fed4.jpg" alt="" />
                    <h4>Heaven Makers Construction</h4>
                  </div>
                </div>
              </>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;