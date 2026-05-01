import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header" >

      
      <div className="logo">
        <img src="/images/logo.png" alt="" />
        <span>RagaDesigners</span>
      </div>

    
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>

   
      <nav className={open ? "nav active" : "nav"}>
        <a href="#Hero" onClick={() => setOpen(false)}>Home</a>
        <a href="#About" onClick={() => setOpen(false)}>About</a>
        <a href="#Services" onClick={() => setOpen(false)}>Services</a>
        <a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a>
        <a href="#Testimonials" onClick={() => setOpen(false)}>Testimonials</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </nav>

    </header>
  );
}

export default Navbar;