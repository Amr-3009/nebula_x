import { fashion_store, home_furniture, super_gadget_store } from "../assets";

const store = [
  {
    image: fashion_store,
    name: "Fashion Store",
    description:
      "Shop ladies fashion at Missguided USA. With hundreds of new styles hitting our shelves every week, there's no better place to shop",
  },
  {
    image: home_furniture,
    name: "Home Furniture",
    description:
      "Provides superior quality furniture and mattresses at a price that customers can easily afford.",
  },
  {
    image: super_gadget_store,
    name: "Super Gadget Store",
    description:
      "Specialize in selling unique gifts, cool gadgets, outdoor gear, and fab toys",
  },
];

const Stores = () => {
  return (
    <section className="stores">
      <div className="stores-shapes">
        <div className="stores-circle stores-circle-1"></div>
        <div className="stores-circle stores-circle-2"></div>
        <div className="stores-dots"></div>
        <div className="stores-triangle"></div>
        <div className="stores-wave"></div>
        <div className="stores-small-circle"></div>
        <div className="stores-small-dots"></div>
        <div className="stores-zigzag"></div>
      </div>
      <div className="store">
        {store.map((store, index) => (
          <div key={index} className="store-card">
            <div className="image-container">
              <img src={store.image} alt={store.name} />
            </div>
            <p>{store.name}</p>
            <p>{store.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stores;
