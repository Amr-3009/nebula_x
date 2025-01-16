import { IoMdMail } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { contact } from "../assets";

const Contact = () => {
  return (
    <section className="contact">
      {/* Decorative Shapes */}
      <div className="contact-shapes">
        <div className="contact-circle contact-circle-1"></div>
        <div className="contact-circle contact-circle-2"></div>
        <div className="contact-circle contact-circle-3"></div>
        <div className="contact-dots contact-dots-1"></div>
        <div className="contact-dots contact-dots-2"></div>
        <div className="contact-triangle"></div>
        <div className="contact-wave"></div>
        <div className="contact-blob"></div>
      </div>
      <div className="form-container">
        <form>
          <h2>Write Us</h2>
          <div className="input-wrapper">
            <div className="input-group">
              <IoMdMail className="icon" />
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="input-group message">
              <MdMessage className="icon" />
              <textarea placeholder="Enter your message" rows="8"></textarea>
            </div>
            <button type="submit">Send your message</button>
          </div>
        </form>
      </div>
      <div className="contact-image-container">
        <img src={contact} alt="contact illustration" />
      </div>
    </section>
  );
};

export default Contact;
