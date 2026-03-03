import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const data = {
  // Home Page: 3 Main Categories
  categories: [
    { 
      title: "Sushi", 
      img: "/products/sushi_rolls/sushi/green-machine.png", 
      link: "/menu/sushi" 
    },
    { 
      title: "Wraps", 
      img: "/products/rice_paper_wraps/spicy_shroom_wrap.png", 
      link: "/menu/wraps-soup" 
    },
    { 
      title: "Soepen", 
      img: "/products/soups/soep/red_miso_noodle_soup.png", // Updated to likely name
      link: "/menu/wraps-soup" 
    }
  ],
  // Sushi Menu Page
  sushi: [
    { title: "Pickle me", img: "/products/sushi_rolls/sushi/pickle-me.png" },
    { title: "Sushi", img: "/products/sushi_rolls/sushi/sushi.png" },
    { title: "Sweet tree", img: "/products/sushi_rolls/sushi/sweet-tree.png" },
    { title: "Mighty-mushroom", img: "/products/sushi_rolls/sushi/mighty-mushroom.png" },
    { title: "Green machine", img: "/products/sushi_rolls/sushi/green-machine.png" },
    { title: "Chick pea", img: "/products/sushi_rolls/sushi/chic_pea.png" },
  ],
  // Wraps & Soup Menu Page
  wraps: [
    { title: "Nutty buddy", img: "/products/rice_paper_wraps/nutty_buddy.png" },
    { title: "Spicy shroom wrap", img: "/products/rice_paper_wraps/spicy_shroom_wrap.png" },
    { title: "Sweet bean*", img: "/products/rice_paper_wraps/sweet-bean.png" },
    
    // Updated Soup Filenames below based on your file tree clipping
    { title: "Coconut curry soup", img: "/products/soups/soep/coconut_curry_soup.png", type: "round" }, 
    // Note: If this still fails, try: coconut_curry_starter_soup.png
    
    { title: "Dumpling soup", img: "/products/soups/soep/dumpling_soup.png", type: "round" },
    
    { title: "Red miso noodle soup", img: "/products/soups/soep/red_miso_noodle_soup.png", type: "round" }
    // Note: Added _soup.png to match standard naming if the previous one failed
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
                {/* Shows image. If missing, shows white box (the 'balk') + alt text */}
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className={item.type === 'round' ? 'img-round' : ''}
                  onError={(e) => {
                    e.target.style.display = 'none'; // Optional: Hides the broken icon/text if you prefer empty white
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