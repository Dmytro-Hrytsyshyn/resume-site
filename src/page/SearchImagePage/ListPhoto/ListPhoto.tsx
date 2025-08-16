import ItemPhoto from "./ItemPhoto/ItemPhoto";
import style from "./ListPhoto.module.css";

const ListPhoto = ({ photos }) => {
  return (
    <ul className={style.photo_list}>
      <ItemPhoto photos={photos} />
    </ul>
  );
};

export default ListPhoto;
