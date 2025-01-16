import { icom, media24, office, online, smart } from "../assets";

const Compaines = () => {
  return (
    <section className="companies">
      <div>
        <p>Compaines we&apos;ve helped</p>
      </div>
      <div className="logos">
        <img src={media24} alt="media-24" className="logo" />
        <img src={online} alt="online" className="logo" />
        <img src={office} alt="office" className="logo" />
        <img src={smart} alt="smart" className="logo" />
        <img src={icom} alt="icom" className="logo" />
      </div>
    </section>
  );
};

export default Compaines;
