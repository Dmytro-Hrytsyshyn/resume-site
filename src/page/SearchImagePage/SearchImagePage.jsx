import { useEffect, useState } from "react";
import style from "./SearchImagePage.module.css";
import fetchPhotos from "/api.js";
import ListPhoto from "./ListPhoto/ListPhoto";

const SearchImagePage = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [userQuery, setUserQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [photos, setPhotos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserQuery(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    if (!userQuery) {
      return;
    }
    const testFetch = async () => {
      const { data } = await fetchPhotos(userQuery, 1);
      setPhotos(data.results);
    };
    testFetch();
  }, [userQuery]);

  return (
    <div className={style.search_image_container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          value={inputValue}
          type="text"
          placeholder="Search photo"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className={style.search_btn}>
          <svg className={style.icon} height="22" width="22">
            <use href="./Image/symbol-defs.svg#search"></use>
          </svg>
        </button>
      </form>
      <ListPhoto photos={photos} />
    </div>
  );
};

export default SearchImagePage;
