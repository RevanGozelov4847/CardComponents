import React from 'react';
import Card from '../components/Card';
import Car1 from "../assets/images/car1.jpeg"
import Car2 from "../assets/images/car2.jpeg"
import Car3 from "../assets/images/car3.jpeg"
const Home = () => {
  const products = [
    {
      id: 1,
      image: Car1,
      name: 'Product 1',
      price: '$19.99',
      description: 'Description for Product 1',
    },
    {
      id: 2,
      image: Car2,
      name: 'Product 2',
      price: '$29.99',
      description: 'Description for Product 2',
    },
    {
        id: 3,
        image: Car3,
        name: 'Product 3',
        price: '$39.99',
        description: 'Description for Product 3',
      },
  ];

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div className="cards-container">
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
