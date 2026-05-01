import { useState, useEffect } from "react";

const slides = [
  {
    role: "Graphic Designing",
    text: "We craft visually stunning and user-friendly designs that leave a lasting impression.",
    img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
  },
  {
    role: "Web Development",
    text: "We build responsive, fast, and modern websites tailored to your business needs.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    role: "Digital Marketing & SEO",
    text: "Boost your online presence with smart marketing and SEO strategies.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    role: "UI/UX Design",
    text: "We design intuitive and engaging user experiences that convert visitors into customers.",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d"
  }
];

function Hero() {
  const [index, setIndex] = useState(0);
  const [showSecondBtn, setShowSecondBtn] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
      setShowSecondBtn(false); 
    }, 3000);

    return () => clearInterval(interval);
  }, []);

 
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondBtn(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="hero" id="Hero">
      <div className="hero-text" >
        <h1>
          Crafting <span>{slides[index].role}</span><br />
          Experiences
        </h1>

        <p >{slides[index].text}</p>

        <div className="buttons">
    
          <a href="#contact">
            <button className="primary"  data-aos="fade-up" data-aos-delay="400">Get Started</button>
          </a>

        
          {showSecondBtn && (
            <a href="#portfolio">
              <button className="secondary">Explore Our Work</button>
            </a>
          )}
        </div>
      </div>

      <div className="hero-image">
        <img src={slides[index].img} alt="" />
      </div>
    </section>
  );
}

export default Hero;