import style from "./CertificatePage.module.css";

const CertificatePage = () => {
  return (
    <div className={style.container}>
      <ul className={style.certificate_list}>
        <li className={style.list_item}>
          <img
            className={style.photo}
            src="./Image/Certificate/1.png"
            width="500"
            height="700"
            alt=""
          />
        </li>
        <li className={style.list_item}>
          <img
            className={style.photo}
            src="./Image/Certificate/2.png"
            width="500"
            height="700"
            alt=""
          />
        </li>
        <li className={style.list_item}>
          <img
            className={style.photo}
            src="./Image/Certificate/3.png"
            width="500"
            height="700"
            alt=""
          />
        </li>
        <li className={style.list_item}>
          <img
            className={style.photo}
            src="./Image/Certificate/4.png"
            width="500"
            height="700"
            alt=""
          />
        </li>
      </ul>
    </div>
  );
};

export default CertificatePage;
