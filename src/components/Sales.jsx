import { IoIosArrowForward } from "react-icons/io";
import { photo1, photo2 } from "../assets";
import { IoMdArrowDropupCircle } from "react-icons/io";

const Sales = () => {
  return (
    <section className="sales">
      {/* Decorative Shapes */}
      <div className="sales-shapes">
        <div className="shape-dots dots-1"></div>
        <div className="shape-dots dots-2"></div>
        <div className="shape-circle circle-1"></div>
        <div className="shape-circle circle-2"></div>
        <div className="shape-triangle triangle-1"></div>
        <div className="shape-triangle triangle-2"></div>
        <div className="zigzag"></div>
        <div className="curved-line"></div>
      </div>
      {/* Sales Cards */}
      <div className="cards-container">
        {/* First Card */}
        <div className="card-wrapper first" data-aos="fade-right">
          <div className="blue-circle animate-pulse"></div>
          <div className="card">
            <div className="profile">
              <img src={photo1} alt="Sales Representative" loading="lazy" />
            </div>
            <div className="info">
              <div className="amount">
                <span className="animate-number">$ 7,654</span>
                <span className="arrow" aria-hidden="true">
                  <IoMdArrowDropupCircle />
                </span>
              </div>
              <p className="revenue">
                TOTAL REVENUE <span className="green-text">+$232</span>
              </p>
            </div>
          </div>
          <div className="graph-line">
            <svg viewBox="0 0 100 30" preserveAspectRatio="none">
              <path className="blue-line" d="M0 20 Q25 5 50 15 T100 10" />
            </svg>
          </div>
        </div>

        {/* Second Card */}
        <div
          className="card-wrapper second"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div className="green-circle animate-pulse"></div>
          <div className="card">
            <div className="info">
              <div className="amount">
                <span className="animate-number">$ 9,978</span>
                <span className="arrow" aria-hidden="true">
                  <IoMdArrowDropupCircle />
                </span>
              </div>
              <p className="revenue">
                TOTAL REVENUE <span className="green-text">+$349</span>
              </p>
            </div>
            <div className="profile">
              <img src={photo2} alt="Sales Manager" loading="lazy" />
            </div>
            <div className="graph-line">
              <svg viewBox="0 0 100 30" preserveAspectRatio="none">
                <path className="green-line" d="M0 15 Q25 20 50 10 T100 5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="content" data-aos="fade-up" data-aos-delay="200">
        <span className="label" aria-label="Section Label">
          WHAT WE DO
        </span>
        <h1>
          Increase our
          <br />
          Customers
          <br />
          Sales
        </h1>
        <p>
          Our customers are seeing big results within
          <br />
          the first three months
        </p>
        <button className="cta-button" aria-label="View More Details">
          <span>MORE DETAILS</span>
          <IoIosArrowForward aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};

export default Sales;
