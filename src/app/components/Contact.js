function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <h2 data-aos="flip-up">Get In <span>Touch</span ></h2 >
        <p class="subtitle"data-aos="flip-up">
      Have a project in mind? We'd love to hear from you
    </p>

        <div className="contact-wrapper">

         
          <form className="contact-form" >

            <div className="row">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
            </div>

            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>

            <button type="submit">Send Message ✈</button>
          </form>

          <div className="contact-info" >

            <div className="info-box" >
            <div class="icon">📞</div>
              <h4>Call Us</h4>
              <p>+91 99627 64888</p>
            </div>

            <div className="info-box">
            <div class="icon">✉</div>
          
              <h4>Email</h4>
              <p>hr@ragadesigners.com</p>
            </div>

            <div className="info-box" >
           <div class="icon">📍</div>
              <h4>Location</h4>
             <p>No. 14 / 28, 1st Floor, shanti Nagar Korattur, Chennai - 600050.</p>
            </div>

            <div className="info-box">
            <div class="icon">⏰</div>
              <h4>Hours</h4>
              <p>Mon - Fri: 9AM - 6PM</p>
            </div>

          </div>

        </div>

   
        <div className="map" >
          <iframe
            src="https://www.google.com/maps?q=Chennai&output=embed"
            title="map"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default Contact;
