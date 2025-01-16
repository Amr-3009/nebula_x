import { chair, headphone } from "../assets";
import { IoIosArrowForward } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
const Shop = () => {
  return (
    <section className="shop">
      {/* Decorative Shapes */}
      <div className="shop-shapes">
        <div className="shop-circle shop-circle-1"></div>
        <div className="shop-circle shop-circle-2"></div>
        <div className="shop-dots"></div>
        <div className="shop-triangle"></div>
        <div className="shop-wave"></div>
      </div>

      {/* Content Section */}
      <div className="shop-content">
        <p className="label">We help you</p>
        <h2>
          Sell
          <br />
          Stunning
          <br />
          Products
        </h2>
        <p className="description">
          We&apos;ll guide you through our unique 5-step
          <br />
          brand-building framework
        </p>
        <button className="cta-button" aria-label="View More Details">
          <span>MORE DETAILS</span>
          <IoIosArrowForward aria-hidden="true" />
        </button>
      </div>

      {/* Products Section */}
      <div className="products">
        {/* First Product */}
        <div className="product" data-aos="fade-left">
          <div className="product-header">
            <img src={chair} alt="Minimal Chair" loading="lazy" />
            <p>Minimal Chair</p>
          </div>
          <div className="product-footer">
            <p className="price">$204.00</p>
            <button className="cart-button" aria-label="Add chair to cart">
              <FaShoppingCart aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Second Product */}
        <div className="product" data-aos="fade-left" data-aos-delay="100">
          <div className="product-header">
            <img src={headphone} alt="Beats Headphone" loading="lazy" />
            <p>Beats Headphone</p>
          </div>
          <div className="product-footer">
            <p className="price">$74.00</p>
            <button className="cart-button" aria-label="Add headphone to cart">
              <FaShoppingCart aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
