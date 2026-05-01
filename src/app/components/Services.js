function Services() {
  return (
    <section className="Services" id="Services">

      {/* Section Title */}
      <h2 data-aos="fade-up">Our Services</h2>

      <div className="Services-container">

        {/* Card 1 */}
        <div className="Services-card" >
          <img src="./images/Graphic icon.png" alt="Graphic Design" />

          <div className="Services-info">
            <h3>Graphic Design</h3>
            <p>
              We make more crowd dive into your business with unique and
              captivating designs. We create the best marketing materials for any business.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="Services-card" >
          <img src="./images/web icon.png" alt="Web Development" />

          <div className="Services-info">
            <h3>Web Development</h3>
            <p>
              Our developers use the latest technologies to build high-performance
              and scalable websites.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="Services-card" >
          <img src="./images/e-commerce.png" alt="Ecommerce" />

          <div className="Services-info">
            <h3>E-Commerce Development</h3>
            <p>
              Launch your online business with powerful and user-friendly
              e-commerce solutions.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="Services-card" >
          <img src="./images/digital icon.png" alt="Digital Marketing" />

          <div className="Services-info">
            <h3>Digital Marketing & SEO</h3>
            <p>
              Our SEO experts utilize the keywords to the fullest to rank high.
              We optimize your website as per search engine criteria.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="Services-card" >
          <img src="./images/mobile icon.png" alt="Mobile App Development" />

          <div className="Services-info">
            <h3>Mobile App Development</h3>
            <p>
              User-friendly and responsive mobile applications make your business
              easily accessible for clients.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;