import React from "react";
import "./Offer.css";

const Offer = () => {
  const offers = [
    {
      id: 1,
      title: "Fresh Fruits Sale",
      discount: "30% OFF",
      description: "Get fresh fruits at amazing prices.",
    },
    {
      id: 2,
      title: "Dairy Products",
      discount: "20% OFF",
      description: "Save more on milk and dairy items.",
    },
    {
      id: 3,
      title: "Grocery Combo",
      discount: "50% OFF",
      description: "Special combo offers for your family.",
    },
  ];

  return (
    <section className="offer">

      <h1>Special Offers</h1>

      <div className="offer-container">

        {offers.map((offer) => (
          <div className="offer-card" key={offer.id}>

            <h2>{offer.title}</h2>

            <h3>{offer.discount}</h3>

            <p>{offer.description}</p>

            <button>
              Shop Now
            </button>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Offer;