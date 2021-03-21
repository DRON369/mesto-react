function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <figure className="popup__container popup__container_type_image">
        <button className="popup__close-button" type="button" aria-label="Закрыть просмотр изображения"></button>
        <img src="#" alt="Увеличенное изображение места" className="popup__image" />
        <figcaption className="popup__label popup__label_type_image"></figcaption>
      </figure>
    </div>
  )
}
