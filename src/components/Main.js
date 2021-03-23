import api from '../utils/Api.js';
import { useState, useEffect } from 'react';
import Card from './Card.js';

function Main(props) {

  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  const cardsHandler = () => {
    api.getCards()
      .then(data => {
        const cards = data.map(item => {
          return {
            id: item._id,
            link: item.link,
            name: item.name
          }
        })
        setCards(cards);
      }).catch(err => console.log(`При загрузке данных возникла ошибка: ${err.status}`));
  }

  const userInfoHandler = () => {
    api.getUserInfo()
      .then(userInfo => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
      })
      .catch(err => console.log(`При загрузке данных возникла ошибка: ${err.status}`));
  }

  useEffect(() => {
    userInfoHandler()
    cardsHandler()
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <button className="profile__avatar-button" type="button" aria-label="Изменить аватар" onClick={props.onEditAvatar}>
            <img src={`${userAvatar}`} alt="Фото профиля" className="profile__avatar" />
          </button>
          <div className="profile__info">
            <div className="profile__title-container">
              <h1 className="profile__title">{userName}</h1>
              <button className="profile__edit-button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>

        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить карточку" onClick={props.onAddPlace}></button>
      </section>

      <section className="cards">
        <ul className="cards__list">
          {
            cards.map(item =>
              <Card
                key={item.id}
                id={item.id}
                link={item.link}
                name={item.name}
              />)
          }
        </ul>
      </section>

    </main>
  );
}

export default Main;