import style from "./ItemPhoto.module.css";

const ItemPhoto = ({ photos }) => {
  return (
    <>
      {photos.map((photo) => (
        <li className={style.photo_item} key={photo.id}>
          <img
            className={style.image}
            src={photo.urls.small}
            alt={photo.alt_description}
          />
          <div className={style.photo_info}>
            <svg className={style.icon_heart} height="25" width="25">
              <use href="././Image/symbol-defs.svg#icon-heart"></use>
            </svg>
            {photo.likes}
          </div>
        </li>
      ))}
    </>
  );
};

export default ItemPhoto;
