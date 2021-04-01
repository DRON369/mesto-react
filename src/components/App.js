import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/api.js';
import { useEffect, useState } from 'react';
import { UserContext } from '../contexts/CurrentUserContext.js'

function App() {

  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    api.getUserInfo()
      .then(user => {
        setCurrentUser(user);
      })
      .catch(err => console.log(`При загрузке данных возникла ошибка: ${err.status}`));
  }, [])

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setSelectedCard(null);
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
  }

  return (
    <UserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <div className="page__container">
            <Header />
            <Main
              onEditProfile={handleEditProfileClick}
              onEditAvatar={handleEditAvatarClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
            />
            <Footer />

            <PopupWithForm
              name="edit"
              title="Редактировать профиль"
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
            >
              <input className="popup__input" id="profileTitle" type="text" name="profileTitle" placeholder="Ваше имя"
                autoComplete="off" minLength="2" maxLength="40" required />
              <span id="profileTitle-error" className="error"></span>
              <input className="popup__input" id="profileSubtitle" type="text" name="profileSubtitle" placeholder="О себе"
                autoComplete="off" minLength="2" maxLength="200" required />
              <span id="profileSubtitle-error" className="error"></span>
              <button className="popup__submit-button" type="submit">Сохранить</button>
            </PopupWithForm>

            <PopupWithForm
              name="avatar"
              title="Обновить аватар"
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
            >
              <input className="popup__input" id="avatarLink" type="url" name="avatarLink" placeholder="Ссылка на изображение"
                autoComplete="off" minLength="2" maxLength="120" required />
              <span id="avatarLink-error" className="error"></span>
              <button className="popup__submit-button" type="submit">Сохранить</button>
            </PopupWithForm>

            <PopupWithForm
              name="add-card"
              title="Новое место"
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
            >
              <input className="popup__input" id="placeLabel" type="text" name="placeLabel" autoComplete="off"
                placeholder="Название" minLength="2" maxLength="30" required />
              <span id="placeLabel-error" className="error"></span>
              <input className="popup__input" id="placeImage" type="url" name="placeImage" autoComplete="off"
                placeholder="Ссылка на картинку" required />
              <span className="error" id="placeImage-error"></span>
              <button className="popup__submit-button" type="submit" disabled="disabled">Создать</button>
            </PopupWithForm>

            {selectedCard
              ? <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
              />
              : ('')
            }

          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
