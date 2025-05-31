import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to BiteHaven, where great food meets warm hospitality. We
              are more than just a place to eat — we are a culinary experience
              built on passion, tradition, and a love for flavorful cuisine. At
              BiteHaven, we believe that every meal should be a celebration. Our
              chefs use only the freshest ingredients to craft dishes that not
              only satisfy your appetite but also tell a story. From timeless
              classics to modern favorites, each bite is made with care and
              creativity. Whether you're here for a casual lunch, a family
              dinner, or a special occasion, we strive to make every visit
              memorable with exceptional service and a cozy ambiance. Come,
              savor the taste — and become a part of our growing family.
            </p>
            <Link
              className="menuBtn"
              onClick={() => {
                const menuSection = document.getElementById("menu");
                if (menuSection) {
                  menuSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
