import React, { useState } from 'react';
import './Portfolio.css';
import portfolioData from './portfolioData.json';

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowMore(category !== 'Todas');
  };


  const imgFixed = {
    category: 'imgfixed',
    images: [
      'assets/images/imagesPortfolio/model6.jpeg',
      'assets/images/imagesPortfolio/model6.jpeg',
      'assets/images/imagesPortfolio/model6.jpeg',
      'assets/images/imagesPortfolio/model6.jpeg',
    ],
  };

  const displayedImages =
    showMore && selectedCategory !== 'Fixa'
      ? portfolioData.find((item) => item.category === selectedCategory)?.images
      : imgFixed.images;

  return (
    <div id='portfolio' className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-categories">
        {portfolioData.map((item, index) => (
          <div
            key={index}
            className={`portfolio-category ${selectedCategory === item.category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(item.category)}
          >
            {item.category}
          </div>
        ))}
      </div>
      <div className="portfolio-cards">
        {displayedImages.map((image, index) => (
          <div key={index} className="card">
            <img
              src={image}
              alt={`Descrição da imagem ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {showMore && selectedCategory !== 'Fixa' && (
        <div className="overlay">
          <div className="overlay-content">
            <div className="close-button" onClick={() => setShowMore(false)}>
              Fechar
            </div>
            <div className="overlay-scrollable">
              <div className="card-container">
                {portfolioData.find((item) => item.category === selectedCategory)?.images.map((image, index) => (
                  <div key={index} className="card">
                    <img
                      src={image}
                      alt={`Descrição da imagem ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
