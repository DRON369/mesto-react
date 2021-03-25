function Card(props) {

  function handleClick() {
    props.onCardClick(
      {
        id: props.id,
        link: props.link,
        name: props.name,
      }
    );
  }

  return (
    <li className="cards__item" id={`${props.id}`}>
      <img src={`${props.link}`} alt="Изображение места" className="cards__image" onClick={handleClick}/>
      <button className="cards__remove-button" type="button" aria-label="Удалить карточку"></button>
      <div className="cards__body">
        <h2 className="cards__label">{props.name}</h2>
        <div className="cards__like-container">
          <button className="cards__like-button" type="button" aria-label="Поставить лайк карточке"></button>
          <p className="cards__likes-counter">{props.likes}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;