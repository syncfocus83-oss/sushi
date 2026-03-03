import React from 'react';

const productsData = {
  sushi: [
    { name: 'Green Machine', image: '/products/sushi_rolls/sushi/green-machine.png' },
    { name: 'Spicy Tuna', image: '/products/sushi_rolls/sushi/spicy-tuna.png' }
  ],
  wraps: [
    { name: 'Vegan Wrap', image: '/products/wraps/vegan-wrap.png' },
    { name: 'Chicken Wrap', image: '/products/wraps/chicken-wrap.png' }
  ]
};

const Products = () => {
  return (
    <div>
      <h1>Our Products</h1>
      <h2>Sushi</h2>
      <div className="product-category">
        {productsData.sushi.map((product, index) => (
          <div key={index} className="product-item">
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
          </div>
        ))}
      </div>
      <h2>Wraps</h2>
      <div className="product-category">
        {productsData.wraps.map((product, index) => (
          <div key={index} className="product-item">
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
