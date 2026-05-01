function Footer() {
  return (
    <footer className="footer" >
      <div className="container">

        <div className="footer-grid">

          <div>
            <h3>Raga Designers</h3>
            <p>We build modern websites for your business growth.</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#Hero">Home</a></li>
              <li><a href="#Services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <a href="#portfolio"><li>Web Design</li></a>
            <a href="#portfolio"><li>Development</li></a>
            <a href="#portfolio"><li>SEO</li></a>
            <a href="#portfolio"><li>Branding</li></a>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <p>Email: hr@ragadesigners.com</p>
            <p>Phone: +91 99627 64888</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2025 Raga Designers. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;