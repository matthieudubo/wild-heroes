import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './card.css';

const CardsList = ({
  hero,
  isLoading,
  setCardsPerPage,
  totalCards,
  searchName,
  setCurrentPage,
}) => {
  if (searchName !== '') {
    setCurrentPage(1);
    setCardsPerPage(totalCards);
  } else {
    setCardsPerPage(30);
  }
  return (
    <div className="cards-list">
      {isLoading ? (
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/da734b28921021.55d95297d71f4.gif"
          alt="loader"
          className="loader-cardsList"
        />
      ) : (
        <div className="container-cards-button">
          <div className="container-cards">
            {hero
              .filter((el) =>
                el.name.toLowerCase().includes(searchName.toLowerCase())
              )
              .map((el) => (
                <Card
                  key={el.id}
                  name={el.name}
                  image={el.image.url}
                  alignment={el.biography.alignment}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
CardsList.propTypes = {
  hero: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCardsPerPage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchName: PropTypes.string.isRequired,
  totalCards: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default CardsList;
