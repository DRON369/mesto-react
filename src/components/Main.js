import api from '../utils/api.js';
import { useState, useEffect } from 'react';
import Card from './Card.js';
import React from 'react';
import { UserContext } from '../contexts/CurrentUserContext.js';


function Main(props) {

  const user = React.useContext(UserContext);
  const [cards, setCards] = useState([]);
  const [avatar, setAvatar] = useState(user.avatar);

  useEffect(() => {
    //console.log(user.avatar);
    setAvatar(user.avatar);
  }, [user.avatar]);

  const cardsHandler = () => {
    api.getCards()
      .then(data => {
        setCards(data);
      }).catch(err => console.log(`При загрузке данных возникла ошибка: ${err.status}`));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(item => item._id === user._id);
    api.likeCard(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    });
  }

  function handleCardDelete (card) {
    api.deleteCard(card._id).then((delCard) => {
      setCards((state) => state.filter((currentCard) => currentCard._id === card._id ? delCard._id : currentCard));
    });
  }

  useEffect(() => {
    cardsHandler()
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <button className="profile__avatar-button" type="button" aria-label="Изменить аватар" onClick={props.onEditAvatar}>
            <img src={`${avatar}`} alt="Фото профиля" className="profile__avatar" />
          </button>
          <div className="profile__info">
            <div className="profile__title-container">
              <h1 className="profile__title">{user.name}</h1>
              <button className="profile__edit-button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__subtitle">{user.about}</p>
          </div>

        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить карточку" onClick={props.onAddPlace}></button>
      </section>

      <section className="cards">
        <ul className="cards__list">
          {
            cards.map(item => (
              <Card
                card={item}
                key={item._id}
                onCardClick={props.onCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />)
            )}
        </ul>
      </section>

    </main>
  );
}

export default Main;