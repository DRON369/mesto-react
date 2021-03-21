function Main(props) {

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <button className="profile__avatar-button" type="button" aria-label="Изменить аватар" onClick={props.onEditAvatar}>
            <img src="#" alt="Фото профиля" className="profile__avatar" />
          </button>
          <div className="profile__info">
            <div className="profile__title-container">
              <h1 className="profile__title"></h1>
              <button className="profile__edit-button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__subtitle"></p>
          </div>

        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить карточку" onClick={props.onAddPlace}></button>
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
  );
}

export default Main;