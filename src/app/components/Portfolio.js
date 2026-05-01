import { useState } from "react";

function Portfolio() {
  const [filter, setFilter] = useState("all");

  const items = [
    { category: "web", img: "/images/web1.jpg", link: "https://luminouschennai.com/" },
    { category: "web", img: "/images/web2.jpg", link: "https://meikkanenterprises.com/" },
    { category: "web", img: "/images/web3.jpg", link: "https://truwellpipes.com/" },

    { category: "app", img: "/images/res1.webp", link: "https://meikkanenterprises.com/about.php" },
    { category: "app", img: "/images/res2.jpg", link: "https://maitracommodities.com/" },
    { category: "app", img: "/images/res3.jpg", link: "https://www.doctorcare.co/" },

    { category: "brand", img: "/images/app1.png", link: "#" },
    { category: "brand", img: "/images/app2.png", link: "#" },
    { category: "brand", img: "/images/app3.png", link: "#" },
  ];

  return (
    <section className="portfolio" id="portfolio" >
      <h2>Portfolio</h2>

      
      <div className="filters" data-aos="zoom-in" >
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "web" ? "active" : ""}
          onClick={() => setFilter("web")}
        >
          Web
        </button>

        <button
          className={filter === "app" ? "active" : ""}
          onClick={() => setFilter("app")}
        >
          Responsive
        </button>

        <button
          className={filter === "brand" ? "active" : ""}
          onClick={() => setFilter("brand")}
        >
          Mobile App
        </button>
      </div>

      
      <div className="grid">
        {items
          .filter(item => filter === "all" || item.category === filter)
          .map((item, i) => (
            <div key={i} className="portfolio-card">

              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.img} alt="project" />
              </a>

            </div>
          ))}
      </div>
    </section>
  );
}

export default Portfolio;