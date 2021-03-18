import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
<div className="App">
      <body class="page">
        <div class="page__container">
          <header className="header">
            <div className="header__logo"></div>
          </header>

          <main className="content">
            <section className="profile">
              <div className="profile__container">
                <button className="profile__avatar-button" type="button" aria-label="Изменить аватар">
                  <img src="#" alt="Фото профиля" className="profile__avatar" />
                </button>
                <div className="profile__info">
                  <div className="profile__title-container">
                    <h1 className="profile__title"></h1>
                    <button className="profile__edit-button" aria-label="Редактировать профиль"></button>
                  </div>
                  <p className="profile__subtitle"></p>
                </div>

              </div>
              <button className="profile__add-button" type="button" aria-label="Добавить карточку"></button>
            </section>

            <section className="cards">
              <ul className="cards__list">
              </ul>
            </section>

            <template className="card-template">
              <li className="cards__item" id="">
                <img src="#" alt="Изображение места" className="cards__image" />
                <button className="cards__remove-button" type="button" aria-label="Удалить карточку"></button>
                <div className="cards__body">
                  <h2 className="cards__label"></h2>
                  <div className="cards__like-container">
                    <button className="cards__like-button" type="button" aria-label="Поставить лайк карточке"></button>
                    <p className="cards__likes-counter">0</p>
                  </div>
                </div>
              </li>
            </template>

          </main>

          <footer className="footer">
            <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
          </footer>

          <div className="popup" id="profileEditPopup">
            <div className="popup__container">
              <button className="popup__close-button" type="button" aria-label="Закрыть форму редактирования профиля"></button>
              <h3 className="popup__label">Редактировать профиль</h3>
              <form className="popup__form" method="POST" name="popupEditForm">
                <input className="popup__input" id="profileTitle" type="text" name="profileTitle" placeholder="Ваше имя"
                  autocomplete="off" minlength="2" maxlength="40" required />
                <span id="profileTitle-error" className="error"></span>
                <input className="popup__input" id="profileSubtitle" type="text" name="profileSubtitle" placeholder="О себе"
                  autocomplete="off" minlength="2" maxlength="200" required />
                <span id="profileSubtitle-error" className="error"></span>
                <button className="popup__submit-button" type="submit">Сохранить</button>
              </form>
            </div>
          </div>

          <div className="popup" id="cardAddPopup">
            <div className="popup__container">
              <button className="popup__close-button" type="button" aria-label="Закрыть форму добавления карточки"></button>
              <h3 className="popup__label">Новое место</h3>
              <form className="popup__form" method="POST" name="popupAddCardForm">
                <input className="popup__input" id="placeLabel" type="text" name="placeLabel" autocomplete="off"
                  placeholder="Название" minlength="2" maxlength="30" required />
                <span id="placeLabel-error" className="error"></span>
                <input className="popup__input" id="placeImage" type="url" name="placeImage" autocomplete="off"
                  placeholder="Ссылка на картинку" required />
                <span className="error" id="placeImage-error"></span>
                <button className="popup__submit-button" type="submit" disabled="disabled">Создать</button>
              </form>
            </div>
          </div>

          <div className="popup popup_type_delete" id="cardDelPopup">
            <div className="popup__container popup__container_type_delete">
              <button className="popup__close-button" type="button" aria-label="Закрыть форму удаления карточки"></button>
              <h3 className="popup__label popup__label_type_delete">Вы уверены?</h3>
              <form className="popup__form" method="POST" name="popupDelCardForm">
                <button className="popup__submit-button popup__submit-button_type_delete" type="submit">Да</button>
              </form>
            </div>
          </div>

          <div className="popup popup_type_avatar" id="profileChangeAvatar">
            <div className="popup__container popup__container_type_avatar">
              <button className="popup__close-button" type="button" aria-label="Закрыть форму редактирования аватара"></button>
              <h3 className="popup__label">Обновить аватар</h3>
              <form className="popup__form" method="POST" name="popupEditForm">
                <input className="popup__input" id="avatarLink" type="url" name="avatarLink" placeholder="Ссылка на изображение"
                  autocomplete="off" minlength="2" maxlength="120" required />
                <span id="avatarLink-error" className="error"></span>
                <button className="popup__submit-button" type="submit">Сохранить</button>
              </form>
            </div>
          </div>

          <div className="popup popup_type_image">
            <figure className="popup__container popup__container_type_image">
              <button className="popup__close-button" type="button" aria-label="Закрыть просмотр изображения"></button>
              <img src="#" alt="Увеличенное изображение места" className="popup__image" />
              <figcaption className="popup__label popup__label_type_image"></figcaption>
            </figure>
          </div>
        </div>
      </body>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
