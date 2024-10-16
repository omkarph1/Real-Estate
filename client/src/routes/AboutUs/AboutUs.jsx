// AboutUs.jsx
import React from "react";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <header className="hero-section">
        <img src="/building.jpg" alt="Real Estate Banner" />
        <div className="overlay">
          <h1>About Us</h1>
          <p>Your gateway to luxury living and investment opportunities.</p>
        </div>
      </header>

      <section className="who-we-are">
        <h2>Who We Are</h2>
        <p>
          At <strong>UrbanQuarters</strong>, we are more than just a real estate
          agency—we are your trusted partner on the journey to finding your
          perfect property. With over a decade of experience in the real estate
          industry, we have honed our expertise in identifying the right
          opportunities for individuals, families, and businesses. Our extensive
          portfolio spans across residential, commercial, and luxury spaces,
          offering tailored solutions for first-time buyers, seasoned investors,
          and high-net-worth clients alike.
        </p>

        <p>
          Our approach is simple: <strong>We prioritize your needs.</strong>{" "}
          From initial consultations to closing deals, we listen carefully to
          your goals and work diligently to make them a reality. Whether it’s a
          cozy apartment in the heart of the city, a commercial space to grow
          your business, or an opulent estate in a serene location, our team
          ensures every client feels empowered throughout the entire process.
          <strong>
            Your satisfaction isn’t just a goal—it’s our driving force.
          </strong>
        </p>
        <div className="box">
          <p>At UrbanQuarters, we pride ourselves on three core values:</p>

          <ul className="core-values">
            <li>
              <strong>Integrity:</strong> Transparency and honesty guide every
              interaction we have with our clients.
            </li>
            <li>
              <strong>Expertise:</strong> With in-depth market knowledge, we
              provide insights and advice you can trust.
            </li>
            <li>
              <strong>Commitment:</strong> We go above and beyond to ensure a
              smooth and successful property journey.
            </li>
          </ul>
        </div>
        <p>
          We also stay ahead of the curve by leveraging the latest technology
          and market trends. Our innovative tools make it easier for clients to
          browse properties, schedule visits, and complete transactions—giving
          you a modern, hassle-free experience. With a strong network of
          partners, including lenders, legal experts, and contractors, we offer
          end-to-end support to streamline every aspect of your real estate
          journey.
        </p>

        <p>
          At UrbanQuarters, we are not just helping people buy or sell
          properties; we are creating relationships that last. Every client is a
          part of our growing community, and we remain committed to supporting
          you even after the deal is done. Whether you're buying, selling, or
          investing, let us be your guide to a better future. Together, we’ll
          find a place you’ll love calling home.
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 UrbanQuarters Real Estate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
