import React, { useState } from 'react';
import './WeekSpecials.css';

const specials = [
  {
    id: 1,
    title: "La Fiesta sushi roll",
    description: "Zwarte rijst, Avocado en jalapeno met een doorsnijding van rode ui en koriander chips",
    // Using pickle-me.png as it matches the purple/green visual of La Fiesta
    image: "/products/sushi_rolls/sushi/pickle-me.png" 
  },
  {
    id: 2,
    title: "Chic Pea sushi roll",
    description: "Zwarte rijst, geroosterde aubergine, artisjok, bovenop saffraan kikkererwtpuree.",
    // Using chic_pea.png
    image: "/products/sushi_rolls/sushi/chic_pea.png"
  },
  {
    id: 3,
    title: "Sunny Side sushi roll",
    description: "Zwarte rijst, gesmoorde venkel, zongedroogde tomaat, bovenop flespompoen en amandel pesto",
    // Using sweet-tree.png (Yellow topper matches description)
    image: "/products/sushi_rolls/sushi/sweet-tree.png"
  }
];

const WeekSpecials = () => {
  const [index, setIndex] = useState(0);
  const slide = specials[index];

  const next = () => setIndex((prev) => (prev + 1) % specials.length);
  const prev = () => setIndex((prev) => (prev - 1 + specials.length) % specials.length);

  return (
    <div className="specials-wrapper">
      <div className="specials-header-bar">Specialiteiten deze week</div>
      
      <div className="slider-container">
        <button className="arrow-btn left" onClick={prev}>❮</button>
        
        <div className="slide-content">
          <div className="slide-image">
            <img src={slide.image} alt={slide.title} />
          </div>
          <div className="slide-text">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>

        <button className="arrow-btn right" onClick={next}>❯</button>
      </div>
    </div>
  );
};

export default WeekSpecials;