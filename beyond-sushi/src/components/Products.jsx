import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

// Import all product images
import greenMachine from '../assets/products/sushi_rolls/sushi/green-machine.png';
import pickleme from '../assets/products/sushi_rolls/sushi/pickle-me.png';
import sushi from '../assets/products/sushi_rolls/sushi/sushi.png';
import sweettree from '../assets/products/sushi_rolls/sushi/sweet-tree.png';
import mightyMushroom from '../assets/products/sushi_rolls/sushi/mighty-mushroom.png';
import chicpea from '../assets/products/sushi_rolls/sushi/chic_pea.png';
import nuttybuddy from '../assets/products/rice_paper_wraps/nutty_buddy.png';
import spicyshroomwrap from '../assets/products/rice_paper_wraps/spicy_shroom_wrap.png';
import sweetbean from '../assets/products/rice_paper_wraps/sweet-bean.png';
import coconutcurrysoup from '../assets/products/soups/soep/coconut_curry_soup.png';
import dumplingsoup from '../assets/products/soups/soep/dumpling_soup.png';
import redmisonoodlesoup from '../assets/products/soups/soep/red_miso_noodle_soup.png';

const data = {
  // Home Page: 3 Main Categories
  categories: [
    { 
      title: "Sushi", 
      img: greenMachine, 
      link: "/menu/sushi" 
    },
    { 
      title: "Wraps", 
      img: spicyshroomwrap, 
      link: "/menu/wraps-soup" 
    },
    { 
      title: "Soepen", 
      img: redmisonoodlesoup,
      link: "/menu/wraps-soup" 
    }
  ],
  // Sushi Menu Page
  sushi: [
    { title: "Pickle me", img: pickleme },
    { title: "Sushi", img: sushi },
    { title: "Sweet tree", img: sweettree },
    { title: "Mighty-mushroom", img: mightyMushroom },
    { title: "Green machine", img: greenMachine },
    { title: "Chick pea", img: chicpea },
  ],
  // Wraps & Soup Menu Page
  wraps: [
    { title: "Nutty buddy", img: nuttybuddy },
    { title: "Spicy shroom wrap", img: spicyshroomwrap },
    { title: "Sweet bean*", img: sweetbean },
    
    { title: "Coconut curry soup", img: coconutcurrysoup, type: "round" }, 
    { title: "Dumpling soup", img: dumplingsoup, type: "round" },
    { title: "Red miso noodle soup", img: redmisonoodlesoup, type: "round" }
  ]
};

const Products = ({ viewMode }) => {
  const items = data[viewMode] || [];
  const isHome = viewMode === 'categories';

  return (
    <div className={`products-grid ${isHome ? 'home-grid' : ''}`}> 
      {items.map((item, index) => (
        <div key={index} className="card-container-outer">
          {isHome ? (
            // --- HOME PAGE: Header + Image ---
            <Link to={item.link} className="product-card category-card">
              <div className="card-header">{item.title}</div>
              <div className="card-image">
                <img src={item.img} alt={item.title} />
              </div>
            </Link>
          ) : (
            // --- MENU PAGE: Image + Footer ---
            <div className="product-card menu-card">
              <div className="card-image">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className={item.type === 'round' ? 'img-round' : ''}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="card-footer">{item.title}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;