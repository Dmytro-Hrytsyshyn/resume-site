import style from "../PersonalProjects/PersonalProjects.module.css";

const PersonalProjects = ({ personalProjects }) => {
  return (
    <>
      {personalProjects.map((item) => (
        <li className={style.project_item} key={item.url}>
          <a className={style.img_url} href={item.url} target="_blank">
            <img className={style.img} src={item.img} alt={item.name} />
            <p className={style.title_click_url}>
              Visit website
              <svg className={style.click_icon} height="55" width="55">
                <use href="/public/Image/symbol-defs.svg#click"></use>
              </svg>
            </p>
          </a>
          <div className={style.info_item}>
            <h4 className={style.name_proj}>{item.name}</h4>
            <p>{item.description}</p>
            <h4 className={style.lang_title}>Language:</h4>
            <p>{item.language.join(", ")}</p>
          </div>
        </li>
      ))}
    </>
  );
};

export default PersonalProjects;
