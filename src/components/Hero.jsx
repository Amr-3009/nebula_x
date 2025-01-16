import { CiSearch } from "react-icons/ci";
import { hero_profile, profile } from "../assets";

const Hero = () => {
  return (
    <section className="hero">
      {/* Geometric Shapes */}
      <div className="geometric-shapes">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="triangle"></div>
        <div className="triangle triangle-2"></div>
        <div className="dots dots-1"></div>
        <div className="dots dots-2"></div>
        <div className="wave-pattern"></div>
        <div className="small-circles">
          <div className="small-circle"></div>
          <div className="small-circle"></div>
          <div className="small-circle"></div>
          <div className="small-circle"></div>
        </div>
        <div className="squiggly"></div>
        <div className="squiggly"></div>
        <div className="plus-signs">
          <div className="plus"></div>
          <div className="plus"></div>
          <div className="plus"></div>
        </div>
      </div>

      <div className="hero-profile">
        <img src={hero_profile} alt="Digital Marketer" />
        <div className="hero-card">
          <div className="profile-image">
            <img src={profile} alt="Profile" />
          </div>
          <p>James Bruno</p>
          <p>Digital Marketer</p>
        </div>
      </div>

      <div className="call-to-action">
        <h1>
          We Help You
          <br />
          Build & Grow an
          <br />
          Online Business
        </h1>
        <div className="search">
          <input
            type="search"
            placeholder="Tell us what you need to build..."
          />
          <CiSearch />
        </div>
      </div>
    </section>
  );
};

export default Hero;
